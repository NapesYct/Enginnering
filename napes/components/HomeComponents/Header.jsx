import Image from 'next/image'
import React, { useState } from 'react';
import Link from 'next/link'
import { useAuth } from '../../context/AuthContext';
import { auth } from '../../config/firebase';
import { MdContacts, MdLocalFireDepartment, MdMenu, MdPeopleAlt } from "react-icons/md";
import { IoIosPeople } from "react-icons/io"
import { ImCross, ImUser } from "react-icons/im"
import { IoNewspaperSharp, IoHome } from "react-icons/io5"

const Header = ({ modalControl }) => {
  const navRef = React.useRef();
  const { user, logout, data, currentUser } = useAuth();
  // console.log(currentUser);


  const [menuClicked, setMenuClicked] = useState(false);

  const clickMenu = () => {
    setMenuClicked((prev) => !prev);
  };

  const show = () => {
    modalControl(true)
  }

  const logoutUser = () => {
    logout(auth)
  }

  return (
    <header className=''>
      <div className='hidden sm:flex bg-white z-10 relative justify-around items-center'>
        <div className='hidden md:block'>
          <Image className='' objectFit='contain' src={"/images/napes.png"} width="90" height="90"></Image>
        </div>
        <div className='hidden md:flex flex-col justify-center items-center'>
          <div className='flex flex-col items-end justify-center'>
            <h1 className={`hidden md:text-xl md:block  lg:block lg:text-3xl`}>National Association Of Polytechnic Engineering Student (NAPES)</h1>
            <span className='hidden md:block text-red-500 font-bold '>YCT CHAPTER</span>
          </div>
          <nav className='flex items-start'>
            <ul className='hidden font-sans md:flex sm:flex items-end lg:items-end space-x-12 text-xl'>
              <li className='text-sm text-gray-600 hover:text-green-800 hover:border-l-2 hover:pl-2 transition-all hover:border-red-600'><Link href="/">Home</Link></li>
              <li className='text-sm text-gray-600 hover:text-green-800 hover:border-l-2 hover:pl-2 transition-all hover:border-red-600'><Link href="/executives">Executives</Link></li>
              <li className='text-sm text-gray-600 hover:text-green-800 hover:border-l-2 hover:pl-2 transition-all hover:border-red-600'><Link href="/principalOfficers">Principal Officers</Link></li>
              <li className='text-sm text-gray-600 hover:text-green-800 hover:border-l-2 hover:pl-2 transition-all hover:border-red-600'><Link href="/news">News Updates</Link></li>
              <li className='text-sm text-gray-600 hover:text-green-800 hover:border-l-2 hover:pl-2 transition-all hover:border-red-600'><Link href="/contact">Contact</Link></li>
            </ul>
            <div>
              {user ?
                <div className='flex items-center space-x-6 ml-10'>

                  <div className='text-right transition font-sans text-sm duration-200 ease-in bg-red-600 px-2 py-1 cursor-pointer rounded shadow-lg text-slate-100 hover:bg-white hover:border hover:text-red-600'>
                    <span onClick={logoutUser}>Logout</span>
                  </div>
                  <Link href="/dashboard">
                    <div className='rounded-full cursor-pointer p-1 bg-slate-900'>
                      <ImUser size={20} color='#fff' />
                    </div>
                  </Link>

                </div>
                :
                <div className='ml-10 transition font-sans text-sm duration-200 ease-in bg-red-600 px-2 py-1 cursor-pointer rounded shadow-lg text-slate-100 hover:bg-white hover:border hover:text-red-600'>
                  <span onClick={show} >Login/Register</span>
                </div>
              }

            </div>
          </nav>
        </div>
        <div className='hidden md:flex'>
          <Image src={"/images/yabatechLogo.png"} objectFit='contain' width={100} height={80}></Image>
        </div>
      </div>

      <div className={`sm:hidden z-50 flex transition ease-linear duration-200 delay-100 sticky bottom-0 w-full h-16 items-center px-6 justify-between ${menuClicked ? "bg-slate-800" : "bg-slate-700"} shadow-md`}>
        <div onClick={clickMenu} className='space-y-1 cursor-pointer transition duration-200 delay-75 ease-linear'>
          {menuClicked ? <ImCross color='white' size={15} /> : <MdMenu color='white' size={30} />}
        </div>
        <img className='w-20' src="/images/napes.png" alt="" />
        <Link href="/dashboard">
          <div className='rounded-full cursor-pointer p-1 bg-white'>
            <ImUser size={15} />
          </div>
        </Link>
      </div>


      <div className={`${menuClicked ? 'translate-x-0' : ' -translate-x-full'} bg-slate-600 z-50 rounded-tr-sm rounded-br-sm md:hidden text-white font-sans w-full space-x-5 absolute h-full overflow-y-hidden transition-transform duration-500 ease-in-out`}>
        <div className='bg-slate-600 border-b-2 flex items-start space-x-3 py-5'>
          <img className='w-1/4 rounded-full' src="/images/css.jpg" alt="" />
          <div>
            <h2 className='font-bold text-lg text-slate-100'>{currentUser?.fullName}</h2>
            <p className='text-gray-200 text-sm'>{currentUser?.matric_no}</p>
          </div>
        </div>
        <div className='flex flex-col items-start justify-between space-y-8 text-xl mt-4'>
          <Link href="/">
            <div className='flex w-full cursor-pointer space-x-4 items-center'>
              <IoHome />
              <p className='text-sm'>Home</p>
            </div>
          </Link>
          <Link href="/news">
            <div className='flex w-full cursor-pointer  space-x-4 items-center'>
              <MdLocalFireDepartment />
              <p className='text-sm'>News & Updates</p>
            </div>
          </Link>
          <Link href="/executives" >
            <div className='flex cursor-pointer w-full space-x-4 items-center'>
              <MdPeopleAlt />
              <p className='text-sm'>Executives</p>
            </div>
          </Link>
          <Link href="/principalOfficers">
            <div className='flex cursor-pointer w-full space-x-4 items-center'>
              <IoIosPeople />
              <p className='text-sm'>Principal Officers</p>
            </div>
          </Link>
          <Link href="/news">
            <div className='flex cursor-pointer w-full space-x-4 items-center'>
              <IoNewspaperSharp />
              <p className='text-sm'>News & Event</p>
            </div>
          </Link>
          <Link href="/contact">
            <div className='flex cursor-pointer  w-full space-x-4 items-center'>
              <MdContacts />
              <p className='text-sm'>Contact</p>
            </div>
          </Link>
        </div>
        <div>
        </div>
        <div className='bg-red-700 mt-5 mx-auto w-1/3 cursor-pointer py-2 flex justify-center rounded-md shadow'>
          <p onClick={logoutUser} className="cursor-pointer">Logout</p>
        </div>
      </div>
    </header>

  )
}

export default Header