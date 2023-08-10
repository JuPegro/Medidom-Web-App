'use client'
import { FC, useState, useEffect, FormEvent } from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

type ModalDoctorInfoProps = {
    isOpen: boolean;
    onClose: () => void;
    selectedShedule: any | null;
};

const ModalSheduleEdit: React.FC<ModalDoctorInfoProps> = ({ isOpen, onClose, selectedShedule }) => {
    if (!isOpen || !selectedShedule) {
        return null;
    }
    
    const router = useRouter();
    const [error, setError] = useState();
    const [updatedUserData, setUpdatedUserData] = useState({});
    const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJqZG9lQGRvbWFpbi5jb20iLCJpYXQiOjE2OTE2Mjc0NjcsImV4cCI6MTY5MTcxMzg2N30.hYD0JMUxoVVwmXwzhEE-uCO5hxzQBA4svEc7BBYsx64'; // Reemplaza con tu token de autenticación
        const headers = {
            'Authorization': `Bearer ${accessToken}`
        };
    
        try {
            const response = await axios.patch(`https://medi-dom-api.up.railway.app/api/v1/schedule/${selectedShedule.id}`, 
            updatedUserData, 
            {
                headers: headers
            });
            console.log('Usuario actualizado:', response.data);
            onClose();
            window.location.reload();
        } catch (error) {
            console.log('API Error:', error);
            if (axios.isAxiosError(error)) {
                console.log('Error Response:', error.response?.data);
                setError(error.response?.data.message);
            }
        }
    };

    return (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white w-8/12 h-[46rem] p-6 rounded-2xl border-2 border-primary-300 shadow-lg">
                <span onClick={onClose} className="absolute text-primary-100 top-3 right-3 cursor-pointer">
                    <AiOutlineCloseCircle className='text-primary-300 icon' size='24'/>
                </span>
                <h3 className='flex w-full mt-2 text-text-100 justify-center font-bold text-3xl'>Editar Horario</h3>
                <form key={selectedShedule.id} onSubmit={handleUpdate} className="flex justify-between items-center relative mx-24 mt-16">
                    <div className=" flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="">Doctor</label>
                            <input disabled defaultValue={`${selectedShedule.doctor.firstName} ${selectedShedule.doctor.lastName}`} className='border outline-none w-96 text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="text" name='' id='' />
                            <input name='doctorId' defaultValue={1} onChange={(e) => setUpdatedUserData({ ...updatedUserData, doctorId: e.target.value })} type="number" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="dayOfWeek">Día</label>
                            <input onChange={(e) => setUpdatedUserData({ ...updatedUserData, dayOfWeek: e.target.value })} defaultValue={selectedShedule.dayOfWeek} className='border outline-none w-96 text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="text" name='dayOfWeek' id='dayOfWeek' />
                        </div>
                    </div>
                    <div className=" flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="startTime">Hora de Inicio</label>
                            <input onChange={(e) => setUpdatedUserData({ ...updatedUserData, startTime: e.target.value })} defaultValue={selectedShedule.startTime} className='border outline-none w-96 text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="datetime-local" name='startTime' id='startTime' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="lastName">Hora de culminaón</label>
                            <input onChange={(e) => setUpdatedUserData({ ...updatedUserData, endTime: e.target.value })} defaultValue={selectedShedule.endTime} className='border outline-none w-96 text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="datetime-local" name='endTime' id='endTime' />
                        </div>
                    </div>
                    <button type='submit' className=' absolute bottom-0 right-0 translate-y-14 text-sm b__gradient py-2 px-3 text-bg-300 rounded-md shadow-lg shadow-primary-300'>Guardar</button>
                </form>
            </div>
        </div>
    );
};

export default ModalSheduleEdit;