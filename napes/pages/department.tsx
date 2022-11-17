import React from 'react'
import Image from 'next/image'

const department: React.FC = () => {
  return (
    <div>
      <Image src={"/images/"} width={60} alt="nice image" height={40} />
    </div>
  )
}

export default department