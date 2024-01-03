import React from 'react';
import Instructor from '../components/Instructor';
import CourseDetails from '../components/CourseDetails';
import AboutCourse from '../components/AboutCourse';
import WhatToExpect from '../components/WhatToExpect';
import KeyTopics from '../components/KeyTopics';
import AboutInstructor from '../components/AboutInstructor';
import Testimonial from '../components/Testimonial';
import Main from '../components/MainComponent';
import Navbar from '../components/Navbar';

const Home = ({ courseData }) => {
  return (
    <div className="box-border w-screen h-screen bg-white text-black">
      <Instructor instructor={courseData.instructor} course={courseData.course}/>
      <Main courseData={courseData}/>
    </div>
  );
};

export async function getStaticProps() {
  const content = require('../data/courseData.json');
  return {
    props: {
      courseData: content,
    },
  };
}

export default Home;
