import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/router';
import { addUser } from "../../config/mongodb"


const HeroSection = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    phoneNumber: "",
    success: false,
  });
  const router = useRouter()




  // const config = {
  //   public_key: `${data.flutterwave_key}`,
  //   tx_ref: "NAPES" + Date.now(),
  //   amount: 100,
  //   currency: 'NGN',
  //   payment_options: 'card',
  //   customer: {
  //     email: "johndoe@gmail.com",
  //     phone_number: '09058784051',
  //     name: 'john doe',
  //   },
  //   meta: { counsumer_id: 'user.uid' },
  //   customizations: {
  //     title: 'NAPES',
  //     description: 'Please Pay Your Dues',
  //     logo: 'http://localhost:3000/_next/image?url=%2Fimages%2Fnapes.png&w=96&q=75',
  //   },
  // };

  // const handleFlutterPayment = useFlutterwave(config);

  // const handlePayment = () => {
  //   handleFlutterPayment({
  //     callback: (response) => {
  //       console.log(response);
  //       if (response.status === "successful") {
  //         addUser(response.amount, response.customer.name, response.customer.email, response.customer.phone_number, "default",)
  //         setUserData({ ...userData, success: true })
  //         closePaymentModal()
  //         router.push("/dashboard");
  //       } else {
  //         router.push("/unsuccessfulPayment")
  //       }
  //       // this will close the modal programmatically
  //     },
  //     onClose: () => {
  //       if (!userData.success) {
  //         router.push("/unsuccessfulPayment")
  //       }
  //     },
  //   });
  // }

  return (
    <section className='bg-hero bg-no-repeat bg-cover flex justify-center text-white space-x-20 py-10 items-center w-full'>
      <div className=' flex flex-col justify-around sm:justify-around h-60  w-full px-10 md:w-full lg:w-1/2'>
        <h2 className='md:text-4xl sm:text-2xl text-2xl font-extrabold'>Enjoy Your Right Of Being A NAPESITE</h2>
        <p className='text-lg sm:text-xl my-5 lg:my-0'>Pay your dues to enjoy unlimited benefits from NAPES and avoid denial of semester registration</p>
        <div className='space-x-5 flex items-center '>
          <Link href="/paymentForm">
            <a className='bg-red-600  text-white px-4 py-2 rounded hover:bg-green-800 shadow text-lg font-bold shadow-gray-800'>Pay Your Dues</a>
          </Link>
          <div>
            <p>{userData.name}</p>
            <p>{userData.email}</p>
            <p>{userData.phoneNumber}</p>
          </div>
        </div>
      </div>
      <div className='hidden md:-mb-1.5 sm:block'>
        <Image objectFit='contain' width={500} height={400} src={"/images/girly"}></Image>
      </div>
    </section>
  )
}

export default HeroSection
