import React, { useState } from "react";
import { finalSlide, slides } from "../data";

import NextIcon from "./NextIcon";
import PreviousIcon from "./PreviousIcon";

export default function Slide() {
  const [counter, setCounter] = useState<number>(0);
  const { primary, secondary } = slides[counter] || finalSlide;

  const previousSlide = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const nextSlide = () => {
    if (counter < slides.length) {
      setCounter(counter + 1);
    }
  };

  return (
    <main className="flex flex-row w-full">
      <PreviousIcon onClick={previousSlide} />
      <div className="flex flex-col items-center justify-center text-left w-full px-5 md:px-32 lg:px-64">
        <Title>{primary}</Title>
        <Title isFancy>{secondary}</Title>
      </div>
      <NextIcon onClick={nextSlide} />
    </main>
  );
}

interface Props {
  isFancy?: boolean;
}

const Title: React.FC<Props> = ({ isFancy, children }) => (
  <h1
    className={`break-all text-3xl md:text-7xl lg:text-8xl font-bold text-left w-full select-none text-gray-100 py-0 pb-2 md:py-2 ${
      isFancy && "skittles"
    }`}
  >
    {children}
  </h1>
);
