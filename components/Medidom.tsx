import React from 'react'
import Image from 'next/image'

const Medidom = () => {
    return (
        <div className="home">
        <div className="home__content">
            <div className="info__text">
                <h1>Cuidando tu salud, <span>en cada rincón.</span></h1>
                <p>Bienvenido a MediDom, líder en servicios médicos en República Dominicana.</p>
                <p>Acceso fácil y rápido a atención médica de calidad en todo el país.</p>
                <p>Consultas en línea y citas presenciales. Tu salud es nuestra prioridad.</p>
            </div>
            <div className="btn__group">
                <a className="linear" href="#">Try for free</a>
                <a className="outline" href="#">Login</a>
            </div>
        </div>
        <div className="img__reference">
            <Image src='/Home.png' alt='logo' width={700} height={700} className='doctor__img'/>
            <div className="circle__blur"></div>
            <div className="circle__tooth">
                <i className='bx bx-injection'></i>
            </div>
            <div className="circle__heart">
                <i className='bx bxs-heart'></i>
            </div>
            <div className="info__medidom">
                <div className="hospital__count">
                    <i className='bx bx-plus-medical' ></i>
                    <h4>900</h4>
                    <p>Hospitales</p>
                </div>
                <div className="hospital__count">
                    <i className='bx bx-plus-medical' ></i>
                    <h4>20000+</h4>
                    <p>Pacientes</p>
                </div>
                <div className="hospital__count">
                    <i className='bx bx-plus-medical' ></i>
                    <h4>850</h4>
                    <p>Doctores</p>
                </div>
                <div className="hospital__count">
                    <i className='bx bx-plus-medical' ></i>
                    <h4>200</h4>
                    <p>Certificados</p>
                </div>
            </div>
        </div>
        <div className="social__network">
            <a href="#facebook"><i className='bx bxl-facebook-circle' ></i></a>
            <a href="#instagram"><i className='bx bxl-instagram' ></i></a>
            <a href="#twitter"><i className='bx bxl-twitter' ></i></a>
        </div>
    </div>
    )
}

export default Medidom
