import React from "react";
import { Typewriter } from "react-simple-typewriter";

export const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2 text-2xl">
          YOUR PARTNER FOR LIFE
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow With data.
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Your solutions for{" "}
            <Typewriter
              words={["POS", "Digital Marketing", "CC Processing"]}
              loop={true}
              cursor={true}
            />
          </p>
        </div>
      </div>
    </div>
  );
};
