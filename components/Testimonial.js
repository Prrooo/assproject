// components/Testimonial.js
import React, { createRef, useState } from 'react';
import Image from 'next/image'
import profite from '../public/profile.png'

const Testimonial = ({ testimonial }) => {

  let [currentIndex,setCurrentIndex]=useState(0);

  const preSlide=()=>{
    const newIndex=currentIndex?currentIndex=0:currentIndex=1;
    setCurrentIndex(newIndex);
  }

  return (
    <div className="bg-white opacity-90 text-black flex justify-between items-center px-24 py-24">
      <button onClick={preSlide} className=" bg-gray-400 h-[25px] w-[25px] rounded-full"><i class="ri-arrow-left-s-line"></i></button>
      <div className="flex flex-col items-center">
        <div className="font-bold text-[30px] w-[800px] pb-[25px] text-center">
          {testimonial.text[currentIndex]}
        </div>
        <div className="flex gap-[10px]">
          <Image src={profite} alt='profile pic' className="rounded-full w-[50px]"/>
          <div className="flex flex-col">
            <p>{testimonial.reviewer_name}</p>
            <p>{testimonial.reviewer_designation}</p>
          </div>
        </div>
      </div>
      <button onClick={preSlide} className="h-[25px] w-[25px] rounded-full bg-gray-400"><i class="ri-arrow-right-s-line"></i></button>
    </div>
  );
};

export default Testimonial;
