import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    return (
        <div className='img__cover w-full min-h-screen flex box-border justify-center content-center items-center'>
            <div className='w-[40rem] h-[30rem] flex relative flex-col gap-5 justify-center content-center items-center rounded-3xl shadow-lg shadow-primary-300'>
                <div className='absolute top-0 p-5 -translate-y-20 bg-bg-300 rounded-full shadow-lg shadow-primary-300 flex justify-center content-center items-center'>
                    <Image src='/logo.png' alt='logo' width={105.8} height={105.8} className=''/>
                </div>
                <h3 className='-mt-6 text-3xl text-primary-200 font-bold'>Iniciar sesión</h3>
                <form className='flex w-10/12 flex-col mt-4 justify-start relative content-start items-start' action='' method='POST'>
                    <div className='w-full flex relative content-center flex-col gap-4'>
                        <span className='font-medium text-primary-100'>Correo electronico</span>
                        <FontAwesomeIcon icon={faEnvelope} className='w-6 text-primary-200 absolute translate-y-[3.1rem] translate-x-3'/>
                        <input type="text" id="mail" name="mail" className='text-primary-200 py-2 border-primary-100 border-2 text-sm rounded pl-14 outline-none'/>
                    </div>
                    <div className='w-full mt-6 flex relative content-center flex-col gap-4'>
                        <span className='font-medium text-primary-100'>Contraseña</span>
                        <FontAwesomeIcon icon={faLock} className='w-5 text-primary-200 absolute translate-y-[3.05rem] translate-x-3'/>
                        <input type="password" id="password" name="password" className='text-primary-200 py-2 border-primary-100 border-2 text-sm rounded pl-14 outline-none'/>
                    </div>
                    <div className='btn__group absolute bottom-0 translate-y-24 flex content-center w-full justify-between'>
                        <Link href='/sign-up' className='font-medium text-primary-200'>Crear cuenta</Link>
                        <Link href='' className='px-5 py-1 rounded-md shadow-lg shadow-primary-300/50 bg-gradient-to-r from-primary-200 to-primary-300 text-bg-300'>Iniciar</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
