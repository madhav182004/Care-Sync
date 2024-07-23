import React from "react";
import './home.css';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white opacity-90 image">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          Empowering Health Choices for a Vibrant Life Your Trusted..
        </h1>
        <p>
        Our mission is to empower you with knowledge and tools to make informed health decisions. We believe that informed individuals are healthier individuals, and our blog is designed to provide you with the information you need to live a healthier life.
        </p>
        <a href="/form" className="btn-grad"><button>Fill Your Bio</button></a>
      </div>
    </div>
  );
};

export default Home;