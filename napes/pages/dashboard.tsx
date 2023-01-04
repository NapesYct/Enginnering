import React, { useEffect, useState } from 'react'
import Header from '../components/HomeComponents/Header';
import { useAuth } from '../context/AuthContext';
// import myPdf from '../assets/myCV.pdf';
// import * as Realm from 'realm-web';





const DashboardCard = ({ statusPrompt, description }: any) => {

  return (
    <>
      <div className='bg-slate-800 rounded shadow-sm py-10 px-5 flex items-center flex-col justify-center'>
        <img src="/images/napes.png" className='w-10 rounded-full' alt="" />
        <h2 className='font-bold text-xl text-white text-center'>{statusPrompt}</h2>
        <p className='font-bold text-red-700 text-center'>{description}</p>
      </div>
    </>
  )
}

const dashboard = () => {

  const { user, currentUser, setCurrentUser } = useAuth();

  // const fetchAllUsers = async () => {
  //   const res = await fetch(process.env.NEXT_PUBLIC_API_ROUTE + '/');
  //   const data = await res.json();

  //   const APP_ID = data.apiKey;
  //   const app = new Realm.App({ id: APP_ID });
  //   const credentials = Realm.Credentials.anonymous();

  //   try {
  //     const userLogin = await app.logIn(credentials);
  //     const user = await userLogin.functions.getAllUsers()

  //     setCurrentUser(user.slice(-1)[0]);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  async function findOne() {
    const res = await fetch(`api/findUser?id=${user.uid}`);
    const data = await res.json();
    setCurrentUser(data)

  }

  useEffect(() => {
    findOne()

  }, [])

  const { oneUser } = useAuth();

  console.log(currentUser);

  return (
    <>
      <Header modalControl={undefined} />
      <div className='md:mx-20'>

        <div className='flex items-center justify-around bg-slate-600 px-8 py-5 md:px-20 rounded shadow-sm'>
          <div>
            <h1 className='text-xl lg:text-4xl sm:text-3xl font-bold' >Welcome back, {currentUser?.fullName}</h1>

            <p className='text-slate-100 md:w-1/2'>Check out a class page to see your progress and find helpful resources</p>
          </div>
          <img className='hidden sm:block w-1/4' src="/images/napes.png" alt="" />

        </div>

        {
          !currentUser?.paymentStatus ?
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 my-20 px-2'>
              <DashboardCard statusPrompt={"PAYMENT STATUS"} description={!currentUser?.paymentStatus ? "NOT PAID" : "PAID"} />
              <DashboardCard statusPrompt={"AMOUNT"} description={currentUser?.amount} />
              <DashboardCard statusPrompt={"MATRIC NO"} description={currentUser?.matric_no} />
              <DashboardCard statusPrompt={"DEPARTMENT"} description={currentUser?.department} />
            </div>
            :
            <div className='bg-red-500 text-white p-10 w-1/2 mx-auto rounded shadow my-10 text-center'>
              <h1>YOU ARE NOT YET A NAPESITE</h1>
            </div>
        }

        <div>
          {/* <iframe src={myPdf} width="100%" height="500px">Nice</iframe> */}
        </div>
      </div>
    </>
  )
}

export default dashboard