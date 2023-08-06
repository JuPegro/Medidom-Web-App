'use client'
import React, { useState, useEffect  } from 'react';
import { BiPlus, BiSearch, BiSolidPhone, BiSolidEdit } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import Image from 'next/image';
import { FaHospital } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { ModalDoctorInfo } from '@/components';
import axios, { AxiosResponse } from 'axios';


const page = () => {

    const [pagina, setPagina] = useState(1);
    const [porPagina, setPorPagina] = useState();

    // const maximo = Pokemons.lenght / porPagina;

    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [selectedDoctorId, setSelectedDoctorId] = useState<string | null>(null);

    const handleOpenModal = () => {
        const doctorId = null;
        // setSelectedDoctorId(doctorId);
        setIsModalOpen(true);
    };
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const [userData, setUserData] = useState<any | null>(null);

    useEffect(() => {
        const getResquestWithAuthorization = async () => {
            try {
                const response: AxiosResponse<any> = await axios.get('https://medi-dom-api.up.railway.app/api/v1/user', {
                    headers: {
                        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJqZG9lQGRvbWFpbi5jb20iLCJpYXQiOjE2OTEzMzQ2MjgsImV4cCI6MTY5MTQyMTAyOH0.a0sAqyeQHU7RJFeLxb5vG5pdNmIgz3BN_sU1K1Uhj_s`,
                }
            });
                console.log('API Response:', response.data);
                setUserData(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error('API Error:', error);
            }
        };
    
        getResquestWithAuthorization();
    }, []);

    return (
        <div className="mx-20 w-11/12">
            <div className='flex gap-2 text-4xl mt-10'>
                <h2 className='text__gradient font-black'>Doctores</h2><p className='text-text-200 font-semibold'>(200)</p>
            </div>
            <div className="mt-14 flex justify-between items-center">
                <div className="flex justify-center items-center gap-5">
                    <p className='text-primary-200 mr-4'>Filtros:</p>
                    <select name="" id="" className='py-2 text-sm select__custom text-primary-200 px-3 border outline-none border-primary-300 shadow-lg shadow-primary-300 rounded-xl'>
                        <option value="Todo">Todo</option>
                        <option value="Activos">Activos</option>
                        <option value="Inactivos">Inactivos</option>
                    </select>
                    <select name="" id="" className='py-2 text-sm select__custom text-primary-200 px-3 border outline-none border-primary-300 shadow-lg shadow-primary-300 rounded-xl'>
                        <option value="Cirujano">Cirujano</option>
                        <option value="Pediatra">Pediatra</option>
                        <option value="General">General</option>
                    </select>
                </div>
                <div className="flex gap-5 mr-[4.4rem]">
                    <div className="flex items-center relative">
                        <BiSearch className='mr-5 translate-x-14 text-primary-100' size='22'/>
                        <input type="text" placeholder='@nombre-doctor' className='py-2 pl-11 w-60 text-sm text-primary-200 border outline-none border-primary-300 shadow-lg shadow-primary-300 rounded-xl'/>
                    </div>
                    <button onClick={handleOpenModal} className='b__gradient rounded-full shadow-lg shadow-primary-300'><BiPlus className=' text-bg-300 font-bold w-[2.4rem]' size='24'/></button>
                </div>
            </div>
            <div className="grid grid-cols-5 place-content-center gap-x-[1px] mt-24 gap-y-[4.8rem] ">
            {userData ? (
                <div>
                <p>Nombre: {userData.email}</p>
                <p>Email: {userData[0].id}</p>
                {/* Mostrar otros datos según la estructura de userData */}
                </div>
            ) : (
                <p>Cargando datos...</p>
            )}
            
            <div className="flex border relative justify-center shadow-lg shadow-primary-300 flex-col items-center border-primary-300 w-[14.5rem] h-56 rounded-2xl">
                    <div className="absolute top-0 -translate-y-16">
                        <Image src='/paisaje.jpg' width={500} height={500} alt='img' className='w-32 h-32 border-[3px] border-primary-300 p-[1px] rounded-full'></Image>
                    </div>
                    <div className="flex top-4 justify-between absolute gap-40">
                    <button onClick={handleOpenModal}>
                        <BiSolidEdit className="text-primary-100" size="22" />
                    </button>
                    </div>
                    <div className="flex flex-col relative mt-12 text-center mb-4 gap-2">
                        <p className=' text-text-100 font-bold text-lg'>Julio Peguero</p>
                        <p className='text-sm -px-2 py-1 text-bg-300 bg-primary-100 rounded-lg'>Cirujano</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex text-xs gap-2 text-text-200">
                            <BiSolidPhone className=' text-text-200' size='14'/>
                            <p>(809) 255-1547</p>
                        </div>
                        <div className="flex text-xs gap-2 text-text-200">
                            <MdEmail className=' text-text-200' size='14'/>
                            <p>Elcirujano@gmail.com</p>
                        </div>
                        <div className="flex text-xs gap-2 text-text-200">
                            <FaHospital className=' text-text-200' size='14'/>
                            <p>Dario Contreras, SDE</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute flex items-center bottom-3 gap-3 transform -translate-x-1/2 left-1/2">
                <button className='b__gradient py-2 px-2 rounded-md shadow-md shadow-primary-300'><FaArrowLeft className=' text-bg-300' size='14'/></button>
                <p className=' bg-bg-300 border shadow-md shadow-primary-300 border-primary-300 py-[2px] px-5 font-black rounded-md text-primary-200'>1</p>
                <button className='b__gradient py-2 px-2 rounded-md shadow-md shadow-primary-300'><FaArrowRight className=' text-bg-300' size='14'/></button>
            </div>
            <ModalDoctorInfo isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    )
}

export default page
