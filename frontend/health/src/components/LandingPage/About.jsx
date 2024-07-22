import React from "react";
import img from "../../assets/images/about.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <p className=" text-justify lg:text-start">
        Health HQ provides information on managing allergies, detailing types and treatments such as avoidance, medication, and immunotherapy. 
        It highlights the benefits and processes of online consultations for convenient healthcare access. 
        It also addresses doctor unemployment causes and solutions, including telemedicine and policy changes to better distribute medical professionals.
        </p>
        <p className="text-justify lg:text-start">
        Moreover, Health HQ sheds light on the convenience and accessibility of online consultations, 
        underscoring the significance of remote healthcare access. By outlining the process of scheduling 
        appointments and conducting consultations via video calls, phone calls, or secure messaging platforms, 
        it empowers individuals to seek medical advice from the comfort of their homes. This accessibility is 
        particularly beneficial for those residing in remote areas or facing mobility constraints, as it eliminates 
        the need for travel and provides flexibility in appointment scheduling.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;