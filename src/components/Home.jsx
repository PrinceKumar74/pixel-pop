import React from "react";
import Header from "./layout/Header"
import Component1 from "./homeComponents/Component1";
import Component2 from "./homeComponents/component2";
import Component3 from "./homeComponents/Component3";
import Component4 from "./homeComponents/component4";
import Component5 from "./homeComponents/Component5";
import WorkMeetingForm from "./homeComponents/WorkMeetingForm";
import BlogSection from "./homeComponents/Blogs";
import Teams from "./homeComponents/Teams";
import Client from "./homeComponents/Client"
import ClientTestimonial from "./homeComponents/ClientTestimonial";

const Home =()=>{
    return(
    <>
       
        <Component1/>
        <Component2/>
        <Component3/>
        <Component4/>
        <Component5/>
        <Teams/>
        <Client/>
        <BlogSection/>
        <ClientTestimonial/>
        <WorkMeetingForm/>
        </>
    )
}
export default Home;