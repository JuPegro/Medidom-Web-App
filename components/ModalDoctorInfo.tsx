'use client'
import { FC , FormEvent, useEffect } from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalDoctorInfo: FC<ModalProps> = ({ isOpen, onClose}) => {

    if (!isOpen) {
        return null
    }

    const userToken = localStorage.getItem("token");
    const userID = localStorage.getItem("userID");

    useEffect(() => {
    
        if(!userID || !userToken){
            localStorage.clear();
            window.location.href = '/login';
          //router.push("/login");
        }
    
    
    }, []);

    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        console.log(formData)

        try {
            const res = await axios.post(
                'https://medi-dom-api.up.railway.app/api/v1/user',
                {
                    firstName: formData.get("firstName"),
                    lastName: formData.get("lastName"),
                    citizenId: formData.get("citizenId"),
                    birthDate: formData.get("birthDate"),
                    phone: formData.get("phone"),
                    email: formData.get("email"),
                    password: formData.get("password"),
                    profilePicture: formData.get("profilePicture"),
                    roleId: 1,
                    doctorTypeId: 1
                },{
                    headers: {
                        Authorization: `Bearer ${userToken}`, // Replace with your actual token
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
                //setError(error.response?.data.message);
            }
        }
    }

    return (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white w-8/12 h-[46rem] p-6 rounded-2xl border-2 border-primary-300 shadow-lg">
                <span onClick={onClose} className="absolute text-primary-100 top-3 right-3 cursor-pointer">
                    <AiOutlineCloseCircle className='text-primary-300 icon' size='24'/>
                </span>
                <h3 className='flex w-full mt-2 text-text-100 justify-center font-bold text-3xl'>Nuevo Doctor</h3>
                <form onSubmit={handleSubmit} className="flex justify-between items-center relative mx-24 mt-20">
                    <div className=" flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="profilePicture">Foto</label>
                            <input className='border outline-none w-96 text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="text" name='profilePicture' id='profilePicture' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="email">Correo</label>
                            <input className='border outline-none w-96 text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="mail" name='email' id='email' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="phone">Télefono</label>
                            <input className='border outline-none w-96 text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="number" name='phone' id='phone' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="birthDate">Fecha de Nacimiento</label>
                            <input className='border outline-none w-96 text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="date" name='birthDate' id='birthDate' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="roleId">Rol</label>
                            <input className='border outline-none w-96 text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="number" name='roleId' id='roleId' />
                        </div>
                    </div>
                    <div className=" flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="firstName">Nombres</label>
                            <input className='border outline-none w-96 text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="text" name='firstName' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="lastName">Apellido</label>
                            <input className='border outline-none w-96 text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="text" name='lastName' id='lastName' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="citizenId">Cédula</label>
                            <input className='border outline-none w-96 text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="number" name='citizenId' id='citizenId' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="password">Contraseña</label>
                            <input className='border outline-none w-96 text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="password" name='password' id='password' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="doctorTypeId">Doctor</label>
                            <input className='border outline-none w-96 text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="number" name='doctorTypeId' id='doctorTypeId' />
                        </div>
                    </div>
                    <button className=' absolute bottom-0 right-0 translate-y-14 text-sm b__gradient py-2 px-3 text-bg-300 rounded-md shadow-lg shadow-primary-300'>Guardar</button>
                </form>
            </div>
        </div>
    );
};

export default ModalDoctorInfo;