import React from 'react';

function Slide1() {
    return (
        <div className='flex flex-col bg-white h-full p-4 rounded-3xl items-center text-center justify-center'>
            <img src="./Mark.png" alt="" className='h-25 -mt-20'/>
            <h1 className='text-4xl font-bold pb-10 pt-10'>CultureFit - Proyecto Fin de Ciclo</h1>
            <p className='text-2xl'>Johan Fernando Aponte Valencia</p>
            <p className='text-2xl'>Esteban González Poyet</p>
            <p className='text-2xl'>Borja Moreira Piñeiro</p>
        </div>
    );
};

export default Slide1;