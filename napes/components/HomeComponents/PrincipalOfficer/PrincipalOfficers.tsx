import Link from 'next/link';
import React from 'react'
import { sanityClient, urlFor } from '../../../sanity';
import { Data } from '../../../typings';
import PrincipalOfficersCard from './PrincipalOfficersCard';


interface Props {
  officersData: [Data]
}


const PrincipalOfficers = ({ officersData }: Props) => {
  return (
    <section className='bg-slate-100 pt-5'>
      <div className='flex justify-between items-center md:px-16'>
        <div className='text-center md:text-start'>
          <h2 className='font-bold text-lg md:text-3xl capitalize font-sans text-sky-900'>Meet All Your Principal Officers</h2>
          <p className='font-sans text-sm md:text-lg text-sky-900'>Get to know all your Principal Officers in NAPES</p>
        </div>
        <Link href={'/principalOfficers'} >
          <p className='hidden cursor-pointer hover:border-b-2 hover:border-black sm:block text-sky-900'>See all &gt;&gt;</p>
        </Link>
      </div>
      <div className='grid  gap-y-5 sm:grid-cols-1 md:grid-cols-2 sm:px-5 py-10 md:px-20 sm:gap-5 text-slate-200 font-sans'>
        {
          officersData.map((data, index) => {
            if (index <= 3) {
              const { name, office, description, mainImage } = data;
              return <div key={data._id}>
                <PrincipalOfficersCard avatar={urlFor(mainImage).url()} title={office} name={name} desc={description} bgColor={'bg-slate-800'} />
              </div>
            }
          })
        }
      </div>

    </section>
  )
}

export default PrincipalOfficers

