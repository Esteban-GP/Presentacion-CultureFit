import React from 'react';

function Slide1() {
    return (
<div className="flex flex-col bg-white h-full p-6 rounded-3xl items-center text-center justify-center mx-auto w-full">
  <img
    src="./Mark.png"
    alt="Logo"
    className="h-28 sm:h-32 md:h-36 mt-[-4rem] sm:mt-[-5rem]"
  />
  <h1 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold pt-10 pb-6">
    CultureFit - Proyecto Fin de Ciclo
  </h1>
  <p className="text-[clamp(1rem,2.5vw,1.5rem)]">Johan Fernando Aponte Valencia</p>
  <p className="text-[clamp(1rem,2.5vw,1.5rem)]">Esteban González Poyet</p>
  <p className="text-[clamp(1rem,2.5vw,1.5rem)]">Borja Moreira Piñeiro</p>
</div>
    );
};

export default Slide1;