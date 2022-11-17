import React from 'react';


interface Props {
  icon: any,
  title: string,
  desc1: string,
  desc2?: string
}

const ContactCard: React.FC<Props> = ({ icon, title, desc1, desc2 }) => {
  return (
    <div className='bg-green-100 border rounded border-green-500 py-5 px-8 flex flex-col items-center space-y-2'>
      <div className='bg-green-600 w-10 h-10 rounded-full flex items-center justify-center '>
        <span className=''>{icon}</span>
      </div>
      <p>{title}:</p>
      <p>{desc1}</p>
      <p>{desc2}</p>
    </div>
  )
}

export default ContactCard