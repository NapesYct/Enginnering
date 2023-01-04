import React, { useEffect, useState } from 'react'
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
import { Button } from '@mui/material';

export async function updateUsers(id: string) {
  const updatedUser = await fetch('/api/updateUser', {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id
    })
  })

  const data = await updatedUser.json()
  console.log(data);

}

export async function addCurrentUser(id: string, fullName: string, email: string, phone_no: number, matric_no: string, department: string, amount: number, paymentStatus: boolean
) {
  const res = await fetch("/api/seed", {
    method: "POST",

    headers: {
      "Content-Type": 'application/json',
    },

    body: JSON.stringify({
      id,
      fullName,
      email,
      phone_no,
      matric_no,
      department,
      amount,
      paymentStatus,
    }),

  })

  const data = await res.json()
  console.log(data);

}

// const getItems = () => {
//   addCurrentUser("New", "BOy", 0, "This", "Now", 0, true);
// }


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

  // useEffect(() => {
  //   addCurrentUser("one", "two", 'three', 'four', 'five', 'six', true)
  // }, [])



  const { user } = useAuth();
  return (
    <>
      {
        user ?

          <div>
            {/* {showRegisterModal && <RegisterModal registerModal={setShowRegisterModal} loginModal={setShowLoginModal} />}

            {showLoginModal && <LoginModal modal={showLoginModal} registerModal={setShowRegisterModal} loginModal={setShowLoginModal} />} */}
            <Header modalControl={setShowRegisterModal} />
            {/* <Button variant='contained' color='primary' onClick={() => getItems()}>Add Items</Button> */}
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
  const query = `*[_type == "executives"]`
  const query1 = `*[_type == "principalOfficers"]`

  // const res = await fetch(process.env.NEXT_PUBLIC_API_ROUTE + '/');
  // const data = await res.json();
  const principalOfficers = await sanityClient.fetch(query1)
  const posts = await sanityClient.fetch(query)
  return {
    props: { posts, principalOfficers }
  }
}