import React from 'react'
import DepartmentCard from './DepartmentCard';
import Link from 'next/link'


const Departments = () => {
  return (
    <section className='py-10 px-5 md:py-10 md:px-20'>
      <div className='flex justify-between items-center pb-5'>
        <div className='text-center md:text-start'>
          <h2 className='font-bold text-lg md:text-3xl capitalize font-sans text-sky-900'>Explore Engineering Departments</h2>
          <p className='font-sans text-sm md:text-lg text-gray-600'>Discover the list of all engineering departments</p>
        </div>
        <Link href={'/department'} >
          <p className='hidden cursor-pointer hover:border-b-2 sm:block'>See all &gt;&gt;</p>
        </Link>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5  '>
        <DepartmentCard image={"/images/departments/mehatronicsE.jpg"} name='Mechatronics Engineering' />
        <DepartmentCard image={"/images/departments/mechanicalE.jpg"} name='Mechanical Engineering' />
        <DepartmentCard image={"/images/departments/electricalE.jpg"} name='Electrical Engineering' />
        <DepartmentCard image={"/images/departments/computerE.jpg"} name='Computer Engineering' />
      </div>
      <Link href={'/department'} >
        <p className='text-center mt-5 font-bold font-sans text-md sm:hidden cursor-pointer hover:border-b-2'>See all &gt;&gt;</p>
      </Link>
    </section>
  )
}

export default Departments