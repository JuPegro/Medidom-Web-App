"use client"
import Link from 'next/link'
import axios, {AxiosError} from 'axios';
import React, { FormEvent, useState, useEffect } from 'react'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';


const Login = () => {
    const [error, setError] = useState();
    const router = useRouter();

    useEffect(() => {
    localStorage.clear();
});

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        try {
            const res = await axios.post('https://medi-dom-api.up.railway.app/api/v1/auth/sign-in', {
                "email": formData.get('email'),
                "password": formData.get('password'),
            });
            console.log(res);
            const { token, user } = res.data.data;
            const userRole = user.role.description
            localStorage.setItem('token', token);
            localStorage.setItem('userID', user.id);
            localStorage.setItem('Username', user.firstName + " " + user.lastName)
            localStorage.setItem("UserLastname",user.lastName)

            switch (userRole) {
                case 'Patient':
                    router.push('/hjhjhjhjjh');
                    break;
                case 'Admin':
                    router.push('/dashboard/home');
                    break;
                case 'Doctor':
                    router.push('/doctors/home');
                    break;
                default:
                    window.location.reload()
            }

        } catch (error) {
            console.log(error);
            if (error instanceof AxiosError) {
                setError(error.response?.data.message)
            }
        }
    }
    return (
        <div className='img__cover w-full min-h-screen flex box-border justify-center content-center items-center'>
            <div className='w-[40rem] h-[36rem] flex relative flex-col gap-5 justify-center content-center items-center rounded-3xl shadow-lg shadow-primary-300'>
                <div className='absolute top-0 p-5 -translate-y-20 bg-bg-300 rounded-full shadow-lg shadow-primary-300 flex justify-center content-center items-center'>
                    <Image src='/logo.png' alt='logo' width={105.8} height={105.8} priority/>
                </div>
                <h3 className='-mt-6 text-3xl text-primary-200 font-bold'>Iniciar sesión</h3>
                <form onSubmit={handleSubmit} className='flex w-10/12 flex-col mt-4 justify-start relative content-start items-start' action='' method='POST'>
                {error && <div className='font-light italic text-xs text-primary-300 mb-4'>{error}</div>}
                    <div className='w-full flex relative content-center flex-col gap-4'>
                        <span className='font-medium text-primary-100'>Correo electronico</span>
                        <FontAwesomeIcon icon={faEnvelope} className='w-6 text-primary-200 absolute translate-y-[3.1rem] translate-x-3'/>
                        <input type="text" name="email" className='text-primary-200 py-2 border-primary-100 border-2 text-sm rounded pl-14 outline-none'/>
                    </div>
                    <div className='w-full mt-6 flex relative content-center flex-col gap-4'>
                        <span className='font-medium text-primary-100'>Contraseña</span>
                        <FontAwesomeIcon icon={faLock} className='w-5 text-primary-200 absolute translate-y-[3.05rem] translate-x-3'/>
                        <input type="password" name="password" className='text-primary-200 py-2 border-primary-100 border-2 text-sm rounded pl-14 outline-none'/>
                    </div>
                    <Link href='/forgot' className='mt-6 translate-y-2 font-normal text-primary-100'>Olvide mi contraseña</Link>
                    <div className='btn__group translate-y-20 absolute bottom-0 flex content-center w-full justify-between'>
                        <Link href='/register' className='font-medium text-primary-200'>Crear cuenta</Link>
                        <button className='px-5 py-1 rounded-md shadow-lg shadow-primary-300/50 bg-gradient-to-r from-primary-200 to-primary-300 text-bg-300'>Iniciar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
