'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {

    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const handleScroll = () => {
        const scrollPosition = window.scrollY + 100;
        const medidomSection = document.getElementById('home');
        const aboutSection = document.getElementById('about');
        const servicesSection = document.getElementById('services');
        const helpSection = document.getElementById('help');

        if (
            medidomSection &&
            scrollPosition >= medidomSection.offsetTop &&
            scrollPosition < medidomSection.offsetTop + medidomSection.offsetHeight
        ) {
            setActiveLink('inicio');
        } else if (
            aboutSection &&
            scrollPosition >= aboutSection.offsetTop &&
            scrollPosition < aboutSection.offsetTop + aboutSection.offsetHeight
        ) {
            setActiveLink('about');
        } else if (
            servicesSection &&
            scrollPosition >= servicesSection.offsetTop &&
            scrollPosition < servicesSection.offsetTop + servicesSection.offsetHeight
        ) {
            setActiveLink('services');
        } else if (helpSection && scrollPosition >= helpSection.offsetTop) {
            setActiveLink('help');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set the active link initially on mount

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);

    return (
        <header className='w-full'>
            <nav className='nav__blur flex justify-between content-center top-0 sticky items-center bg-transparent'>
                <div className='flex content-center py-3 px-20 gap-3'>
                <Link href="/" className='flex content-center items-center'>
                    <Image src='/logo.png' alt='logo' width={48.8} height={42.8} priority className='mr-1' />
                    <h1 className='text-text-100 ml-4 text-2xl font-extrabold'>MEDIDOM</h1>
                </Link>
                </div>
                <div className='custom__hover flex pr-20 text-lg'>
                <a className={activeLink === 'inicio' ? 'relative mr-12 font-normal hover:text-primary-100 active__link' : 'relative mr-12 font-normal hover:text-primary-100'} href="#">
                    Inicio
                </a>
                <a className={activeLink === 'about' ? 'relative mr-12 font-normal hover:text-primary-100 active__link' : 'relative mr-12 font-normal hover:text-primary-100'} href="#about">
                    Acerca
                </a>
                <a className={activeLink === 'services' ? 'relative mr-12 font-normal hover:text-primary-100 active__link' : 'relative mr-12 font-normal hover:text-primary-100'} href="#services">
                    Servicios
                </a>
                <a className={activeLink === 'help' ? 'relative mr-12 font-normal hover:text-primary-100 active__link' : 'relative mr-12 font-normal hover:text-primary-100'} href="#help">
                    Ayuda
                </a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
