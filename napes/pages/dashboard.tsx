import React from 'react'
import Header from '../components/HomeComponents/Header';
import { useAuth } from '../context/AuthContext';



const DashboardCard = ({ statusPrompt, description }: any) => {

  return (
    <>
      <div className='bg-orange-500 py-10 px-5 flex items-center flex-col justify-center'>
        <img src="/images/napes.png" className='w-10 rounded-full' alt="" />
        <h2 className='font-bold text-xl text-white'>{statusPrompt}</h2>
        <p className='font-bold text-slate-200'>{description}</p>
      </div>
    </>
  )
}

const dashboard = () => {
  const { oneUser } = useAuth();
  return (
    <>
      <Header modalControl={undefined} />
      <div className='md:mx-20 mt-5'>

        <div className='flex items-center justify-around bg-cyan-400 px-8 py-5 md:px-20 rounded shadow-sm'>
          <div>
            <h1 className='text-xl lg:text-4xl sm:text-3xl font-bold'>Welcome back,</h1>
            <h2 className='text-indigo-700 mb-2 font-bold md:text-2xl sm:text-xl'>{oneUser?.firstName} {oneUser?.lastName}</h2>
            <p className='text-slate-600 md:w-1/2'>Check out a class page to see your progress and find helpful resources</p>
          </div>
          <img className='hidden sm:block w-1/4' src="/images/napes.png" alt="" />

        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 my-20 px-2'>
          <DashboardCard statusPrompt={"NAPES DUES"} description={"Paid"} />
          <DashboardCard statusPrompt={"NAPES DUES"} description={"Paid"} />
          <DashboardCard statusPrompt={"NAPES DUES"} description={"Paid"} />
          <DashboardCard statusPrompt={"NAPES DUES"} description={"Paid"} />
        </div>
      </div>
    </>
  )
}

export default dashboard