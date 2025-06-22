import React from 'react';

function Slide4() {
    const funcionalidades = [
        { title: "Membresías", desc: "Planes tanto físicos, como digitales" },
        { title: "Citas", desc: "Consultas con fisioterapéutas y nutricionistas profesionales" },
        { title: "Progreso", desc: "Seguimiento de cada ejercicio" },
        { title: "Contenido online", desc: "Videotutoriales exclusivos accesibles a todos los miembros" },
        { title: "Rutina", desc: "Control de las rutinas semanales personalizadas" },
        { title: "Sistema de amigos", desc: "Posibilidad de agregar amigos para ver su progreso" },

    ]
    return (
        <div className="flex flex-col bg-white h-full p-8 rounded-3xl items-center justify-center">
            <h1 className="text-4xl font-bold mb-8 text-center -mt-20">Funcionalidades</h1>

            <div className="grid grid-cols-2 gap-4 w-250 mt-5">
                {funcionalidades.map((item, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-2xl shadow-sm">
                        <p className="font-bold">{item.title}</p>
                        <p className="text-sm">{item.desc}</p>
                    </div>
                ))}
                <div className="bg-gray-100 p-4 rounded-2xl shadow-sm col-span-2 mt-10">
                        <p className="font-bold">Gestión de la aplicación web</p>
                        <p className="text-sm">Los administradores y profesores tienen control del contenido </p>
                </div>
            </div>
        </div>
    );
}

export default Slide4;