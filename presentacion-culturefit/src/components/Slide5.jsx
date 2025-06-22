import React from 'react';

function Slide5() {
    return (
        <div className="bg-white h-full p-8 rounded-3xl flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-8 text-center -mt-20">Diseño</h1>

            <div className="bg-gray-200 grid grid-cols-3 p-6 w-250 rounded-2xl shadow-sm mb-4 gap-4">
                <div className="flex flex-col space-y-4 justify-center mb-3">
                    <div className="h-24 bg-primary rounded-full border-light-primary border 
                    flex justify-center items-center text-white montserrat text-2xl font-semibold">Color Principal</div>
                    <div className="h-24 bg-black rounded-full 
                    flex justify-center items-center text-white montserrat text-2xl font-semibold">Color del texto</div>
                    <div className="h-24 bg-white rounded-full
                    flex justify-center items-center montserrat text-2xl font-semibold">Color de fondo</div>
                </div>

                <div className='col-span-2 grid'>
                    <p className="font-bold flex justify-center items-center text-2xl text-center w-full px-10">Se opta por la claridad y el minimalismo con colores que transmiten energía y fuerza</p>
                    <div className="bg-gray-100 p-4 rounded-2xl shadow-sm flex flex-col items-center justify-center">
                        <p className="montserrat font-bold text-xl">Uso de Montserrat para títulos</p>
                        <p className="poppins text-lg">Y Poppins para el resto de los textos</p>
                    </div>
                </div>
            </div>


        </div>
    );
}


export default Slide5;