import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div id='help' className='w-full flex content-center justify-between items-center h-full px-60 pt-12 pb-5 mt-64 relative'>
      <div className='flex flex-col gap-5'>
        <Link href="/" className='flex content-center items-center'>
          <Image src='/logo.png' alt='logo' width={30.8} height={30.8} className=''/>
        </Link>
        <h6 className='text-sm font-normal'>
          © 2023 JuPegro | Instituto Tecnologico de las Americas | ITLA
        </h6>
      </div>
      <div className='line'></div>
      <div className='flex flex-col items-end gap-6'>
        <div className='flex gap-8'>
          <Link href='/'><p className='text-xs hover:text-primary-100 text-primary-100 font-semibold'>About MEDIDOM</p></Link>
          <Link href='/'><p className='text-xs hover:text-primary-100 text-text-100 font-semibold'>Newsroom</p></Link>
          <Link href='/'><p className='text-xs hover:text-primary-100 text-text-100 font-semibold'>Home</p></Link>
          <Link href='/'><p className='text-xs hover:text-primary-100 text-text-100 font-semibold'>Contact Us</p></Link>
          <Link href='/'><p className='text-xs hover:text-primary-100 text-text-100 font-semibold'> Advertising</p></Link>
        </div>
        <div className='flex gap-6 text__gradient'>
          <a target='_blank' className='text__gradient' href="https://www.facebook.com/"><FaFacebook size='14'/></a>
          <a target='_blank' className='text__gradient' href="https://www.instagram.com/"><FaInstagram size='14'/></a>
          <a target='_blank' className='text__gradient' href="https://twitter.com/home"><FaTwitter size='14'/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer