import React from 'react';
import Link from 'next/link';

interface NewsEvent {
  image: string,
  title: string,
  dateCreated: string
}
const NewsEventCard: React.FC<NewsEvent> = ({ image, title, dateCreated }) => {
  return (
    <Link href="/news">
      <article className='flex transition ease-in-out duration-200 cursor-pointer rounded overflow-hidden flex-col bg-white shadow-lg hover:scale-105'>
        <img src={image} className='' alt="" />
        <p className='mt-5 mb-2 mx-2 font-bold text-lg'>{title}</p>
        <p className='mx-2 mb-5 text-sm'>{dateCreated}</p>
      </article>
    </Link>
  )
}

export default NewsEventCard