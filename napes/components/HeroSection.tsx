import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Spinner from './Spinner'
// const v = window.innerHeight;

const HeroSection = () => {

  return (

    <section className='flex justify-center text-white space-x-20 py-20 items-center bg-green-400  w-full'>
      <Spinner />
      <div className='flex flex-col justify-around sm:justify-around h-60  w-full px-10 md:w-full lg:w-1/2'>
        <h2 className='md:text-4xl font-extrabold text-5xl'>Engineering at a whole new level</h2>
        <p className='text-lg sm:text-xl'>Pay your dues to enjoy unlimited benefits from NAPES and avoid denial of semester registration</p>
        <div className='space-x-5 flex items-center '>
          <Link href="">
            <a className='bg-white text-black p-2 rounded hover:bg-green-800 shadow shadow-gray-800'>Get Started</a>
          </Link>
          <Link href={"/"}>
            <a className='bg-green-800 p-2 rounded hover:bg-white hover:text-black shadow shadow-black'>Explore</a>
          </Link>
        </div>
      </div>
      <div className='hidden sm:block'>
        <Image objectFit='contain' width={500} height={300} src={"/images/head.png"}></Image>
      </div>
    </section>
  )
}

export default HeroSection