import React from "react";
import Button from "./layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from './layouts/ServiceCard';
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Services = () => {
  const icon1 = (
    <RiMicroscopeLine size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Our Services
          </h1>
          <p className=" mt-2 text-center lg:text-start">
          we offer a comprehensive range of services designed to support your health and well-being.
          </p>
        </div>
        <div className=" mt-4 lg:mt-0">
          <Button title="See Services" />
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row gap-5 pt-14">
        <ServicesCard icon={icon2} title="One to one video call with doctors" desc="One-to-one video calls with doctors offer convenient access to healthcare from home, reducing travel and wait times."/>
        <ServicesCard icon={icon1} title="Machine Learning  skin disease detection" desc="Machine learning skin disease detection utilizes algorithms trained on vast datasets to accurately identify various skin conditions from images, aiding in early diagnosis and treatment recommendations."/>
        <ServicesCard icon={icon3} title="Village connect" desc="Village Connect facilitates rural residents access to medical consultations by connecting them with doctors remotely, improving healthcare accessibility in underserved areas."/>
      </div>
    </div>
  );
};

export default Services;