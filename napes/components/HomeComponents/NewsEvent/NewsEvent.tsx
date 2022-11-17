import Link from 'next/link'
import React from 'react'
import NewsEventCard from './NewsEventCard'

const NewsEvent = () => {
  return (
    <section className='bg-slate-100 p-5'>
      <div className='flex items-center justify-between py-5'>
        <h2 className='md:text-3xl text-xl font-bold'>News & Events</h2>
        <Link href={"/news"}>
          <p className='text-md cursor-pointer font-semibold text-gray-400'>All news & events &gt;&gt;</p>
        </Link>
      </div>
      <div className='grid grid-cols-2 gap-5 md:grid-cols-4 '>
        <NewsEventCard title='GBIF Webinar on Digitization and Mobilization of Plant Specimen holds on Wednesday, October 12' image='/images/head.png' dateCreated='October 11, 2022' />
        <NewsEventCard title='GBIF Webinar on Digitization and Mobilization of Plant Specimen holds on Wednesday, October 12' image='/images/beautiful.jpg' dateCreated='October 11, 2022' />
        <NewsEventCard title='UNILAG Student develop software to unmask traffickers' image='/images/headImg.jpg' dateCreated='October 11, 2022' />
        <NewsEventCard title='MECHATRONICS Student developed a website for the entire engineering using a Nokia touchlight' image='/images/beautiful.jpg' dateCreated='October 11, 2022' />
      </div>
    </section>
  )
}

export default NewsEvent