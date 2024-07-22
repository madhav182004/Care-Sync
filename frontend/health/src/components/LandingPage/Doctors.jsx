import React, { useRef } from "react";
import './Doctors.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import image1 from "../../assets/images/doc1.jpg";
import image2 from "../../assets/images/doc2.jpg";
import image3 from "../../assets/images/doc3.jpg";
import image4 from "../../assets/images/doc4.jpg";
import image5 from "../../assets/images/doc5.jpg";
import image6 from "../../assets/images/doc6.jpg";

const Doctors = () => {
  const data = [
    {
      img: image1,
      name: "Dr. Navin Reddy",
      specialties: "Orthopedic Surgeon",
    },
    {
      img: image2,
      name: "Dr. Sushant Chopra",
      specialties: "Cardiologist",
    },
    {
      img: image3,
      name: "Dr. Himanshu Singh & Dr. Abhishek Raj",
      specialties: "Pediatrician",
    },
    {
      img: image4,
      name: "Dr. Anil Kumar",
      specialties: "Neurologist",
    },
    {
      img: image5,
      name: "Dr. Neha Kakkar",
      specialties: "Dermatologist",
    },
    {
      img: image6,
      name: "Dr. Chinnaswamy Hegde",
      specialties: "Ophthalmologist",
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Our Doctors
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            Meet our well experienced doctors who are specialized in their specific domain
          </p>
        </div>
        <div className="flex gap-5 mt-4 lg:mt-0">
          <button
            className=" bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickPrev()}
          >
            <FaArrowLeft size={25} />
          </button>
          <button
            className="bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickNext()}
          >
            <FaArrowRight size={25} />
          </button>
        </div>
      </div>
      <div className=" mt-5">
        <Slider ref={slider} {...settings}>
          {data.map((e, index) => (
            <div
              className="h-[350px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer"
              key={index}
            >
              <div>
                <img
                  src={e.img}
                  alt="img"
                  className="h-56 rounded-t-xl w-full"
                />
              </div>

              <div className="flex flex-col justify-center items-center">
                <h1 className="font-semibold text-xl pt-4">{e.name}</h1>
                <h3 className="pt-2">{e.specialties}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="btn-grad flex justify-center items-center Centering">
          <a href="/doctorform"><button>Join As Doctor!</button></a>
      </div>
    </div>
  );
};

export default Doctors;