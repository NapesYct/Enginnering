import * as Realm from 'realm-web'

export const addUser = async (id: number, fullName: string, email: string, phone_no: string, matric_no: string, department: string, amount: number) => {
  // const res = await fetch(process.env.NEXT_PUBLIC_API_ROUTE + '/');
  // const data = await res.json();


  const APP_ID = "napes-website-wawfl"
  const app = new Realm.App({ id: `${APP_ID}` });
  const credentials = Realm.Credentials.anonymous();

  try {
    const user = await app.logIn(credentials);
    const addUserNow = await user.functions.addUser(id, fullName, email, phone_no, matric_no, department, amount)
  } catch (error) {
    console.log(error);
  }

}