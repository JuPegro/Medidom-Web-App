"use client"
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const page = () => {

  const router = useRouter();
  const userID = localStorage.getItem('userID');
  const username = localStorage.getItem('userData');

  useEffect(() => {
    // Redirigir a la página de inicio de sesión si no hay un userID en el localStorage
    if (!userID) {
      router.push('/login');
    }
  }, [userID, router]);
  
  return (
    <div className='flex gap-2 text-4xl mt-10 mx-20'>
      <h2 className='text__gradient font-black'>Bienvenido,{userID}</h2><p className='text-text-200 font-semibold'>JuPegro._{username}</p>
    </div>
  )
}

export default page
