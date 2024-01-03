import AboutCourse from "./AboutCourse";
import WhatToExpect from "./WhatToExpect";
import KeyTopics from "./KeyTopics";
import CourseDetails from "./CourseDetails";
import Testimonial from "./Testimonial";
import AboutInstructor from "./AboutInstructor";
import Navbar from "./Navbar";

const MainComponent= ({courseData})=>{
    return (
        <>
            <div className="flex justify-between px-24 bg-white">
                <div className="h-auto w-[45vw]">
                    <Navbar/>
                    <section id="aboutCourse"><AboutCourse about={courseData.course.about}/></section>
                    <WhatToExpect whatToExpect={courseData.course.what_to_expect}/>
                    <KeyTopics keyTopics={courseData.course.key_topics} />
                </div>
                <div>
                    <CourseDetails course={courseData.course}/>
                </div>
            </div>
            <section id="aboutInstructor"><AboutInstructor aboutInstructor={courseData.about_instructor} /></section>
            <section id="testimonial"><Testimonial testimonial={courseData.testimonial} /></section>
        </>
    );
};

export default MainComponent