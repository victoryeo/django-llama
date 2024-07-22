import React from "react";
import { images } from "../../utils/carousel/constants";
import left from "../../../../public/left.svg";
import right from "../../../../public/right.svg";
import Image from "next/image";

type Props = {
  activeImage: any;
  clickNext: any;
  clickPrev: any;
};

const Description = ({ activeImage, clickNext, clickPrev }: Props) => {
  return (
    <div className="grid place-items-start w-full bg-[#e7dfd9] relative md:rounded-tr-3xl md:rounded-br-3xl">
      <div className="uppercase text-sm absolute right-4 top-2 underline-offset-4 underline">
        
      </div>
      {images.map((elem, idx) => (
        <div
          key={idx}
          className={`${idx === activeImage
              ? "block w-full h-full md:h-[50vh] py-10 md:px-20 px-10 text-left"
              : "hidden"
            }`}
        >
          
          <div className="py-16 text-5xl font-extrabold">
            {elem.title}
          </div>
          <div className="leading-relaxed font-medium text-base tracking-wide h-60 md:h-40 italic text-gray-600">
            {" "}
            {elem.desc}
          </div>

          <button className="bg-[#ecae7e] text-white uppercase px-4 py-2 rounded-md my-10">
            order now
          </button>
          <div className="absolute md:bottom-1 bottom-10 right-10 md:right-0 w-full flex justify-center items-center">
            <div
              className="absolute bottom-2 right-10 cursor-pointer"
              onClick={clickPrev}
            >
              <Image src={left} alt="" />
            </div>

            <div
              className="absolute bottom-2 right-2 cursor-pointer"
              onClick={clickNext}
            >
              <Image src={right} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;