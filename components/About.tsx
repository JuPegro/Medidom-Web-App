import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faClock } from '@fortawesome/free-solid-svg-icons'


const About = () => {
    return (
        <div id='about' className='w-full h-full px-20 pt-48 pb-12 flex justify-between content-center items-center relative mt-56'>
            <div className='relative'>
                <div className='flex relative items-center content-center translate-x-10'>
                    <Image src='/Doctor.png' alt='dotor' width={540} height={530} className='doctor__custom  -translate-y-8 translate-x-3' priority/>
                    <Image src='/polygon.png' alt='polygon' width={500} height={510} className='absolute -z-10' priority/>
                </div>
                <div className='absolute shadow-lg shadow-primary-300/50 top-0 right-0 translate-x-36 translate-y-32 rounded-2xl bg-bg-300 w-60 h-24 flex justify-evenly content-center items-center'>
                    <FontAwesomeIcon icon={faCircleCheck} className='w-14 text-primary-200'/>
                    <div className='flex flex-col justify-center items-center content-center'>
                        <h4 className='text-text-100 text-3xl font-extrabold'>100%</h4>
                        <p className='text-text-100 text-base font-medium'>Profesionales</p>
                    </div>
                </div>
                <div className='absolute shadow-lg shadow-primary-300/50 bottom-0 left-0 rounded-2xl translate-x-0 translate-y-2 bg-bg-300 w-72 h-24 flex justify-evenly content-center items-center'>
                    <FontAwesomeIcon icon={faClock} className='w-14 text-primary-200'/>
                    <div className='flex flex-col justify-center items-center content-center'>
                        <h4 className='text-text-100 text-3xl font-extrabold'>Horarios</h4>
                        <p className='text-text-100 text-base font-medium'>Muy flexibles</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-2/4 justify-start items-start -translate-y-20 -translate-x-12 content-start gap-7'>
                <h6 className='text-xl text-primary-100 font-bold text__gradient'>SOBRE NOSOTROS...</h6>
                <h2 className='text-5xl font-bold text-text-100'>¿Qué es MediDom?</h2>
                <p className='text-text-100 text-xl font-medium leading-loose'>En MediDom, nos enorgullece ser la plataforma líder en servicios 
                    médicos en República Dominicana. Nuestro compromiso es brindarte acceso fácil 
                    y rápido a atención médica de calidad en todo el país.
                </p>
                <p className='text-text-100 text-xl font-medium leading-loose'>Ya no tendrás que lidiar con largas esperas en las salas de espera 
                    o desplazarte largas distancias para recibir atención médica.
                    </p>
                <p className='text-primary-100 text-xl font-bold text__gradient mt-2'>"¡Bienvenido a MediDom, donde tu salud está en buenas manos!"</p>
            </div>
        </div>
    )
}

export default About
