'use client'
import { FC, useState, useEffect, FormEvent } from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

type ModalDoctorInfoProps = {
    isOpen: boolean;
    onClose: () => void;
    selectedUser: any | null;
};

const ModalUserEdit: React.FC<ModalDoctorInfoProps> = ({ isOpen, onClose, selectedUser }) => {
    if (!isOpen || !selectedUser) {
        return null;
    }
    
    const router = useRouter();
    const [error, setError] = useState();
    const [updatedUserData, setUpdatedUserData] = useState({});
    const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJqZG9lQGRvbWFpbi5jb20iLCJpYXQiOjE2OTE1MzU2MDgsImV4cCI6MTY5MTYyMjAwOH0.pcV1b899nC2uhUf50Adl-c2RIpPV1G9v5F99-jlNvZY'; // Reemplaza con tu token de autenticación
        const headers = {
            'Authorization': `Bearer ${accessToken}`
        };
    
        try {
            const response = await axios.patch(`https://medi-dom-api.up.railway.app/api/v1/user/${selectedUser.id}`, updatedUserData, {
                headers: headers
            });
            console.log('Usuario actualizado:', response.data);
            onClose();
            router.refresh();
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
                <h3 className='flex w-full mt-2 text-text-100 justify-center font-bold text-3xl'>Editar Usuario</h3>
                <form onSubmit={handleUpdate} className="flex justify-between items-center relative mx-24 mt-16">
                    <div className=" flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="profilePicture">Foto</label>
                            <input className='border outline-none w-96 text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="text" name='profilePicture' id='profilePicture' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="email">Correo</label>
                            <input defaultValue={selectedUser.email} onChange={(e) => setUpdatedUserData({ ...updatedUserData, email: e.target.value })} className='border outline-none w-96 text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="mail" name='email' id='email' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="phone">Télefono</label>
                            <input onChange={(e) => setUpdatedUserData({ ...updatedUserData, phone: e.target.value })} defaultValue={selectedUser.phone} className='border outline-none w-96 text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="number" name='phone' id='phone' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="birthDate">Fecha de Nacimiento</label>
                            <input onChange={(e) => setUpdatedUserData({ ...updatedUserData, birthDate: e.target.value })} defaultValue={selectedUser.birthDate} className='border outline-none w-96 text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="date" name='birthDate' id='birthDate' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="roleId">Rol</label>
                            <select defaultValue={selectedUser.role.id} name="role" id="role" className='border outline-none w-96 text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg'
                            onChange={(e) =>
                                setUpdatedUserData({
                                    ...updatedUserData,
                                    roleId: e.target.value, // Actualiza el ID del rol seleccionado
                                })
                            }>
                                <option selected={selectedUser.role.id === 1} value="1">Administrador</option>
                                <option selected={selectedUser.role.id === 2} value="2">Doctor</option>
                                <option selected={selectedUser.role.id === 3} value="3">Paciente</option>
                            </select>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="firstName">Nombres</label>
                            <input onChange={(e) => setUpdatedUserData({ ...updatedUserData, firstName: e.target.value })} defaultValue={selectedUser.firstName} className='border outline-none w-96 text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="text" name='firstName' id='firstName' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="lastName">Apellido</label>
                            <input onChange={(e) => setUpdatedUserData({ ...updatedUserData, lastName: e.target.value })} defaultValue={selectedUser.lastName} className='border outline-none w-96 text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="text" name='lastName' id='lastName' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="citizenId">Cédula</label>
                            <input onChange={(e) => setUpdatedUserData({ ...updatedUserData, citizenId: e.target.value })} defaultValue={selectedUser.citizenId} className='border outline-none w-96 text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="number" name='citizenId' id='citizenId' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="password">Contraseña</label>
                            <input onChange={(e) => setUpdatedUserData({ ...updatedUserData, password: e.target.value })} defaultValue={selectedUser.password} className='border outline-none w-96 text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="password" name='password' id='password' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="doctorTypeId">Estado</label>
                            <select defaultValue={selectedUser.role.isActive} name="role" id="role" className='border outline-none w-96 text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg'
                            onChange={(e) =>
                                setUpdatedUserData({
                                    ...updatedUserData,
                                    roleId: e.target.value, // Actualiza el ID del rol seleccionado
                                })
                            }>
                                <option selected={selectedUser.role.isActive === true} value="1">Activo</option>
                                <option selected={selectedUser.role.isActive === false} value="2">Desactivado</option>
                            </select>
                        </div>
                    </div>
                    <button type='submit' className=' absolute bottom-0 right-0 translate-y-14 text-sm b__gradient py-2 px-3 text-bg-300 rounded-md shadow-lg shadow-primary-300'>Guardar</button>
                </form>
            </div>
        </div>
    );
};

export default ModalUserEdit;