import React from 'react';

function Slide3() {
    return (
        <div className='flex flex-col bg-white h-full p-4 rounded-3xl items-center text-center justify-center overflow-hidden'>
            <h1 className='text-4xl font-bold pb-10 -mt-10'>Herramientas Utilizadas</h1>
            <div className='w-250 grid grid-cols-2  text-xl text-center border-collapse gap-4'>

                <div className='flex flex-col bg-gray-100 rounded-2xl shadow items-center py-5'>
                    <img src="SpringBoot.png" alt="" className='h-20 w-20 object-contain' />
                    <p className='text-2xl font-bold'>SpringBoot</p>
                    <p className='text-lg'>API propia y segura</p>
                </div>
                <div className='flex flex-col bg-gray-100 rounded-2xl shadow items-center py-5'>
                    <img src="React.png" alt="" className='h-20 w-20 object-contain' />
                    <p className='text-2xl font-bold'>React</p>
                    <p className='text-lg w-80'>Frontend hecho usando plugins y librerias de React</p>
                </div>


                <div className='flex flex-col bg-gray-100 rounded-2xl shadow items-center py-5'>
                    <img src="Tailwind.png" alt="" className='w-20 h-20 object-contain' />
                    <p className='text-2xl font-bold'>Tailwind</p>
                    <p className='text-lg'>Interfaz coherente y responsive</p>
                </div>
                <div className='flex flex-col bg-gray-100 rounded-2xl shadow items-center py-5'>
                    <img src="docker.png" alt="" className='h-20 w-20 object-contains' />
                    <p className='text-2xl font-bold'>Docker</p>
                    <p className='text-lg'>Despliegue</p>
                </div>
            </div>
        </div>
    );
};

export default Slide3;