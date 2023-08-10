"use client"
import React, { useEffect } from 'react';

const page = () => {

  useEffect(() => {
    
    const userToken = localStorage.getItem("token");
    const userID = localStorage.getItem("userID");

    if(!userID || !userToken){
      localStorage.clear();
      window.location.href = '/login';
      //router.push("/login");
    }


  }, []);
  
  return (
    <div className='flex gap-2 text-4xl mt-10 mx-20'>
      <h2 className='text__gradient font-black'>Bienvenido</h2><p className='text-text-200 font-semibold'>JuPegro._</p>
    </div>
  )
}

export default page
