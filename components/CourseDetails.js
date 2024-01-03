// components/CourseDetails.js
import React from 'react';

const CourseDetails = ({ course }) => {
  return (
    <div className="bg-purple-100  text-black w-[500px] h-auto z-10 relative top-[-50px] rounded-lg">
      <div className='p-[30px]'>
        <h2 className="font-bold text-2xl">Course Details</h2>
        <p className="font-bold text-4xl pb-4">₹ {course.fee.amount}</p>
        <p className="font-bold text-xl p-2">Whats included:</p>
        <ul className="text-l">
          <li><i class="ri-video-fill"></i> {course.inclusions.on_demand_videos} On-Demand Videos</li>
          <li><i class="ri-video-fill"></i> 2 livestream Sessions</li>
          <li><i class="ri-question-answer-fill"></i> {course.inclusions.live_qa_sessions?'Live Q&A Sessions with NITYANAND CHARAN DAS':'No'}</li>
          <li><i class="ri-question-answer-fill"></i> {course.inclusions.whatsapp_community ? 'An active WhatsApp Community' : 'No'}</li>
        </ul>
        <button className="text-center w-full p-3 mt-3 rounded-3xl bg-purple-500 font-bold text-white">Register today</button>
      </div>
    </div>
  );
};

export default CourseDetails;
