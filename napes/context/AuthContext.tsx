import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from "../config/firebase";
import { useRouter } from "next/router";
import * as Realm from 'realm-web';

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [name, setName] = useState("Calebu");
  const [oneUser, setOneUser] = useState([]);
  const [loader, setLoader] = useState(false)
  const [isExist, setIsExist] = useState(false);

  const [loading, setLoading] = useState(true);
  const [RegErrorMessage, setErrorMessage] = useState("");
  const [LogErrorMessage, setLogErrorMessage] = useState("")
  const router = useRouter()
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: '',
    matric: '',
    password: '',
  })

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {

        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName
        })

      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, []);


  const fetchAllProducts = async (userId: string) => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_ROUTE + '/');
    const data = await res.json();

    const APP_ID = data.apiKey;
    const app = new Realm.App({ id: APP_ID });
    const credentials = Realm.Credentials.anonymous();

    try {
      const user = await app.logIn(credentials);
      const myUser = await user.functions.getOneUser(userId)

      setOneUser(myUser);
    } catch (error) {
      console.log(error)
    }
  }

  console.log("My User Data: ", oneUser);



  // useEffect(() => {
  //   if(user) {
  //     console.log(user);
  //   } else{
  //     console.log("No user");

  //   }
  // }, [])

  const register = async (email: string, password: string) => {
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      // addUser(cred.user.uid, data.firstName, data.lastName, `${cred.user.email}`, data.matric, data.department);
    } catch (error) {

      setLoader(false);
      switch (error) {

        case 'auth/email-already-in-use':
          setErrorMessage("Email already exist");

          break;
        case 'auth/missing-email':
          setErrorMessage("Please Enter An Email Address");
          break;
        case 'auth/invalid-email':
          setErrorMessage("Please Enter A Valid Email Address");
          break;

      }
    }

  }
  const login = async (email: string, password: string) => {
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      return [];
    } catch (error) {
      setLoader(false);
      console.log(error);

      switch (error) {
        case 'auth/user-not-found':
          setLogErrorMessage("You are not Registered!");
          break;
        case 'auth/internal-error':
          setLogErrorMessage("Please enter your password correctly...");

        case 'auth/wrong-password':
          setLogErrorMessage("Please enter a correct password");

          break;
        case 'auth/missing-email':
          setLogErrorMessage("Please Enter An Email Address");
          break;
        case 'auth/invalid-email':
          setLogErrorMessage("Please Enter A Valid Email Address");
          break;

      }
    }
  }

  if (user) {
    fetchAllProducts(user.uid)

  } else {
    console.log("No User Again!!");

  }


  const logout = async () => {
    setUser(null);
    setLoader(false)
    await signOut(auth)
  }
  return <AuthContext.Provider value={{ user, oneUser, login, register, logout, setName, name, data, setData, RegErrorMessage, LogErrorMessage, setLoader, loader }}>
    {loading ? null : children}
  </AuthContext.Provider>
}