"use client"
import Image from 'next/image'
import {SideBar} from '@/components'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSun, FaCircle } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";


export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="flex h-screen w-full relative">
      {/* Aquí definimos el Sidebar */}
      <div className="w-1/5">
        <SideBar />
      </div>

      {/* Contenido principal */}
      <div className="w-[120%] -translate-x-0 sticky">
        <nav className='flex justify-between relative items-center py-6 shadow-md'>
          <div className="bg-bg-200 __line p-3 ml-7 rounded-lg flex items-center">
            <button><GiHamburgerMenu className='text-primary-200 icon' size='24'/></button>
          </div>
          <div className="absolute translate-x-36">
            <select className='select-selected py-3 text-base outline-none font-semibold text-text-200 bg-bg-200 pl-6 pr-9 rounded-lg flex justify-around'>
              <option value="opcion1">Eng </option>
              <option value="opcion2">Esp </option>
              <option value="opcion3">Frc </option>
            </select>
          </div>
          <div className="bg-bg-200 absolute right-0 p-3 -translate-x-[32.2rem] rounded-lg flex items-center">
            <button><FaSun className='text-primary-200 icon' size='24'/></button>
          </div>
          <div className="bg-bg-200 absolute right-0 __line__  -translate-x-96 p-3 rounded-lg flex items-center">
            <FaCircle className='text-accent-100 translate-x-3 -translate-y-[6px] absolute icon' size='8'/>
            <button><IoMdNotificationsOutline className='text-primary-200 icon' size='24'/></button>
          </div>
          <div className="flex gap-3 items-center -translate-x-32 mr-6">
            <p className=' text-text-100 font-medium mr-3'>JuPegro._</p>
            <Image src='/paisaje.jpg' alt='user__photo' width={40} height={20} id='img' className='img rounded-3xl'/>
            <div className="absolute right-0 translate-x-[0.28rem] profile__circle"></div>
          </div>
        </nav>
        {children}
      </div>
    </div>
    )
  }