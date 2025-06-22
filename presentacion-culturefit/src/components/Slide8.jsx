import React from 'react';

function Slide6() {
          return (
        <div className="bg-white h-full p-8 rounded-3xl flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-8 text-center">Desarrollo</h1>

            <div className="bg-gray-200 grid p-6 w-250 rounded-2xl shadow-sm mb-4 gap-4">
                <div className="flex flex-col space-y-4 justify-center mb-3">
                    <div className="bg-gray-100 grid grid-cols-3 p-4 rounded-2xl shadow-sm items-center gap-4">
                        <img src="git.png" alt=""  className='h-28 object-contain mx-auto'/>
                        <p className="montserrat font-semibold text-xl col-span-2">Control de versiones realizado con Git <br /> siguiendo el modelo Gitflow</p>
                    </div>
                    <div className="bg-gray-100 grid grid-cols-3 p-4 rounded-2xl shadow-sm items-center gap-4">
                        <img src="notion.png" alt=""  className='h-28 object-contain scale-90 mx-auto'/>
                        <p className="montserrat font-semibold text-xl col-span-2">Documentación de tareas a realizar, reuniones <br /> y plazos de entrega en Notion</p>
                    </div>
                    <div className="bg-gray-100 grid grid-cols-3 p-4 rounded-2xl shadow-sm items-center gap-4">
                        <img src="scrum.png" alt=""  className='h-28 object-contain scale-120 mx-auto'/>
                        <p className="montserrat font-semibold text-xl col-span-2">Metodología ágil con reuniones tipo Scrum</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Slide6;