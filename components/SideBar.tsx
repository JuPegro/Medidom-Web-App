"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { IoPersonOutline, IoPerson } from "react-icons/io5";
import { TbMessageCircle2 } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";
import { useRouter, usePathname } from 'next/navigation';
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { PiStethoscopeFill, PiWheelchairDuotone, PiCalendarBlankDuotone, PiChartLine } from "react-icons/pi";

const SideBar = () => {

    const router = useRouter();
    const currentPath = usePathname();

    const NavLinks = [
        {'link': '/dashboard/home', 
        'icon': <AiOutlineHome className='text-text-200 icon' size='24'/>,
        'activeIcon': <AiFillHome className='text-text-200 icon' size='24'/>,
        'title':'Dashboard'
        },
        {'link': '/dashboard/profile', 
        'icon': <IoPersonOutline className='text-text-200 icon' size='24'/>,
        'activeIcon': <IoPerson className='text-text-200 icon' size='24'/>,
        'title':'Perfil'
        },
        {'link': '/dashboard/kks', 
        'icon': <PiStethoscopeFill className='text-text-200 icon' size='24'/>,
        'title':'Doctores'
        },
        {'link': '/dashboard/ssss', 
        'icon': <PiWheelchairDuotone className='text-text-200 icon' size='24'/>,
        'title':'Pcientes'
        },
        {'link': '/dashboard/ssssaa', 
        'icon': <PiCalendarBlankDuotone className='text-text-200 icon' size='24'/>,
        'title':'Horarios'
        },
        {'link': '/dashboard/sasassd', 
        'icon': <PiChartLine className='text-text-200 icon' size='24'/>,
        'title':'Resultados'
        },
        {'link': '/dashboard/ddsds', 
        'icon': <TbMessageCircle2 className='text-text-200 icon' size='24'/>,
        'title':'Mensajes',
        },
        {'link': '/dashboard/dsdsd', 
        'icon': <MdOutlineAdminPanelSettings className='text-text-200 icon' size='24'/>,
        'title':'Administradores'
        },
        
    ]

    const handleLogout = () => {
        // Borrar la información del usuario almacenada en el localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('userID');
    
        router.push('/login');
    };

    return (
        <div className={`bg-white gap-2 text-white h-screen shadow-md`}>
            <div className="flex justify-center items-center gap-3 p-8">
                <Image src='/Logo.png' alt='dotors' width={45} height={45} className=''/>
                <h2 className='text-3xl font-extrabold text-text-100'>MEDIDOM</h2>
            </div>
            <nav className="flex flex-col mt-20 ml-11 gap-5 relative">
            {NavLinks.map(({link, icon, activeIcon, title}) => {
                const isActive = currentPath.startsWith(link);
                return (
                    <div className={`flex items-center py-2 ${isActive ? 'active' : ''}`}>
                        <Link className={`side__link flex text-center items-center gap-5 font-medium text-base ${isActive ? 'text-primary-200' : 'text-text-200'}`} href={link} key={title}>
                        {isActive ? activeIcon : icon}
                        {title}
                        </Link>
                        {title === 'Mensajes' ? <p className='text-primary-200 text-base font-bold bg-primary-300 rounded-md px-2 ml-4'>30</p> : ''}
                    </div>
                );
            })}
</nav>
            <div className='ml-9 bottom-24 absolute items-center'>
                <button className='side__link flex text-center items-center gap-5 font-medium text-base text-text-200' onClick={handleLogout}><FiLogOut className='text-text-200 icon' size='24'/>LogOut</button>
                {/* <Link className='side__link flex text-center items-center gap-5 font-medium text-base text-text-200' href='/'><FiLogOut className='text-text-200 icon' size='24'/>LogOut</Link> */}
            </div>
        </div>
    )
}

export default SideBar
