import { InfinitySpin } from 'react-loader-spinner'
import React from 'react'

const Spinner = () => {
  return (
    <div className='text-center flex justify-center items-center'>
      <InfinitySpin
        width='150'

        color="red"
      />
    </div>
  )
}

export default Spinner
