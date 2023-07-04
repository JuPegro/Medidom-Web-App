import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTooth } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    return (
        <div id='services' className='flex flex-col w-full h-full px-20 py-12 mt-20 relative'>
            <h2 className='text__gradient translate-x-14 text-5xl font-bold'>Servicios</h2>
            <div className='flex mt-16 content-center items-center justify-around'>
                <div className='card__custom'>
                    <div className='relative w-80 h-80 bg-bg-300 shadow-lg shadow-primary-300/70 border-primary-300 rounded-3xl items-center flex justify-center content-center'>
                        <div className='absolute border-2 border-primary-300 top-6 shadow-lg shadow-primary-300/40 bg-bg-300 rounded-full w-20 h-20 flex justify-center items-center'>
                            <FontAwesomeIcon icon={faTooth} beat className='w-10 text-primary-200'/>
                        </div>
                        <div className='flex flex-col mt-28 text-center justify-center items-center content-center mx-5 gap-2'>
                            <h6 className='text-sm font-bold text-text-100 mb-2'>Consultas médicas en línea</h6>
                            <p className='text-xs font-semibold text-text-200 leading-6'>Accede a profesionales de la salud a través de 
                                videoconsultas desde la comodidad de tu hogar. 
                                Obtén diagnósticos, recetas médicas y recomendaciones 
                                sin necesidad de desplazarte.
                            </p>
                            <div className='flex mt-1 font-bold text__gradient'>
                                <a className='text-xs' href='#'>Leer más</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card__custom'>
                    <div className='relative w-80 h-80 bg-bg-300 shadow-lg shadow-primary-300/70 border-primary-300 rounded-3xl items-center flex justify-center content-center'>
                        <div className='absolute border-2 border-primary-300 top-6 shadow-lg shadow-primary-300/40 bg-bg-300 rounded-full w-20 h-20 flex justify-center items-center'>
                            <FontAwesomeIcon icon={faTooth} beat className='w-10 text-primary-200'/>
                        </div>
                        <div className='flex flex-col mt-28 text-center justify-center items-center content-center mx-5 gap-2'>
                            <h6 className='text-sm font-bold text-text-100 mb-2'>Citas presenciales</h6>
                            <p className='text-xs font-semibold text-text-200 leading-6'>Programa citas con médicos especialistas en nuestra 
                                amplia red de centros médicos en toda República Dominicana. Recibe atención personalizada y 
                                seguimiento de tu salud de manera presencial.
                            </p>
                            <div className='flex mt-1 font-bold text__gradient'>
                                <a className='text-xs' href='#'>Leer más</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card__custom'>
                    <div className='relative w-80 h-80 bg-bg-300 shadow-lg shadow-primary-300/70 border-primary-300 rounded-3xl items-center flex justify-center content-center'>
                        <div className='absolute border-2 border-primary-300 top-6 shadow-lg shadow-primary-300/40 bg-bg-300 rounded-full w-20 h-20 flex justify-center items-center'>
                            <FontAwesomeIcon icon={faTooth} beat className='w-10 text-primary-200'/>
                        </div>
                        <div className='flex flex-col mt-28 text-center justify-center items-center content-center mx-5 gap-2'>
                            <h6 className='text-sm font-bold text-text-100 mb-2'>Servicios de laboratorio</h6>
                            <p className='text-xs font-semibold text-text-200 leading-6'>Realiza pruebas de laboratorio y análisis 
                                clínicos en nuestros centros asociados. Obtén resultados precisos y confiables para el diagnóstico 
                                y tratamiento de diversas condiciones médicas.
                            </p>
                            <div className='flex mt-1 font-bold text__gradient'>
                                <a className='text-xs' href='#'>Leer más</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card__custom'>
                    <div className='relative w-80 h-80 bg-bg-300 shadow-lg shadow-primary-300/70 border-primary-300 rounded-3xl items-center flex justify-center content-center'>
                        <div className='absolute border-2 border-primary-300 top-6 shadow-lg shadow-primary-300/40 bg-bg-300 rounded-full w-20 h-20 flex justify-center items-center'>
                            <FontAwesomeIcon icon={faTooth} beat className='w-10 text-primary-200'/>
                        </div>
                        <div className='flex flex-col mt-28 text-center justify-center items-center content-center mx-5 gap-2'>
                            <h6 className='text-sm font-bold text-text-100 mb-2'>Entrega de medicamentos a domicilio</h6>
                            <p className='text-xs font-semibold text-text-200 leading-6'>Olvídate de las largas filas en las farmacias. 
                                MediDom te ofrece la conveniencia de recibir tus medicamentos directamente en tu hogar u oficina, 
                                asegurando un suministro continuo de tus tratamientos.
                            </p>
                            <div className='flex mt-1 font-bold text__gradient'>
                                <a className='text-xs' href='#'>Leer más</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex b__gradient border-3 border-bg-100 flex-col absolute rounded-full translate-x-20 translate-y-96 py-8 px-14 justify-center content-center items-start mt-40 w-10/12'>
                <div className='relative w-full flex flex-col content-center'>
                    <h6 className='text-bg-300 font-medium mb-2 text-2xl'>¡Respuestas a tus preguntas medicas!</h6>
                    <p className='text-bg-300 text-sm font-normal'>¡Envíanos tus preguntas sobre salud! Nuestro equipo de expertos está listo para responder tus inquietudes.</p>
                    <a className='absolute right-0 top-0 shadow-lg shadow-text-100/70 bg-bg-300 px-6 py-3 font-semibold translate-x-2 translate-y-2 rounded-full text-text-100' href="/">ENCUENTRA TU RESPUESTA</a>
                </div>
            </div>
        </div>
    )
}

export default Services
