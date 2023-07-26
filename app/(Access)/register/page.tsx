"use client"
import React, { FormEvent, useState } from 'react'
import axios, {AxiosError} from 'axios';
import Link from 'next/link'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faLock, faIdCard, faUser } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const [error, setError] = useState();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        try {
            const res = await axios.post('https://medi-dom-api-production.up.railway.app/api/v1/auth/sign-up', {
                "firstName": formData.get('name'),
                "lastName": formData.get('lastname'),
                "citizenId": formData.get('card'),
                "phone": formData.get('phone'),
                "email": formData.get('email'),
                "password": formData.get('password'),
            });
            console.log(res);
            toast.success('¡Registro exitoso!');
            setTimeout(() => {
                window.location.href = 'login';
            }, 6000);
        } catch (error) {
            console.log(error);
            if (error instanceof AxiosError) {
                setError(error.response?.data.message)
            }
        }
    }


    return (
        <div className='img__cover w-full min-h-screen flex box-border justify-center content-center items-center'>
            <div className=" z-50">
            <ToastContainer />
            </div>
            <div className='w-[40rem] h-[43rem] flex relative flex-col gap-1 justify-center content-center items-center rounded-3xl shadow-lg shadow-primary-300'>
                <div className='absolute top-0 p-5 -translate-y-20 bg-bg-300 rounded-full shadow-lg shadow-primary-300 flex justify-center content-center items-center'>
                    <Image src='/logo.png' alt='logo' width={105.8} height={105.8} className=''/>
                </div>
                <h3 className='text-3xl text-primary-200 font-bold'>Crear cuenta</h3>
                <form onSubmit={handleSubmit} className='flex w-10/12 flex-col mt-2 justify-start relative content-start items-start' action='' method='POST'>
                    {error && <div className='bg-red-500 text-white p-2 mb-2'>{error}</div>}
                    
                    <div className='w-full flex relative content-center flex-col gap-2'>
                        <span className='font-medium text-primary-100'>Nombre</span>
                        <FontAwesomeIcon icon={faUser} className='w-4 text-primary-200 absolute translate-y-[2.7rem] translate-x-3'/>
                        <input type="text" name="name" className='text-primary-200 py-2 border-primary-100 border-2 text-sm rounded pl-14 outline-none'/>
                    </div>
                    <div className='w-full mt-4 flex relative content-center flex-col gap-2'>
                        <span className='font-medium text-primary-100'>Apellido</span>
                        <FontAwesomeIcon icon={faIdCard} className='w-5 text-primary-200 absolute translate-y-[2.7rem] translate-x-3'/>
                        <input type="text" name="lastname" className='text-primary-200 py-2 border-primary-100 border-2 text-sm rounded pl-14 outline-none'/>
                    </div>
                    <div className='w-full mt-4 flex relative content-center flex-col gap-2'>
                        <span className='font-medium text-primary-100'>Cédula</span>
                        <FontAwesomeIcon icon={faEnvelope} className='w-5 text-primary-200 absolute translate-y-[2.6rem] translate-x-3'/>
                        <input type="text" name="card" className='text-primary-200 py-2 border-primary-100 border-2 text-sm rounded pl-14 outline-none'/>
                    </div>
                    <div className='w-full mt-4 flex relative content-center flex-col gap-2'>
                        <span className='font-medium text-primary-100'>Número</span>
                        <FontAwesomeIcon icon={faLock} className='w-4 text-primary-200 absolute translate-y-[2.7rem] translate-x-3'/>
                        <input type="number" name="phone" className='text-primary-200 py-2 border-primary-100 border-2 text-sm rounded pl-14 outline-none'/>
                    </div>
                    <div className='w-full mt-4 flex relative content-center flex-col gap-2'>
                        <span className='font-medium text-primary-100'>Correo electronico</span>
                        <FontAwesomeIcon icon={faLock} className='w-4 text-primary-200 absolute translate-y-[2.7rem] translate-x-3'/>
                        <input type="mail" name="email" className='text-primary-200 py-2 border-primary-100 border-2 text-sm rounded pl-14 outline-none'/>
                    </div>
                    <div className='w-full mt-4 flex relative content-center flex-col gap-2'>
                        <span className='font-medium text-primary-100'>Contraseña</span>
                        <FontAwesomeIcon icon={faLock} className='w-4 text-primary-200 absolute translate-y-[2.7rem] translate-x-3'/>
                        <input type="password" name="password" className='text-primary-200 py-2 border-primary-100 border-2 text-sm rounded pl-14 outline-none'/>
                    </div>
                    <div className='btn__group absolute bottom-0 translate-y-20 flex content-center w-full justify-between'>
                        <Link href='/login' className='font-medium text-primary-200'>Iniciar sesión</Link>
                        <button className='px-5 py-1 rounded-md shadow-lg shadow-primary-300/50 bg-gradient-to-r from-primary-200 to-primary-300 text-bg-300'>Crear</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
