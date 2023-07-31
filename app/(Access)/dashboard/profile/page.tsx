import React from 'react'
import Image from 'next/image'
import { BiSolidUser } from "react-icons/bi";
import { BsGenderAmbiguous, BsCalendar3, BsPhone, BsPersonVcard } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";


const page = () => {
    return (
        <div className="mx-20 w-11/12">
            <div className='flex gap-2 text-4xl mt-10'>
                <h2 className='text__gradient font-black'>Bienvenido,</h2><p className='text-text-200 font-semibold'>JuPegro._</p>
            </div>
            <div className="flex">
                <div className="flex flex-col items-center top-0 text-center gap-6 justify-center mt-12 h-[45rem] w-[24rem] rounded-xl border-2 shadow-lg shadow-primary-300 border-primary-300">
                    <div className="flex items-center justify-center relative">
                        <Image src='/paisaje.jpg' alt='user__photo' width={280} height={280} className='w-[16rem] h-[16rem] border-2 border-primary-300 p-1 rounded-full'/>
                    </div>
                    <div className="flex flex-col gap-5 text-text-100 py-3">
                        <h3 className='text-3xl font-bold'>JuPegro._</h3>
                        <p className='text-lg flex items-center justify-between b__gradient px-7 py-3 rounded-full text-bg-300'><BiSolidUser className='mr-2' size='20'/>ADMINSTRADOR</p>
                    </div>
                    <div className="flex flex-col ml-5 text-center gap-5">
                        <p className='flex text-sm text-text-200 justify-start items-center'><BsGenderAmbiguous className='mr-5' size='22'/>Masculino</p>
                        <p className='flex text-sm text-text-200 justify-start items-center'><BsCalendar3 className='mr-5' size='22'/>22/01/2023</p>
                        <p className='flex text-sm text-text-200 justify-start items-center'><BsPhone className='mr-5' size='22'/>8292544578</p>
                        <p className='flex text-sm text-text-200 justify-start items-center'><BsPersonVcard className='mr-5' size='22'/>003-1936322-7</p>
                        <p className='flex text-sm text-text-200 justify-start items-center'><HiOutlineMail className='mr-5' size='22'/>JuPegro@gmail.com</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5 mx-16 my-12">
                    <h3 className='font-bold text-text-100 text-4xl'>Detalles de la cuenta</h3>
                    <form className="flex relative items-center gap-20 mt-6">
                        <div className="flex flex-col w-[27.5rem] gap-8">
                            <div className="flex flex-col gap-2">
                                <span className='text-primary-200 font-medium'>Nombres</span>
                                <input type="text" className='bg-bg-300 border-2 text-sm border-primary-300 shadow text-primary-100 shadow-primary-300 outline-none p-3 rounded-lg'/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className='text-primary-200 font-medium'>Correo</span>
                                <input type="text" className='bg-bg-300 border-2 text-sm border-primary-300 shadow text-primary-100 shadow-primary-300 outline-none p-3 rounded-lg'/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className='text-primary-200 font-medium'>Télefono</span>
                                <input type="text" className='bg-bg-300 border-2 text-sm border-primary-300 shadow text-primary-100 shadow-primary-300 outline-none p-3 rounded-lg'/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className='text-primary-200 font-medium'>Fecha de Nacimiento</span>
                                <input type="text" className='bg-bg-300 border-2 text-sm border-primary-300 shadow text-primary-100 shadow-primary-300 outline-none p-3 rounded-lg'/>
                            </div>
                        </div>
                        <div className="flex flex-col w-[27.5rem] gap-8">
                            <div className="flex flex-col gap-2">
                                <span className='text-primary-200 font-medium'>Apellidos</span>
                                <input type="text" className='bg-bg-300 border-2 text-sm border-primary-300 shadow text-primary-100 shadow-primary-300 outline-none p-3 rounded-lg'/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className='text-primary-200 font-medium'>Cédula</span>
                                <input type="text" className='bg-bg-300 border-2 text-sm border-primary-300 shadow text-primary-100 shadow-primary-300 outline-none p-3 rounded-lg'/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className='text-primary-200 font-medium'>Dirección</span>
                                <input type="text" className='bg-bg-300 border-2 text-sm border-primary-300 shadow text-primary-100 shadow-primary-300 outline-none p-3 rounded-lg'/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className='text-primary-200 font-medium'>Genero</span>
                                <input type="text" className='bg-bg-300 border-2 text-sm border-primary-300 shadow text-primary-100 shadow-primary-300 outline-none p-3 rounded-lg'/>
                            </div>
                        </div>
                        <div className="absolute flex bottom-0 translate-y-36">
                            <input type="file" id="real-file" className='hidden' />
                            <label htmlFor='real-file' className="border-2 text-primary-200 font-medium rounded-xl cursor-pointer text-center border-dashed px-[28rem] py-6 shadow shadow-primary-300 border-primary-300">
                                Subir Imagen
                            </label>
                        </div>
                        <button className='absolute right-0 bottom-0 rounded-xl shadow-lg text-bg-300 shadow-primary-300 translate-y-52 b__gradient py-2 px-3'>Guardar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default page
