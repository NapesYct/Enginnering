import React from 'react'
import Layout from '../components/Layout';
import Link from 'next/link'
import { useRouter } from 'next/router';
import Header from '../components/HomeComponents/Header';

const registerSuccess = () => {

  const route = useRouter()
  return (
    <>
      <Header modalControl={undefined} />
      <div className='bg-green-600 rounded shadow py-5 md:px-10 flex flex-col items-center justify-center font-sans text-white md:w-1/2 mx-auto my-10'>
        <h1 className='text-xl text-center md:text-3xl py-2 '>Registeration Successful</h1>
        <p className='md:text-lg'>Your registration was successful!!!</p>
        <p className='md:text-lg'>Would you like to pay your dues now</p>
        <div className='flex space-x-5 py-3'>
          <button className='bg-green-500 rounded py-1 px-5 hover:bg-green-700' onClick={() => route.push("/paymentForm")}>Yes</button>
          <button className='bg-red-500 rounded py-1 px-5 hover:bg-red-700' onClick={() => route.push("/")}>No</button>
        </div>
      </div>
    </>
  )
}

export default registerSuccess