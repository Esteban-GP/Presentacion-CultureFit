import React from 'react';
import { FaPeopleGroup, FaArrowUpShortWide } from "react-icons/fa6";
import { MdPhonelink } from "react-icons/md";

function Slide7() {
    const reasons =[
                    "Digitalización del sector fitness",
                    "Especialización en fuerza",
                    "Gestión centralizada",
                    "Accesibilidad remota"
                ]
    return (
<div className="bg-white h-full p-8 rounded-3xl flex flex-col items-center justify-center">
    <h1 className="text-4xl font-bold mb-8 text-center">¿Por qué es necesario?</h1>

    <div className="bg-gray-200 grid grid-cols-2 p-6 w-[60vw] rounded-2xl shadow-sm gap-4">
        <div className="bg-gray-100 grid grid-cols-3 p-4 rounded-2xl shadow-sm items-center gap-4">
            <FaArrowUpShortWide className='text-7xl mx-auto'></FaArrowUpShortWide>
            <p className="montserrat font-semibold text-xl col-span-2">Mercado fitness en auge por mayor conciencia sobre la salud</p>
        </div>
        
        <div className="bg-gray-100 grid grid-cols-3 p-4 rounded-2xl shadow-sm items-center gap-4">
            <MdPhonelink></MdPhonelink>
            <p className="montserrat font-semibold text-xl col-span-2">Necesidad de la digitalización de las empresas de este sector</p>
        </div>
        
        <div className="bg-gray-100 grid grid-cols-3 p-4 rounded-2xl shadow-sm items-center gap-4">
            <MdPhonelink className='text-7xl mx-auto'></MdPhonelink>
            <p className="montserrat font-semibold text-xl col-span-2">Es una aplicación exclusiva del gimnasio y accesible desde cualquier dispositivo</p>
        </div>

        <div className="bg-gray-100 grid grid-cols-3 p-4 rounded-2xl shadow-sm items-center gap-4">
            <FaPeopleGroup className='text-7xl mx-auto'></FaPeopleGroup>
            <p className="montserrat font-semibold text-xl col-span-2">Creación de una comunidad favoreciendo la interaccion social entre sus miembros</p>
        </div>
    </div>
</div>
    );
};

export default Slide7;