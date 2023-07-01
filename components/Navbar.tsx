import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <header className='w-full absolute z-10'>
            <nav className='Navbar max-w-[1440px] mx-auto flex
                justify-between items-center sm:px-16 px-6 py-4 '>
                <div className="domedica__logo">
                    <Link href="/" className='flex justify-center items-center  '>
                        <Image src='/logo.png' alt='logo' width={51.8} height={48.8} className='logo'/>
                        <h1 className='ml-5'>MEDIDOM</h1>
                    </Link>
                </div>
                <div className="section__page">
                    <a className="active" href="#home">Inicio</a>
                    <a href="#about">Acerca</a>
                    <a href="#services">Servicios</a>
                    <a href="#help">Ayuda</a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar