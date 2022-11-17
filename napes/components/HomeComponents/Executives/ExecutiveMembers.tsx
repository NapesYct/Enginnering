import React from 'react'
import ExecutivesCard from './ExecutivesCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import { Data } from '../../../typings';
import { urlFor } from '../../../sanity';

interface Props {
  executiveData: [Data]
}

const ExecutiveMembers = ({ executiveData }: Props) => {


  return (
    <section className=' bg-green-800 gap-10 pt-5 pb-10'>
      <div className='flex justify-between items-center pb-5 md:px-16'>
        <div className='text-start'>
          <h2 className='font-bold text-lg md:text-3xl capitalize font-sans text-white'>Meet All Your Executives</h2>
          <p className='font-sans text-sm md:text-lg text-slate-100'>Get to know all your executives in NAPES</p>
        </div>
        <Link href={'/executives'} >
          <p className='hidden cursor-pointer hover:border-b-2 sm:block text-red-500'>See all &gt;&gt;</p>
        </Link>
      </div>
      <div className='grid grid-cols-1 md:px-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:px-5  gap-5'>
        {

          executiveData.map((data, index) => {

            if (index <= 3) {
              const { name, office, description, mainImage } = data;
              return <div key={data._id}>
                <ExecutivesCard image={urlFor(mainImage).url()} office={office} name={name} desc={description} />
              </div>
            }
          })
        }

      </div>

    </section>
  )
}

export default ExecutiveMembers