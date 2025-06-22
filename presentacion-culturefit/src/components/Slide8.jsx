import React from 'react';
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";

function Slide8() {
          return (
        <div className="bg-white h-full p-8 rounded-3xl flex flex-col items-center justify-center">
    <h1 className="text-4xl font-bold mb-8 text-center">Viabilidad Económica</h1>

    <div className="bg-gray-200 grid grid-cols-2 p-6 w-[70vw] rounded-2xl shadow-sm gap-6">
        
        <div className="bg-gray-100 p-6 rounded-2xl shadow-sm flex flex-col items-center">
            <GiPayMoney className='h-20 mb-4 text-7xl'/>
            <p className="montserrat font-bold text-xl">Inversión Inicial</p>
            <p className="text-3xl font-bold text-red-700">110.000€</p>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-2xl shadow-sm flex flex-col items-center">
            <GiReceiveMoney alt="" className='h-20 mb-4 text-7xl '/>
            <p className="montserrat font-bold text-xl">Beneficio Mensual</p>
            <p className="text-3xl font-bold text-green-600">1.340€</p>
        </div>
        <div className="col-span-2 flex flex-col items-center bg-gray-100 p-4 rounded-2xl shadow-sm">
            <p className="montserrat font-bold text-center mb-2">Coste total de la aplicación web</p>
            <p className="text-3xl font-bold">7.200 €</p>
        </div>
        <div className="col-span-2 bg-gray-100 p-4 rounded-2xl shadow-sm">
            <p className="montserrat font-bold text-center mb-2">Fuentes de Ingreso</p>
            <div className="flex justify-between px-8">
                <div className="text-center">
                    <p className="font-bold text-lg">60%</p>
                    <p className="text-lg">Membresías</p>
                </div>
                <div className="text-center">
                    <p className="font-bold text-lg">25%</p>
                    <p className="text-lg">Contenido</p>
                </div>
                <div className="text-center">
                    <p className="font-bold text-lg">15%</p>
                    <p className="text-lg">Servicios</p>
                </div>
            </div>
        </div>
    </div>
</div>
    );
};

export default Slide8;