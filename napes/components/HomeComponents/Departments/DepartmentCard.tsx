import React from 'react'

interface Props {
  image: string,
  name: string
}

const getData = () => {
  alert("Feature Coming Soon...")
}

const DepartmentCard: React.FC<Props> = ({ image, name }) => {
  return (
    <div onClick={getData} className='flex cursor-pointer flex-col items-center justify-center transition-shadow duration-150 delay-75 ease-in-out'>
      <img className='w-full transition rounded duration-200 delay-75 ease-linear hover:scale-110' src={image} alt="" />
      <p className=' md:text-xl mt-3'>{name}</p>
    </div>
  )
}

export default DepartmentCard