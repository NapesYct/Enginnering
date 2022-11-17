import Image from 'next/image'
import React from 'react'
import ExecutivesCard from '../components/HomeComponents/Executives/ExecutivesCard'
import Header from '../components/HomeComponents/Header';
import { sanityClient, urlFor } from '../sanity';


// interface Props {
//   executiveData: [Data]
// }

const executives = ({ executiveData }) => {
  return (
    <>
      <Header />
      <div className='bg-slate-600'>
        <div className='bg-gradient-to-r from-cyan-500 to-blue-500 py-40 flex flex-col items-center justify-center'>
          <h1 className='text-5xl font-sans text-slate-50'>Meet All Your Executives</h1>
        </div>
        <div className='grid grid-cols-1 md:px-16 sm:grid-cols-2 md:grid-cols-4 gap-5 py-10'>
          {/* <ExecutivesCard image={'/images/headImg.jpg'} title={'President'} name={'John Doe'} desc={'I am the president of the department all over the world'} />
          <ExecutivesCard image={'/images/headImg.jpg'} title={'President'} name={'John Doe'} desc={'I am the president of the department all over the world'} />
          <ExecutivesCard image={'/images/headImg.jpg'} title={'President'} name={'John Doe'} desc={'I am the president of the department all over the world'} />
          <ExecutivesCard image={'/images/headImg.jpg'} title={'President'} name={'John Doe'} desc={'I am the president of the department all over the world'} />
          <ExecutivesCard image={'/images/headImg.jpg'} title={'President'} name={'John Doe'} desc={'I am the president of the department all over the world'} />
          <ExecutivesCard image={'/images/headImg.jpg'} title={'President'} name={'John Doe'} desc={'I am the president of the department all over the world'} />
          <ExecutivesCard image={'/images/headImg.jpg'} title={'President'} name={'John Doe'} desc={'I am the president of the department all over the world'} />
          <ExecutivesCard image={'/images/headImg.jpg'} title={'President'} name={'John Doe'} desc={'I am the president of the department all over the world'} />
          <ExecutivesCard image={'/images/headImg.jpg'} title={'President'} name={'John Doe'} desc={'I am the president of the department all over the world'} /> */}
          {

            executiveData.map((data, index) => {
              const { name, office, description, mainImage } = data;
              return <div key={data._id}>
                <ExecutivesCard image={urlFor(mainImage).url()} office={office} name={name} desc={description} />
              </div>
            })
          }
        </div>
      </div>
    </>
  )
}

export default executives

export async function getServerSideProps() {
  const query = `*[_type == "executives"]`
  const executiveData = await sanityClient.fetch(query)
  return {
    props: { executiveData }
  }
}