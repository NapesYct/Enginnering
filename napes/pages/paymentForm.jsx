import React, { useEffect, useState } from 'react'
import Header from '../components/HomeComponents/Header';
import { addUser } from "../config/mongodb"
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';
import * as Realm from 'realm-web';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// type Data = {
//   name: string,
//   flutterwave_key: string,
//   age: number,
//   apiKey: string,
// }

const paymentForm = ({ name, age, apiKey }) => {
  const { user } = useAuth();
  const [keys, setKeys] = useState("");
  const [data, setData] = useState({
    name: '',
    amount: '1500',
    department: '',
    email: '',
    matric_no: '',
    phone_no: '',
    success: false

  });
  const router = useRouter();

  const [price, setPrice] = React.useState('Select Price');

  const handleChange = (event) => {
    setPrice(event.target.value);
  };


  const addNapesite = async (id, fullName, email, phone_no, matric_no, department, amount) => {
    const APP_ID = keys.apiKey;
    const app = new Realm.App({ id: APP_ID });
    const credentials = Realm.Credentials.anonymous();

    try {
      const user = await app.logIn(credentials);
      const addUserNow = await user.functions.addNapesite(id, fullName, email, phone_no, matric_no, department, amount)
    } catch (error) {
      console.log(error);
    }
  }
  // this code fetches data from the api file in the pages/ of this project. i stored the flutterwave_key in the api file for security reasons
  const getKeys = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_ROUTE + '/');
    const apiData = await res.json();

    setKeys(apiData);

    console.log(apiData.flutterwave_key);
  }

  useEffect(() => {
    getKeys()
  }, [])


  // this is the code to configure the flutterwave payment information
  const config = {
    public_key: `${keys.flutterwave_key}`,
    tx_ref: "NAPES" + Date.now(),
    amount: price,
    currency: 'NGN',
    payment_options: 'card',
    customer: {
      email: data.email,
      phone_number: data.phone_no,
      name: data.name,
    },
    meta: { counsumer_id: 'user.uid' },
    customizations: {
      title: 'NAPES',
      description: 'Please Pay Your Dues',
      logo: 'http://localhost:3000/_next/image?url=%2Fimages%2Fnapes.png&w=96&q=75',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const handlePayment = (e) => {
    e.preventDefault()
    if (!data.department || !data.amount || !data.matric_no || !data.name) {
      alert("Please enter all values")
    } else {
      setData({ ...data, success: true })
      handleFlutterPayment({
        callback: (response) => {
          console.log(response);
          if (response.status === "successful") {
            alert("PAYMENT SUCCESSFUL")
            addUser(response.tx_ref, response.customer.name, response.customer.email, response.customer.phone_number, data.matric_no, data.department, data.amount);
            setData({ ...data, name: "", email: "", phone_number: "", amount: "", department: "", matric_no: "", phone_no: "" });
            closePaymentModal()
            router.push("/paymentSuccessful");

          } else {
            router.push("/unsuccessfulPayment")
          }
          // this will close the modal programmatically
        },
        onClose: () => {
          if (!data.success) {
            router.push("/unsuccessfulPayment")
          }
        },
      });
    }
  }


  return (
    <div>
      <Header modalControl={undefined} />
      <div className='flex items-center justify-center bg-cyan-400 py-20'>
        <div className=''>
          <img className='hidden md:block w-1/2 h-1/2' src="/images/mechatronics.png" alt="" />
        </div>
        <form className='bg-white w-96 px-10 py-5 shadow-md rounded flex flex-col  justify-center space-y-1'>
          <img className='w-1/3 mx-auto pb-2' src="/images/napes.png" alt="Napes Brand" />
          <div>
            <label className='text-xl' htmlFor="departmenet">Full Name: </label>
            <input className='input transition ease-linear duration-300 delay-150 focus:border-l-2 focus:bg-blue-100 focus:border-red-600' value={data.name} onChange={(e) => setData({
              ...data, name: e.target.value
            })} type="text" required />

          </div>
          <div>
            <label className='text-xl' htmlFor="departmenet">Email: </label>
            <input className='input transition ease-linear duration-300 delay-150 focus:border-l-2 focus:bg-blue-100 focus:border-red-600' value={data.email} onChange={(e) => setData({
              ...data, email: e.target.value
            })} type="text" required />

          </div>
          <div>
            <label className='text-xl' htmlFor="departmenet">Phone No: </label>
            <input className='input transition ease-linear duration-300 delay-150 focus:border-l-2 focus:bg-blue-100 focus:border-red-600' value={data.phone_no} onChange={(e) => setData({
              ...data, phone_no: e.target.value
            })} type="text" required />

          </div>
          <label className='text-xl' htmlFor="password">Matric No: </label>
          <input className='input transition ease-linear duration-300 delay-150 focus:border-l-2 focus:bg-blue-100 focus:border-red-600' value={data.matric_no} onChange={(e) => setData({
            ...data, matric_no: e.target.value
          })} type="text" />
          <div>
            <label className='text-xl' htmlFor="department">Department: </label>
            <input className='input transition ease-linear duration-300 delay-150 focus:border-l-2 focus:bg-blue-100 focus:border-red-600' value={data.department} onChange={(e) => setData({
              ...data, department: e.target.value
            })} type="type" required />

            <InputLabel id="demo-simple-select-label">Select Amount</InputLabel>
            <Select
              className='w-full'
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={1500}
              label={1500}
              onChange={handleChange}
            >
              <MenuItem value={1000}>1000</MenuItem>
              <MenuItem value={1500}>1500</MenuItem>
            </Select>

            <button type='submit' onClick={handlePayment} className='bg-red-500 py-2 text-center my-5 flex w-full items-center justify-center rounded shadow hover:bg-red-900 text-white'>Pay Now</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default paymentForm