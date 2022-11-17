import React from 'react';


interface Address {
  address: string,
  iconName: any,
}
const FooterContact: React.FC<Address> = ({ address, iconName }) => {
  return (
    <div className='flex space-x-2 items-center sm:justify-start'>
      <span>{iconName}</span>
      <span>{address}</span>
    </div>
  )
}

export default FooterContact