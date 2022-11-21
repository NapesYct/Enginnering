import React from 'react'
import Header from '../components/HomeComponents/Header';
import { sanityClient } from '../sanity';
import { News } from "../typings"

interface MyNews {
  news: [News]
}

interface Props {
  title: string,
  author: string,
  date: string,
}

const NewsPageCard = ({ title, author, date }: Props) => {
  return (
    <div className='relative'>
      <img className=' rounded' src="/images/departments/electricalE.jpg" alt="" />
      <div className='absolute bottom-5 pl-4 text-white'>
        <h1 className='font-bold text-xl font-sans mb-1'>
          {title}</h1>
        <span>by {author} </span>
        <span> {date} </span>
      </div>
    </div>
  )
}
const news = ({ news }: MyNews) => {
  console.log(news);

  return (
    <>
      <Header modalControl={undefined} />
      <div className='md:mx-20'>
        <div className='grid grid-cols-2 gap-5 mb-10 mt-5'>
          <NewsPageCard title="Peter Thiels VC Found Invests Million into Bitcoin, Market Reacts" author="Olawole" date="jan 25, 2018" />
          <NewsPageCard title="Peter Thiels VC Found Invests Million into Bitcoin, Market Reacts" author="Olawole" date="jan 25, 2018" />

        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5'>
          <NewsPageCard title="Peter Thiels VC Found Invests Million into Bitcoin, Market Reacts" author="Olawole" date="jan 25, 2018" />
          <NewsPageCard title="Peter Thiels VC Found Invests Million into Bitcoin, Market Reacts" author="Olawole" date="jan 25, 2018" />
          <NewsPageCard title="Peter Thiels VC Found Invests Million into Bitcoin, Market Reacts" author="Olawole" date="jan 25, 2018" />
          <NewsPageCard title="Peter Thiels VC Found Invests Million into Bitcoin, Market Reacts" author="Olawole" date="jan 25, 2018" />
          <NewsPageCard title="Peter Thiels VC Found Invests Million into Bitcoin, Market Reacts" author="Olawole" date="jan 25, 2018" />
        </div>
      </div>
    </>

  )
}

export default news

export async function getServerSideProps() {
  const query = `*[_type == "post"]`
  const news = await sanityClient.fetch(query)
  return {
    props: { news }
  }
}