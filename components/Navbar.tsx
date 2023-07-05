import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router'


const Navbar = () => {
    return (
        <header className='w-full'>
            <nav className='nav__blur flex justify-between content-center top-0 sticky items-center bg-transparent'>
                <div className='flex content-center py-3 px-20 gap-3 '>
                    <Link href="/" className='flex content-center items-center'>
                        <Image src='/logo.png' alt='logo' width={48.8} height={42.8} className='mr-1'/>
                        <h1 className='text-text-100 ml-4 text-2xl font-extrabold'>MEDIDOM</h1>
                    </Link>
                </div>
                <div className='custom__hover flex pr-20 text-lg'>
                    <a className='relative mr-12 font-normal hover:text-primary-100' href="#">Inicio</a>
                    <a className='relative mr-12 font-normal hover:text-primary-100' href="#about">Acerca</a>
                    <a className='relative mr-12 font-normal hover:text-primary-100' href="#services">Servicios</a>
                    <a className='relative mr-12 font-normal hover:text-primary-100' href="#help">Ayuda</a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar