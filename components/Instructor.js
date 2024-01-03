// components/Instructor.js
import React from 'react';
import Image from 'next/image'
import pic from '../public/pic.png'

const Instructor = ({ instructor ,course}) => {
  return (
    <div className="bg-gradient-to-r from-black to-white h-[450px] w-full relative">
      <Image
      src={pic}
      alt="Landscape picture"
      className="w-full h-full absolute object-cover object-top mix-blend-overlay"/>
      <div className="h-auto w-[50vw] absolute text-white top-[200px] pl-24">
        <h2 className="text-[22px] pb-[6px]">{instructor.name}</h2>
        <p className="text-5xl">{course.title}</p> 
      </div> 
    </div>
  );
};

export default Instructor;
