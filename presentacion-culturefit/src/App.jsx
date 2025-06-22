import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

import Slide1 from "./components/Slide1";
import Slide2 from "./components/Slide2";
import Slide3 from "./components/Slide3";
import Slide4 from "./components/Slide4";
import Slide5 from "./components/Slide5";
import Slide6 from "./components/Slide6";
import Slide7 from "./components/Slide7";

const slides = [
  { id: 1, Component: Slide1 },
  { id: 2, Component: Slide2 },
  { id: 3, Component: Slide3 },
  { id: 4, Component: Slide4 },
  { id: 5, Component: Slide5 },
  { id: 6, Component: Slide6 },
  { id: 7, Component: Slide7 },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: false,
      initial: 0,
      slides: {
        perView: 1,
        spacing: 0, // o un valor menor si necesitas espacio
        origin: 'center',
      },
      widthOrHeight: 7,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    }
  );

  return (
    <div className="h-screen overflow-hidden flex flex-col items-center justify-center bg-gradient-to-r from-orange-400 to-orange-600 relative">
      <div className="flex text-white mb-4 -mt-5 pb-5 text-5xl font-bold montserrat items-center"><img src="./CultureFitLogoBlanco.png" alt="e"  className="h-11 w-14 me-2"/>CultureFit</div>
      <div ref={sliderRef} className="keen-slider ">
        {slides.map(({ id, Component }) => (
          <div key={id} className="keen-slider__slide rounded-2xl" style={{ width: '160px' }}>
            <div className="w-[90vw] h-180 mx-auto overflow-hidden">
              <Component />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          instanceRef.current?.prev();
        }}
        className="absolute left-2 top-4/7 -translate-y-1/2 text-primary bg-white shadow-xl font-semibold rounded-full text-xl h-11 w-11 z-10"
      >
        <IoChevronBackOutline className="mx-auto" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          instanceRef.current?.next();
        }}
        className="absolute right-2 top-4/7 -translate-y-1/2 text-primary bg-white shadow-xl font-semibold rounded-full text-xl h-11 w-11 z-10"
      >
        <IoChevronForwardOutline className="mx-auto" />
      </button>
    </div>
  );
}

export default App;
