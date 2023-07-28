"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { TbMessageCircle2 } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";
import { useRouter } from 'next/navigation';
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { PiStethoscopeFill, PiWheelchairDuotone, PiCalendarBlankDuotone, PiChartLine } from "react-icons/pi";

const SideBar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const router = useRouter();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleLogout = () => {
        // Borrar la información del usuario almacenada en el localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('userID');
    
        router.push('/login');
    };

    return (
        <div className={`bg-white gap-2 text-white h-screen shadow-md ${isSidebarOpen ? 'w-72' : 'w-16'}`}>
            <div className="flex justify-center items-center gap-3 p-8">
                <Image src='/Logo.png' alt='dotors' width={45} height={45} className=''/>
                <h2 className='text-3xl font-extrabold text-text-100'>MEDIDOM</h2>
            </div>
            <div className="flex flex-col mt-20 ml-11 gap-10 relative">
                <div className='active flex items-center py-2'>
                    <Link className='side__link active flex text-center items-center gap-5 font-medium text-base text-text-200' href='#'><AiOutlineHome className='text-text-200 icon' size='24'/>Dashboard</Link>
                </div>
                <div className='flex items-center'>
                    <Link className='side__link flex text-center items-center gap-5 font-medium text-base text-text-200' href='#'><IoPersonOutline className='text-text-200 icon' size='24'/>Perfil</Link>
                </div>
                <div className='flex items-center'>
                    <Link className='side__link flex text-center items-center gap-5 font-medium text-base text-text-200' href='#'><PiStethoscopeFill className='text-text-200 icon' size='24'/>Doctores</Link>
                </div>
                <div className='flex items-center'>
                    <Link className='side__link flex text-center items-center gap-5 font-medium text-base text-text-200' href='#'><PiWheelchairDuotone className='text-text-200 icon' size='24'/>Pacientes</Link>
                </div>
                <div className='flex items-center'>
                    <Link className='side__link flex text-center items-center gap-5 font-medium text-base text-text-200' href='#'><PiCalendarBlankDuotone className='text-text-200 icon' size='24'/>Horarios</Link>
                </div>
                <div className='flex items-center hover:text-primary-100'>
                    <Link className='side__link flex text-center items-center gap-5 font-medium text-base text-text-200' href='#'><PiChartLine className='text-text-200 icon' size='24'/>Resultados</Link>
                </div>
                <div className='flex items-center'>
                    <Link className='side__link flex text-center items-center gap-5 font-medium text-base text-text-200' href='#'><TbMessageCircle2 className='text-text-200 icon' size='24'/>Mensajes</Link>
                    <p className='text-primary-200 text-base font-bold bg-primary-300 rounded-md px-2 ml-4'>30</p>
                </div>
                <div className='flex items-center'>
                    <Link className='side__link flex text-center items-center gap-5 font-medium text-base text-text-200' href='#'><MdOutlineAdminPanelSettings className='text-text-200 icon' size='24'/>Administradores</Link>
                </div>
            </div>
            <div className='ml-9 bottom-24 absolute items-center'>
                <button className='side__link flex text-center items-center gap-5 font-medium text-base text-text-200' onClick={handleLogout}><FiLogOut className='text-text-200 icon' size='24'/>LogOut</button>
                {/* <Link className='side__link flex text-center items-center gap-5 font-medium text-base text-text-200' href='/'><FiLogOut className='text-text-200 icon' size='24'/>LogOut</Link> */}
            </div>
        </div>
    )
}

export default SideBar
