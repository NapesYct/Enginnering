import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from "../config/firebase";
import { useRouter } from "next/router";
import * as Realm from 'realm-web';
import { addCurrentUser, updateUsers } from "../pages";

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext)
type Props = {
  id: string
  amount: string
  department: string
  fullName: string
  email: string
  phoneNumber: number
  matric_no: string
  paymentStatus: string
}

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [name, setName] = useState("Calebu");
  const [oneUser, setOneUser] = useState([]);
  const [loader, setLoader] = useState(false)
  const [isExist, setIsExist] = useState(false);
  const [currentUser, setCurrentUser] = useState<Props>();

  const [loading, setLoading] = useState(true);
  const [RegErrorMessage, setErrorMessage] = useState("");
  const [LogErrorMessage, setLogErrorMessage] = useState("")
  const router = useRouter()
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    fullName: '',
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


  const register = async (email: string, password: string) => {
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      // addUser(cred.user.uid, data.firstName, data.lastName, `${cred.user.email}`, data.matric, data.department);

    } catch (error: any) {
      console.log(error.message);

      setLoader(false);
      switch (error.message) {

        case 'auth/email-already-in-use':
          setErrorMessage("Email already exist");

          break;
        case 'auth/missing-email':
          setErrorMessage("Please Enter An Email Address");
          break;
        case 'auth/user-not-found':
          setErrorMessage("You Have Not Registered");
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
      const res = await fetch(`api/findUser?id=${cred.user.uid}`);
      const user = await res.json();
      if (user?.id === cred.user.uid) {
        setCurrentUser(user)
      }
      return [];
    } catch (error: any) {
      setLoader(false);
      console.log(error);

      switch (error.message) {
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

  // if (user) {
  //   fetchAllProducts(user.uid)

  // }
  // else {
  //   console.log("No User Again!!");

  // }


  const logout = async () => {
    setUser(null);
    setLoader(false)
    await signOut(auth)
  }
  return <AuthContext.Provider value={{ user, oneUser, login, register, logout, setName, name, data, setData, RegErrorMessage, LogErrorMessage, setLoader, loader, currentUser, setCurrentUser }}>
    {loading ? null : children}
  </AuthContext.Provider>
}