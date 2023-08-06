
import { FC } from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalDoctorInfo: FC<ModalProps> = ({ isOpen, onClose }) => {

    if (!isOpen) return null;

    return (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white w-8/12 h-[50rem] p-6 rounded-2xl border-2 border-primary-300 shadow-lg">
                
                <span onClick={onClose} className="absolute text-primary-100 top-3 right-3 cursor-pointer">
                    <AiOutlineCloseCircle className='text-primary-300 icon' size='24'/>
                </span>
                <h3 className='flex w-full mt-2 text-text-100 justify-center font-bold text-3xl'>Nuevo Doctor</h3>
                <form className="flex justify-between items-center relative mx-24 mt-20">
                    <div className=" flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="file">Foto</label>
                            <input className='border outline-none text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg custom-file' type="file" name='file' id='file' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="mail">Correo</label>
                            <input className='border outline-none text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="mail" name='mail' id='mail' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="phone">Télefono</label>
                            <input className='border outline-none text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="number" name='phone' id='phone' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="date">Fecha de Nacimiento</label>
                            <input className='border outline-none text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="date" name='date' id='date' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="date">Hospital</label>
                            <input className='border outline-none text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="date" name='date' id='date' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="role">Hospital</label>
                            <input className='border outline-none text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="text" name='role' id='role' />
                        </div>
                    </div>
                    <div className=" flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="file">Foto</label>
                            <input className='border outline-none text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="file" name='file' id='file' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="mail">Correo</label>
                            <input className='border outline-none text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="mail" name='mail' id='mail' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="phone">Télefono</label>
                            <input className='border outline-none text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="number" name='phone' id='phone' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="date">Fecha de Nacimiento</label>
                            <input className='border outline-none text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="date" name='date' id='date' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="date">Hospital</label>
                            <input className='border outline-none text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="date" name='date' id='date' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-primary-100 font-medium' htmlFor="role">Hospital</label>
                            <input className='border outline-none text-primary-200 shadow-md shadow-primary-300 border-primary-300 py-2 px-4 rounded-lg' type="text" name='role' id='role' />
                        </div>
                    </div>
                    <button className=' absolute bottom-0 right-0 translate-y-14 text-sm b__gradient py-1 px-3 text-bg-300 rounded-md shadow-lg shadow-primary-300'>Guardar</button>
                </form>
            </div>
        </div>
    );
};

export default ModalDoctorInfo;








