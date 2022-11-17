import { useState, useEffect, ReactNode } from 'react';
import Link from 'next/link'
import { useAuth } from '../context/AuthContext';
import Spinner from './Spinner';
import { useRouter } from 'next/router';
import { addUser } from '../config/mongodb';

// import { FidgetSpinner } from 'react-loader-spinner';


const RegisterModal = ({ modal, registerModal, loginModal }) => {
  const { user, register, setName, name, data, setData, RegErrorMessage, setLoader, loader } = useAuth();
  const router = useRouter()

  // const [data, setData] = useState({
  //   email: '',
  //   department: '',
  //   matric: '',
  //   password: '',
  // })


  useEffect(() => {
    if (user) {
      console.log(user.uid);
      console.log(name);
    }
  }, [user])

  const toggleAuthentication = () => {
    registerModal(false)
    loginModal(true)
  }

  const registerUser = async (e) => {
    e.preventDefault();
    setLoader(true);

    try {

      await register(data.email, data.password)
      if (user) {
        router.push("/registerSuccess");
      }

    } catch (error) {
      console.log(error);
      setLoader(false)

    }

  }
  return (
    <div className='bg-overlay fixed right-0 left-0 top-0 bottom-0 z-10'>
      <div className='-translate-y-1/2 -translate-x-1/2 left-1/2 fixed top-1/2 flex flex-col items-center justify-center'>

        <form className='bg-white w-96 px-10 py-5 shadow-md rounded flex flex-col  justify-center'>
          <img className='w-1/3 mx-auto pb-2' src="/images/napes.png" alt="Napes Brand" />
          <h2 className={!RegErrorMessage && `text-2xl bg-red-600 px-5 w-full py-2 rounded shadow text-white font-bold text-center`}>{!RegErrorMessage && 'Register'}</h2>
          <h2 className={RegErrorMessage && `text-2xl bg-red-500 px-5 py-2 rounded shadow text-white font-bold text-center`}>{RegErrorMessage}</h2>
          <div className='flex flex-col'>
            <label className='text-xl' htmlFor="name">First Name: </label>
            <input className='input transition ease-linear duration-300 delay-150 focus:border-l-2 focus:border-red-600' value={data.firstName} onChange={(e) => setData({
              ...data, firstName: e.target.value
            })} type="text" required />
          </div>

          <div>
            <label className='text-xl' htmlFor="departmenet">Last Name: </label>
            <input className='input transition ease-linear duration-300 delay-150 focus:border-l-2 focus:border-red-600' value={data.lastName} onChange={(e) => setData({
              ...data, lastName: e.target.value
            })} type="text" required />
          </div>

          <div>
            <label className='text-xl' htmlFor="departmenet">Email: </label>
            <input className='input transition ease-linear duration-300 delay-150 focus:border-l-2 focus:border-red-600' value={data.email} onChange={(e) => setData({
              ...data, email: e.target.value
            })} type="text" required />
          </div>

          <div>
            <label className='text-xl' htmlFor="name">Department: </label>
            <input className='input transition ease-linear duration-300 delay-150 focus:border-l-2 focus:border-red-600' value={data.departmenet} onChange={(e) => setData({
              ...data, department: e.target.value
            })} type="text" required />
          </div>



          <div>
            <label className='text-xl' htmlFor="departmenet">Matric: </label>
            <input className='input transition ease-linear duration-300 delay-150 focus:border-l-2 focus:border-red-600' value={data.matric} onChange={(e) => setData({
              ...data, matric: e.target.value
            })} type="text" required />
          </div>

          <div>
            <label className='text-xl' htmlFor="password">Password: </label>
            <input className='input transition ease-linear duration-300 delay-150 focus:border-l-2 focus:border-red-600' value={data.password} onChange={(e) => setData({
              ...data, password: e.target.value
            })} placeholder='Enter Password' type="password" required />
          </div>

          {loader ? <Spinner /> : <button type='submit' onClick={registerUser} className='button hover: shadow-sm border transition ease-in-out duration-200 hover:bg-red-600 hover:text-white'>Register</button>}
          <span>Already registered? <span onClick={toggleAuthentication}><span className='text-blue-500 cursor-pointer underline text-xl'>Login</span></span>

          </span>
        </form>
      </div>

    </div>
  )
}

export default RegisterModal