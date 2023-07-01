import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate, faHeartPulse, faHospital, faHospitalUser, faTooth, faUserDoctor } from '@fortawesome/free-solid-svg-icons'


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
                <FontAwesomeIcon icon={faTooth} beat className='tooth'/>
            </div>
            <div className="circle__heart">
                <FontAwesomeIcon icon={faHeartPulse} beatFade className='heart' />
            </div>
            <div className="info__medidom">
                <div className="hospital__count">
                    <FontAwesomeIcon icon={faHospital} className='icon'/>
                    <h4>900</h4>
                    <p>Hospitales</p>
                </div>
                <div className="hospital__count">
                    <FontAwesomeIcon icon={faHospitalUser} className='icon'/>
                    <h4>20000+</h4>
                    <p>Pacientes</p>
                </div>
                <div className="hospital__count">
                    <FontAwesomeIcon icon={faUserDoctor} className='icon'/>
                    <h4>850</h4>
                    <p>Doctores</p>
                </div>
                <div className="hospital__count">
                    <FontAwesomeIcon icon={faCertificate} className='icon'/>
                    <h4>200</h4>
                    <p>Certificados</p>
                </div>
            </div>
        </div>
        <div className="social__network">
            <a href="#facebook"><FontAwesomeIcon icon={faCertificate} className='icon'/></a>
            <a href="#instagram"><FontAwesomeIcon icon={faCertificate} className='icon'/></a>
            <a href="#twitter"><FontAwesomeIcon icon={faCertificate} className='icon'/></a>
        </div>
    </div>
    )
}

export default Medidom
