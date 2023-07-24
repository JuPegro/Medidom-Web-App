"use client"
import Link from 'next/link'
import React, { FormEvent, useState } from 'react'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import axios, { AxiosError } from 'axios';

const page = () => {

    const [error, setError] = useState();
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        try {
            const res = await axios.patch('https://medi-dom-api-production.up.railway.app/api/v1/user/forget-password', {
                "email": formData.get('email'),
            });
            console.log(res);
            router.push('/');
        } catch (error) {
            console.log(error);
            if (error instanceof AxiosError) {
                setError(error.response?.data.message)
            }
        }
    }
    return (
        <div className='img__cover w-full min-h-screen flex box-border justify-center content-center items-center'>
            <div className='w-[40rem] h-[25rem] flex relative flex-col gap-5 justify-center content-center items-center rounded-3xl shadow-lg shadow-primary-300'>
                <div className='absolute top-0 p-5 -translate-y-20 bg-bg-300 rounded-full shadow-lg shadow-primary-300 flex justify-center content-center items-center'>
                    <Image src='/logo.png' alt='logo' width={105.8} height={105.8} className=''/>
                </div>
                <h3 className='-translate-y-4 text-3xl text-primary-200 font-bold'>Recuperar contraseña</h3>
                <form onSubmit={handleSubmit} className='flex w-10/12 flex-col mt-4 justify-start relative content-start items-start' action='' method='POST'>
                {error && <div className='bg-red-500 text-white p-2 mb-2'>{error}</div>}
                    <div className='w-full flex relative content-center flex-col gap-4'>
                        <span className='font-medium text-primary-100'>Correo electronico</span>
                        <FontAwesomeIcon icon={faEnvelope} className='w-5 text-primary-200 absolute translate-y-[3.2rem] translate-x-3'/>
                        <input type="mail" name="email" className='text-primary-200 py-2 border-primary-100 border-2 text-sm rounded pl-14 outline-none'/>
                    </div>
                    <div className='btn__group translate-y-20 absolute bottom-0 flex content-center w-full justify-between'>
                        <Link href='/login' className='font-medium text-primary-200'>Volver</Link>
                        <button className='px-5 py-1 rounded-md shadow-lg shadow-primary-300/50 bg-gradient-to-r from-primary-200 to-primary-300 text-bg-300'>Recuperar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default page
