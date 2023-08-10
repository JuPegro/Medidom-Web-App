'use client'
import React, { useState, useEffect  } from 'react';
import { BiPlus, BiSearch, BiSolidPhone, BiSolidEdit } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { BsCalendarWeek } from "react-icons/bs";
import axios, { AxiosResponse } from 'axios';
import ModalSheduleInfo from '@/components/ModalSheduleInfo';
import { TbBrandDaysCounter } from "react-icons/tb";
import { LuTimerOff } from "react-icons/lu";


/*const translateRole = (role: string): string => {
    const translations: Record<string, string> = {
        Patient: 'Paciente',
        Doctor: 'Doctor',
        Nurse: 'Enfermero',
    
    };
    return translations[role] || role;
};*/

const page = () => {

    const [pagina, setPagina] = useState(1);
    const [porPagina] = useState(10);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDoctorModalOpen, setIsDoctorModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<any | null>(null);

    const handleOpenModal = (user: any) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    const handleOpenDoctorModal = () => {
        setIsDoctorModalOpen(true);
    };
    
    const handleCloseModal = () => {
        setSelectedUser(null);
        setIsModalOpen(false);
        setIsDoctorModalOpen(false);
    };

    const [shedulerData, setSheduleData] = useState<any[]>([]);

    useEffect(() => {
        const getResquestWithAuthorization = async () => {
            try {
                const response: AxiosResponse<any> = await axios.get('https://medi-dom-api.up.railway.app/api/v1/schedule', {
                    headers: {
                        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJqZG9lQGRvbWFpbi5jb20iLCJpYXQiOjE2OTE2Mjc0NjcsImV4cCI6MTY5MTcxMzg2N30.hYD0JMUxoVVwmXwzhEE-uCO5hxzQBA4svEc7BBYsx64`,
                }
            });
                console.log('API Response:', response.data);
                setSheduleData(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error('API Error:', error);
            }
        };
    
        getResquestWithAuthorization();
    }, []);

    const indiceInicio = (pagina - 1) * porPagina;
    const indiceFin = indiceInicio + porPagina;

    return (
        <div className="mx-20 w-11/12">
            <div className='flex gap-2 text-4xl mt-10'>
                <h2 className='text__gradient font-black'>Horarios</h2><p className='text-text-200 font-semibold'></p>
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
                    <button onClick={handleOpenDoctorModal} className='b__gradient rounded-full shadow-lg shadow-primary-300'><BiPlus className=' text-bg-300 font-bold w-[2.4rem]' size='24'/></button>
                </div>
            </div>
            <div className="grid grid-cols-5 place-content-center gap-x-[1px] mt-24 gap-y-[4.8rem] ">
            {shedulerData.slice(indiceInicio, indiceFin).map((user) => (
                <div key={user.id} className="flex border relative justify-center shadow-lg shadow-primary-300 flex-col items-center border-primary-300 w-[14.5rem] h-56 rounded-2xl">
                    <div className="flex top-1 right-3 absolute">
                    </div>
                    <div className="flex flex-col justify-between items-center relative mt-1 mb-4 gap-3">
                        <p className=' text-text-100 flex justify-center text-center items-center font-bold text-xl'>{user.doctor.firstName} {user.doctor.lastName}</p>
                        <div className="flex gap-3 flex-col justify-center text-center items-center">
                            <p className='text-sm py-1 text-bg-300 w-28 bg-primary-100 rounded-lg'>{user && user.doctor && user.doctor.doctorType ? user.doctor.doctorType.type : "General"}</p>
                            <p className=' text-text-200 font-normal text-xs'>{user.doctor.doctorType.description}</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center flex-col gap-2">
                        <div className="flex text-xs gap-2 text-text-100">
                            <BsCalendarWeek className=' text-text-100' size='14'/>
                            <p>{user.dayOfWeek}</p>
                        </div>
                        <div className="flex text-xs gap-2 text-text-100">
                            <TbBrandDaysCounter className=' text-text-100' size='14'/>
                            <p>{user.startTime}</p>
                        </div>
                        <div className="flex text-xs gap-2 text-text-100">
                            <LuTimerOff className=' text-text-100' size='14'/>
                            <p>{user.endTime}</p>
                        </div>
                    </div>
                </div>
            ))}                   
            <div className="absolute flex items-center bottom-3 gap-3 transform -translate-x-1/2 left-1/2">
                <button
                    className='b__gradient py-2 px-2 rounded-md shadow-md shadow-primary-300'
                    onClick={() => setPagina((prevPagina) => Math.max(prevPagina - 1, 1))}
                >
                    <FaArrowLeft className='text-bg-300' size='14'/>
                </button>
                <p className='bg-bg-300 border shadow-md shadow-primary-300 border-primary-300 py-[2px] px-5 font-black rounded-md text-primary-200'>
                    {pagina}
                </p>
                <button
                    className='b__gradient py-2 px-2 rounded-md shadow-md shadow-primary-300'
                    onClick={() => setPagina((prevPagina) => Math.min(prevPagina + 1, Math.ceil(shedulerData.length / porPagina)))}
                >
                <FaArrowRight className='text-bg-300' size='14'/>
                </button>
            </div>
            </div>
            <ModalSheduleInfo isOpen={isDoctorModalOpen} onClose={handleCloseModal} />
        </div>
    )
}

export default page
