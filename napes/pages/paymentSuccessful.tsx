import React, { useEffect } from 'react'
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import Header from '../components/HomeComponents/Header';
import Spinner from '../components/Spinner';

const registerSuccess = () => {

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/dashboard")
    }, 8000)
  }, [])
  return (
    <>
      <Header modalControl={undefined} />
      <div className='bg-green-600 rounded shadow py-5 md:px-10 flex flex-col items-center justify-center font-sans text-white md:w-1/2 mx-auto text-center my-10'>
        <h1 className='text-xl text-center md:text-3xl py-2 '>Payment Successful</h1>
        <p className='md:text-lg'>Your registration was successful!!!</p>
        <p className='md:text-lg font-bold text-lg'>Please wait a sec, while we redirect you to your dashboard</p>
        <div className='flex space-x-5 py-3'>
          <Spinner />
        </div>
      </div>
    </>
  )
}

export default registerSuccess