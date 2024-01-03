// components/AboutCourse.js
import React from 'react';

const AboutCourse = ({ about }) => {
  return (
    <div>
      <h2 className="font-bold text-[35px] py-8">About the Course</h2>
      <div dangerouslySetInnerHTML={{ __html: about.html_content }} 
        className="text-[18px]"
      />     
    </div>
  );
};

export default AboutCourse;
