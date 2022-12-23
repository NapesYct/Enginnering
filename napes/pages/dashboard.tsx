import React from 'react'
import Header from '../components/HomeComponents/Header';
import { useAuth } from '../context/AuthContext';
// import myPdf from '../assets/myCV.pdf';




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
  const { oneUser } = useAuth();
  return (
    <>
      <Header modalControl={undefined} />
      <div className='md:mx-20'>

        <div className='flex items-center justify-around bg-slate-600 px-8 py-5 md:px-20 rounded shadow-sm'>
          <div>
            <h1 className='text-xl lg:text-4xl sm:text-3xl font-bold'>Welcome back, {oneUser.fullNames}</h1>
            <h2 className='text-indigo-700 mb-2 font-bold md:text-2xl sm:text-xl'>{oneUser?.firstName} {oneUser?.lastName}</h2>
            <p className='text-slate-100 md:w-1/2'>Check out a class page to see your progress and find helpful resources</p>
          </div>
          <img className='hidden sm:block w-1/4' src="/images/napes.png" alt="" />

        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 my-20 px-2'>
          <DashboardCard statusPrompt={"PAYMENT STATUS"} description={oneUser?.paymentStatus} />
          <DashboardCard statusPrompt={"AMOUNT"} description={oneUser?.amount} />
          <DashboardCard statusPrompt={"MATRIC NO"} description={oneUser?.matric_no} />
          <DashboardCard statusPrompt={"DEPARTMENT"} description={oneUser?.department} />
        </div>

        <div>
          {/* <iframe src={myPdf} width="100%" height="500px">Nice</iframe> */}
        </div>
      </div>
    </>
  )
}

export default dashboard