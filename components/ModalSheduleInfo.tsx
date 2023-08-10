'use client'
import { FC , FormEvent } from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from 'axios';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalSheduleInfo: FC<ModalProps> = ({ isOpen, onClose}) => {

    if (!isOpen) {
        return null
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const doctorIdValue = formData.get("doctorId");
        const doctorIdInt = parseInt(doctorIdValue as string);
        try {
            const res = await axios.post(
                'https://medi-dom-api.up.railway.app/api/v1/schedule',
                {
                    doctorId: doctorIdInt,
                    dayOfWeek: formData.get("dayOfWeek"),
                    startTime: formData.get("startTime"),
                    endTime: formData.get("endTime"),
                },{
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJqZG9lQGRvbWFpbi5jb20iLCJpYXQiOjE2OTE2Mjc0NjcsImV4cCI6MTY5MTcxMzg2N30.hYD0JMUxoVVwmXwzhEE-uCO5hxzQBA4svEc7BBYsx64', // Replace with your actual token
                        'Content-Type': 'application/json'
                    }
                },
            );
    
            console.log('API Response:', res.data)
            console.log(res.data);
            onClose();
            window.location.reload();
        } catch (error) {
            console.log('API Error:', error);
            if (axios.isAxiosError(error)) {
                console.log('Error Response:', error.response?.data);
            }
        }
    }

    return (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white w-8/12 h-[46rem] p-6 rounded-2xl border-2 border-primary-300 shadow-lg">
                <span onClick={onClose} className="absolute text-primary-100 top-3 right-3 cursor-pointer">
                    <AiOutlineCloseCircle className='text-primary-300 icon' size='24'/>
                </span>
                <h3 className='flex w-full mt-2 text-text-100 justify-center font-bold text-3xl'>Nuevo Horario</h3>
                <form onSubmit={handleSubmit} className="flex justify-between items-center relative mx-24 mt-20">
                    <div className=" flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="doctorId">Doctor</label>
                            <input className='border outline-none w-96 text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="number" name='doctorId' id='doctorId' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="dayOfWeek">Día</label>
                            <input className='border outline-none w-96 text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="text" name='dayOfWeek' id='dayOfWeek' />
                        </div>
                    </div>
                    <div className=" flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="startTime">Hora de Inicio</label>
                            <input className='border outline-none w-96 text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="datetime-local" name='startTime' id='startTime' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="endTime">Hora de culminación</label>
                            <input className='border outline-none w-96 text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="datetime-local" name='endTime' id='endTime' />
                        </div>
                    </div>
                    <button className=' absolute bottom-0 right-0 translate-y-14 text-sm b__gradient py-2 px-3 text-bg-300 rounded-md shadow-lg shadow-primary-300'>Guardar</button>
                </form>
            </div>
        </div>
    );
};

export default ModalSheduleInfo;