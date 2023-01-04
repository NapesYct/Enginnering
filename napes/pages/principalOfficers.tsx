import React from 'react'
import Header from '../components/HomeComponents/Header'
import PrincipalOfficersCard from '../components/HomeComponents/PrincipalOfficer/PrincipalOfficersCard';
import { sanityClient, urlFor } from '../sanity';
import { Data } from '../typings';

interface Props {
  principalOfficers: [Data]
}

const principalOfficers = ({ principalOfficers }: Props) => {
  console.log(principalOfficers)
  return (
    <>
      <Header modalControl={undefined} />
      <div>
        <div className='bg-gradient-to-r from-red-200 to-red-500 py-40 flex flex-col items-center justify-center'>
          <h1 className='text-center text-3xl md:text-5xl font-sans text-slate-50'>Meet All Your Principal Officers</h1>
        </div>
        <div className='grid grid-cols-1 md:px-16 px-5 sm:grid-cols-2 py-10 md:grid-cols-4 gap-5 font-sans'>
          {

            principalOfficers.map((data, index) => {
              const { name, office, description, mainImage } = data;
              return <div key={data._id}>
                <PrincipalOfficersCard avatar={urlFor(mainImage).url()} title={office} name={name} desc={description} bgColor={'bg-slate-600'} />
              </div>
            })
          }
        </div>
      </div>
    </>
  )
}

export default principalOfficers
export async function getServerSideProps() {
  const query1 = `*[_type == "principalOfficers"]`
  const principalOfficers = await sanityClient.fetch(query1)
  return {
    props: { principalOfficers }
  }
}