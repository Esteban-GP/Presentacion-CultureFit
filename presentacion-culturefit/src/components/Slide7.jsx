import React from 'react';

function Slide7() {
    const reasons =[
                    "Digitalización del sector fitness",
                    "Especialización en fuerza",
                    "Gestión centralizada",
                    "Accesibilidad remota"
                ]
    return (
        <div className="bg-white h-full p-8 rounded-3xl">
            <h1 className="text-4xl font-bold mb-8 text-center">¿Por qué existe?</h1>

            <div className="grid grid-cols-2 gap-4 w-250">
                {reasons.map((item, index) => (
                    <div key={index} className="bg-gray-100 p-4  rounded-2xl shadow-sm">
                        <p className="font-semibold col-span-1">{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slide7;