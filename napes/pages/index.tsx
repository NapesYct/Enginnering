import React, { useState } from 'react'
import Departments from '../components/HomeComponents/Departments/Departments'
import ExecutiveMembers from '../components/HomeComponents/Executives/ExecutiveMembers'
import HeroSection from '../components/HomeComponents/HeroSection'
import NewsEvent from '../components/HomeComponents/NewsEvent/NewsEvent'
import PrincipalOfficers from '../components/HomeComponents/PrincipalOfficer/PrincipalOfficers'
import RegisterModal from '../components/RegisterModal'
import Header from '../components/HomeComponents/Header'
import LoginModal from '../components/LoginModal'
import { useAuth } from '../context/AuthContext';
import { sanityClient } from '../sanity';
import * as Realm from 'realm-web';
import { Data } from '../typings';


interface Executives {
  posts: [Data]
}
interface Principal {
  principalOfficers: [Data]
}

interface MyData {
  data: Data
}

type Props = Executives & Principal & MyData
const Home = ({ data, posts, principalOfficers }: Props) => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(true);


  const { user } = useAuth();


  return (
    <>
      {
        user ?

          <div>
            {/* {showRegisterModal && <RegisterModal registerModal={setShowRegisterModal} loginModal={setShowLoginModal} />}

            {showLoginModal && <LoginModal modal={showLoginModal} registerModal={setShowRegisterModal} loginModal={setShowLoginModal} />} */}
            <Header modalControl={setShowRegisterModal} />
            <HeroSection />

            <Departments />

            <ExecutiveMembers executiveData={posts} />
            <PrincipalOfficers officersData={principalOfficers} />
            <NewsEvent />
          </div>
          :
          <div>
            {showRegisterModal && <RegisterModal registerModal={setShowRegisterModal} loginModal={setShowLoginModal} modal={undefined} />}

            {showLoginModal && <LoginModal modal={showLoginModal} registerModal={setShowRegisterModal} loginModal={setShowLoginModal} />}
          </div>
      }
    </>
  )
}

export default Home

export async function getServerSideProps() {
  // const { URL } = process.env;

  const res = await fetch(process.env.NEXT_PUBLIC_API_ROUTE + '/');
  const data = await res.json();
  const query = `*[_type == "executives"]`
  const query1 = `*[_type == "principalOfficers"]`
  const principalOfficers = await sanityClient.fetch(query1)
  const posts = await sanityClient.fetch(query)
  return {
    props: { data, posts, principalOfficers }
  }
}