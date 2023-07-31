import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcaseMedical, faCertificate, faHeartPulse, faHospital, faHospitalUser, faTooth } from '@fortawesome/free-solid-svg-icons'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import Link from 'next/link'


const Medidom = () => {
    return (
    <section id='home' className='w-full relative h-full px-20 py-12 flex justify-between content-center'>
        <div className='flex-col flex justify-center content-center'>
            <div className="flex flex-col gap-4 mb-10">
                <h1 className='mb-5 text-7xl font-bold whitespace-pre'>Cuidando tu salud, <span className='mt-5 text-7xl font-bold block'>en cada rincón.</span></h1>
                <p className='text-lg'>Bienvenido a MediDom, líder en servicios médicos en República Dominicana.</p>
                <p className='text-lg'>Acceso fácil y rápido a atención médica de calidad en todo el país.</p>
                <p className='text-lg'>Consultas en línea y citas presenciales. Tu salud es nuestra prioridad.</p>
            </div>
            <div className='flex gap-5 content-center relative text-center'>
                <Link href='/register' className='text-center rounded-full text-bg-300 px-6 py-3 shadow-lg shadow-primary-300/50 bg-gradient-to-r from-primary-200 to-primary-300'>¡Registrate!</Link>
                <Link href='/login' className='text-center rounded-full text-text-100 px-8 py-3 bg-transparent custom__border shadow-lg shadow-primary-300/50'>¡Acceder!</Link>
            </div>
        </div>
        <div className='flex relative h-full -translate-x-20'>
            <Image src='/Home.png' alt='dotors' width={800} height={810} className='flex content-center overflow-visible justify-center h-full translate-y-8 translate-x-5 doctor__custom' priority/>
            <div className='absolute overflow-visible w-full h-full rounded-full -z-10 blur-3xl opacity-50 translate-y-14 translate-x-8 top-0 right-0 bg-primary-300'></div>
            <div className='flex content-center justify-center translate-y-28 -translate-x-52 shadow-lg shadow-primary-300 right-0 top-0 bg-bg-300 absolute w-20 h-20 rounded-full'>
                <FontAwesomeIcon icon={faTooth} beat className='w-12 text-primary-200'/>
            </div>
            <div className='flex content-center justify-center translate-y-52 translate-x-0 shadow-lg shadow-primary-300 left-0 top-0 bg-bg-300 absolute w-24 h-24 rounded-full'>
                <FontAwesomeIcon icon={faHeartPulse} beatFade className='w-14 text-primary-200' />
            </div>
        </div>
        <div className='absolute flex justify-evenly items-center translate-y-2/3 -translate-x-32 z-20 right-0 bottom-0 w-1/2 shadow-lg shadow-primary-300 bg-bg-300 rounded-3xl'>
                <div className=' my-4 flex flex-col justify-center items-center'>
                    <i><FontAwesomeIcon icon={faHospital} className='w-16 mb-2 text-primary-200'/></i>
                    <h4 className='font-extrabold text-3xl text-primary-200'>900</h4>
                    <p className='font-semibold text-text-100'>Hospitales</p>
                </div>
                <div className='my-4 flex flex-col justify-center items-center'>
                    <i><FontAwesomeIcon icon={faHospitalUser} className='w-16 mb-2 text-primary-200'/></i>
                    <h4 className='font-extrabold text-3xl text-primary-200'>20000+</h4>
                    <p className='font-semibold text-text-100'>Pacientes</p>
                </div>
                <div className='my-4 flex flex-col justify-center items-center'>
                    <FontAwesomeIcon icon={faBriefcaseMedical} className='w-14 mb-2 text-primary-200'/>
                    <h4 className='font-extrabold text-3xl text-primary-200'>850</h4>
                    <p className='font-semibold text-text-100'>Doctores</p>
                </div>
                <div className='my-4 flex flex-col justify-center items-center'>
                    <i><FontAwesomeIcon icon={faCertificate} className='w-14 mb-2 text-primary-200'/></i>
                    <h4 className='font-extrabold text-3xl text-primary-200'>200</h4>
                    <p className='font-semibold text-text-100'>Certificados</p>
                </div>
            </div>
        <div className='social__network absolute flex gap-8 left-0 bottom-0 pl-20 translate-y-24'>
            <a target='_blank' className='flex justify-center content-center bg-gradient-to-r from-primary-200 to-primary-300 text-center text-base shadow-lg shadow-primary-300 bg-slate-600 w-12 h-12 rounded-full' href="https://www.facebook.com/"><FaFacebook size='29'/></a>
            <a target='_blank' className='flex justify-center content-center bg-gradient-to-r from-primary-200 to-primary-300 text-center text-base shadow-lg shadow-primary-300 bg-slate-600 w-12 h-12 rounded-full' href="https://www.instagram.com/"><FaInstagram size='29'/></a>
            <a target='_blank' className='flex justify-center content-center bg-gradient-to-r from-primary-200 to-primary-300 text-center text-base shadow-lg shadow-primary-300 bg-slate-600 w-12 h-12 rounded-full' href="https://twitter.com/home"><FaTwitter size='25'/></a>
        </div>
    </section>
    )
}

export default Medidom
