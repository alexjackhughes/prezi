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
      <div className="flex flex-col items-center justify-center flex-1 text-left w-full px-5 md:px-32 lg:px-64">
        <Title isFancy>{primary}</Title>
        <Title>{secondary}</Title>
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
    className={`text-6xl md:text-8xl font-bold text-left w-full select-none text-gray-100  ${
      isFancy && "skittles py-1"
    }`}
  >
    {children}
  </h1>
);
