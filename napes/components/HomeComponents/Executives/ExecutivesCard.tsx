import React from 'react'

interface Executives {
  image: string,
  office: string,
  name: string,
  desc: string,
}
const ExecutivesCard: React.FC<Executives> = ({ image, office, name, desc }) => {
  return (
    <div className='flex flex-col justify-center rounded shadow-sm shadow-gray-500 bg-white items-center relative pl-3 pr-2  pb-10 to-blue-500 h-96'>
      <img className=' w-40 h-40 md:h-40 md:w-40 mt-6  lg:h-42 lg:w-42 rounded-full top-0' src={image} alt={office} />
      <p className='text-gray-800 text-md mb-3'>{office}</p>
      <h2 className='text-gray-800 mb-3 text-xl'> {name} </h2>
      <p className='text-gray-700 text-center mb-5 pl-5'>{desc}</p>
    </div>
  )
}

export default ExecutivesCard