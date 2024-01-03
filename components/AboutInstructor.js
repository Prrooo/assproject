// components/AboutInstructor.js
import React from 'react';
import Image from 'next/image'
import profite from '../public/profile.png'

const AboutInstructor = ({ aboutInstructor }) => {
  return (
    <div className="bg-white text-black px-24">
      <h2 className="font-bold text-[35px] pt-[80px] pb-[40px]">About the Instructor</h2>
      {/* <div dangerouslySetInnerHTML={{ __html: aboutInstructor.html_content }} /> */}
      <div className="flex text-[18px] justify-between gap-[25px]">
          <Image src={profite} alt='profite Pic'
            className="rounded-full w-full"
          />
          <div>
            {aboutInstructor.item1}
          </div>
          <div>
            {aboutInstructor.item2}
          </div>
      </div>
      <div>
        <ul className="flex justify-evenly py-[20px] pb-[100px] text-[18px]">
          <li><a href="#"><i class="ri-facebook-circle-fill"></i> Facebook</a></li>
          <li><a href="#"><i class="ri-twitter-x-line"></i> Twitter</a></li>
          <li><a href="#"><i class="ri-youtube-fill"></i> Youtube</a></li>
          <li><a href="#"><i class="ri-instagram-fill"></i> Instagram</a></li>
        </ul>
      </div>
    </div>
  );
};

export default AboutInstructor;
