import React, { useState } from 'react'

interface PrincipalOfficers {
  avatar: string;
  name: string,
  title: string,
  desc: string,
  bgColor: string,
}
const PrincipalOfficersCard: React.FC<PrincipalOfficers> = ({ name, title, desc, avatar, bgColor }) => {

  return (
    <div className={`grid shadow-lg grid-cols-3 py-2 px-5 rounded md:py-10 ${bgColor} justify-between items-center`}>
      <img className='w-32 h-32 sm:w28 sm:h-28  md:h-30 md:w-32  lg:h-42 lg:w-42 rounded-full' src={avatar} alt="" />
      <div className='ml-5 md:ml-5 col-span-2'>
        <h2 className='font-bold text-lg'>{name}</h2>
        <p className='text-sm font-medium mb-4'>{title}</p>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default PrincipalOfficersCard