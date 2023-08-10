'use client'
import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import Image from 'next/image'
import { BiSolidUser } from "react-icons/bi";
import { BsCalendar3, BsPhone, BsPersonVcard } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";


const page = () => {

    const [userData, setUserData] = useState<any>({});
    const [descriptionData, SetDescription] = useState<any>({});

    //INFORMACION LOCAL
    const userToken = localStorage.getItem("token") || "";
    const userID = localStorage.getItem("userID") || "";
    const username = localStorage.getItem("Username") || "";


    useEffect(() => {
        if(!userID || !userToken){
            localStorage.clear();
            window.location.href = '/login';
          //router.push("/login");
        }

        const getResquestWithAuthorization = async () => {
            try {
                const response: AxiosResponse<any> = await axios.get(`https://medi-dom-api.up.railway.app/api/v1/user?id=${userID}`, {
                    headers: {
                        Authorization: `Bearer ${userToken}`,
                }
            });
                console.log('API Response:', response.data);
                setUserData(response.data.data);
                console.log(response.data.data);
                SetDescription(response.data.data.role)
            } catch (error) {
                console.error('API Error:', error);
            }
        };
    
        getResquestWithAuthorization();
    }, []);

    const [error, setError] = useState();
    const [updatedUserData, setUpdatedUserData] = useState({});
    const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const accessToken = `${userToken}`; // Reemplaza con tu token de autenticación
        const headers = {
            'Authorization': `Bearer ${accessToken}`
        };
    
        try {
            const response = await axios.patch(`https://medi-dom-api.up.railway.app/api/v1/user/${userID}`, updatedUserData, {
                headers: headers
            });
            console.log('Usuario actualizado:', response.data);
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
        <div className="mx-20 w-11/12">
            <div className='flex gap-2 text-4xl mt-10'>
                <h2 className='text__gradient font-black'>Bienvenido,</h2><p className='text-text-200 font-semibold'>{username}</p>
            </div>
            <div className="flex">
                <div className="flex flex-col items-center top-0 text-center gap-6 justify-center mt-12 h-[45rem] w-[24rem] rounded-xl border-2 shadow-lg shadow-primary-300 border-primary-300">
                    <div className="flex items-center justify-center relative">
                        <Image src='/paisaje.jpg' alt='user__photo' width={280} height={280} className='w-[16rem] h-[16rem] border-2 border-primary-300 p-1 rounded-full'/>
                    </div>
                    <div className="flex flex-col gap-5 text-center text-text-100 py-3">
                        <h3 className='text-3xl font-bold'>{userData.firstName} {userData.lastName}</h3>
                        <p className='text-lg flex items-center justify-center b__gradient py-3 rounded-full text-bg-300'><BiSolidUser className='mr-2' size='20'/>{descriptionData.description}</p>
                    </div>
                    <div className="flex flex-col ml-5 text-center gap-5">
                        <p className='flex text-sm text-text-200 justify-start items-center'><BsCalendar3 className='mr-5' size='22'/>{userData.birthDate}</p>
                        <p className='flex text-sm text-text-200 justify-start items-center'><BsPhone className='mr-5' size='22'/>{userData.phone}</p>
                        <p className='flex text-sm text-text-200 justify-start items-center'><BsPersonVcard className='mr-5' size='22'/>{userData.citizenId}</p>
                        <p className='flex text-sm text-text-200 justify-start items-center'><HiOutlineMail className='mr-5' size='22'/>{userData.email}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5 mx-16 my-12">
                    <h3 className='font-bold text-text-100 text-4xl'>Detalles de la cuenta</h3>
                    <form onSubmit={handleUpdate} className="flex relative items-center gap-20 mt-6">
                        <div className="flex flex-col w-[27.5rem] gap-8">
                            <div className="flex flex-col gap-2">
                                <span className='text-primary-200 font-medium'>Nombres</span>
                                <input defaultValue={userData.firstName} onChange={(e) => setUpdatedUserData({ ...updatedUserData, firstName: e.target.value })} type="text" className='bg-bg-300 border-2 text-sm border-primary-300 shadow text-primary-100 shadow-primary-300 outline-none p-3 rounded-lg'/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className='text-primary-200 font-medium'>Correo</span>
                                <input onChange={(e) => setUpdatedUserData({ ...updatedUserData, email: e.target.value })} defaultValue={userData.email} type="text" className='bg-bg-300 border-2 text-sm border-primary-300 shadow text-primary-100 shadow-primary-300 outline-none p-3 rounded-lg'/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className='text-primary-200 font-medium'>Télefono</span>
                                <input onChange={(e) => setUpdatedUserData({ ...updatedUserData, phone: e.target.value })} defaultValue={userData.phone} type="text" className='bg-bg-300 border-2 text-sm border-primary-300 shadow text-primary-100 shadow-primary-300 outline-none p-3 rounded-lg'/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className='text-primary-200 font-medium'>Fecha de Nacimiento</span>
                                <input onChange={(e) => setUpdatedUserData({ ...updatedUserData, birthDate: e.target.value })} defaultValue={userData.birthDate} type="date" className='bg-bg-300 border-2 text-sm border-primary-300 shadow text-primary-100 shadow-primary-300 outline-none p-3 rounded-lg'/>
                            </div>
                        </div>
                        <div className="flex flex-col w-[27.5rem] gap-8">
                            <div className="flex flex-col gap-2">
                                <span className='text-primary-200 font-medium'>Apellidos</span>
                                <input onChange={(e) => setUpdatedUserData({ ...updatedUserData, lastName: e.target.value })} defaultValue={userData.lastName} type="text" className='bg-bg-300 border-2 text-sm border-primary-300 shadow text-primary-100 shadow-primary-300 outline-none p-3 rounded-lg'/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className='text-primary-200 font-medium'>Cédula</span>
                                <input onChange={(e) => setUpdatedUserData({ ...updatedUserData, citizenId: e.target.value })} defaultValue={userData.citizenId} type="text" className='bg-bg-300 border-2 text-sm border-primary-300 shadow text-primary-100 shadow-primary-300 outline-none p-3 rounded-lg'/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className='text-primary-200 font-medium'>Estado</span>
                                <select defaultValue={userData.isActive} name="isActive" id="isActive" className='bg-bg-300 border-2 text-sm border-primary-300 shadow text-primary-100 shadow-primary-300 outline-none p-3 rounded-lg'
                                onChange={(e) =>
                                    setUpdatedUserData({
                                        ...updatedUserData,
                                        roleId: e.target.value, // Actualiza el ID del rol seleccionado
                                    })
                                }>
                                    <option selected={userData.isActive === true} value="1">Activo</option>
                                    <option selected={userData.isActive === false} value="2">Desactivado</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className='text-primary-200 font-medium'>Contraseña</span>
                                <input onChange={(e) => setUpdatedUserData({ ...updatedUserData, password: e.target.value })} defaultValue={userData.password} type="password" name='text' className='bg-bg-300 border-2 text-sm border-primary-300 shadow text-primary-100 shadow-primary-300 outline-none p-3 rounded-lg'/>
                            </div>
                        </div>
                        <button type='submit' className='absolute right-0 bottom-0 rounded-xl shadow-lg text-bg-300 shadow-primary-300 translate-y-20 tra b__gradient py-2 px-3'>Guardar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default page
