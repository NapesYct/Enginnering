import React from 'react';
import FooterContact from './FooterContact';
import { MdLocationPin, MdCall, MdEmail, MdFacebook } from 'react-icons/md';
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className='bg-gray-800 pt-5 relative'>
      <div className='flex flex-col items-center '>
        <img className='bg-white rounded-full' width={100} height={100} src="/images/napes.png" alt="" />
      </div>
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-8 md:grid-cols-4 lg:grid-col-4 md:gap-9 text-slate-200  py-10 px-5 border-b-2'>
        <div className=''>
          <h2 className='text-2xl '>About NAPES</h2>
          <p className='sm:text-center md:text-start leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa magni, quidem ipsum dolorem quod tenetur distinctio neque rem quibusdam dicta laborum sed, </p>
        </div>
        <div className=''>
          <h2 className='text-2xl '>Contact</h2>
          <FooterContact address='105 Herbert Macaulay Way' iconName={<><MdLocationPin /></>} />
          <FooterContact address='Phone: 0901 234 22 12' iconName={<><MdCall /></>} />
          <FooterContact address='mailus@napes.com' iconName={<><MdEmail /></>} />
          <FooterContact address='www.facebook.com/napes' iconName={<><MdFacebook /></>} />
        </div>
        <nav>

          <ul className='flex flex-col items-start leading-8'>
            <h2 className='text-2xl '>Important Links</h2>
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/'}>Department</Link></li>
            <li><Link href={'/'}>Account</Link></li>
            <li><Link href={'/'}>Gallery</Link></li>
            <li><Link href={'/'}>Contact</Link></li>
          </ul>
        </nav>
        <div className='flex flex-col'>
          <h3 className='text-2xl '>Our Vision</h3>
          <p className='leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eos reiciendis magni obcaecati .</p>
        </div>
        {/* <div className='flex justify-center col-span-4'>
          <p>kdflsdfs</p>
          <p>sdfsdf</p>
          <p>sdfsdf</p>
        </div> */}
      </div>
      <div className='md:flex md:justify-between md:items-center md:px-5 text-white sm:block '>
        <p className='text-center text-sm mb-10 md:mb-0 p-1'>Copyright &copy; 2022 NAPES</p>
        <p className='bg-gradient-to-r from-slate-800 via-purple-700 to-slate-800  text-sm text-white fixed  bottom-0 w-full md:w-auto shadow text-sm animate-pulse md:animate-none md:relative text-center p-2 md:bg-none'>Developed By Mechatronics Engr Dept</p>
      </div>
    </footer>
  )
}

export default Footer