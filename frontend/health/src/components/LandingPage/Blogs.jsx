import React from "react";
import Button from "./layouts/Button";
import BlogCard from "./layouts/BlogCard";
import img1 from "../../assets/images/blog1.jpg";
import img2 from "../../assets/images/blog2.jpg";
import img3 from "../../assets/images/blog3.jpg";
import img4 from "../../assets/images/blog4.jpg";
import img5 from "../../assets/images/blog5.jpg";
import img6 from "../../assets/images/blog6.jpg";

const Blogs = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Latest Post
          </h1>
          <p className=" mt-2 text-center lg:text-start">
          Explore essential tips for maintaining a healthy lifestyle, including balanced diets, regular exercise
          </p>
        </div>
        <div className=" mt-4 lg:mt-0">
          <Button title="Our Articles" />
        </div>
      </div>
      <div className=" my-8">
        <div className=" flex flex-wrap justify-center gap-5">
          <BlogCard img={img1} headlines="Unraveling the Mysteries of Sleep" description="Delves into the science behind sleep cycles, exploring its impact on health, cognition, and overall well-being, offering insights and strategies for optimizing sleep quality and quantity."/>
          <BlogCard img={img2} headlines="The Heart-Healthy Diet" description="Prioritizes nutrient-rich foods like fruits, vegetables, whole grains, lean proteins, and healthy fats to support cardiovascular wellness."/>
          <BlogCard img={img3} headlines="Understanding Pediatric Vaccinations" description="Involves learning about the importance of immunizations in protecting children from serious diseases and the recommended vaccination schedule to ensure they receive timely and effective protection against various illnesses."/>
          <BlogCard img={img4} headlines="Navigating Mental Health" description="Involves learning about the importance of immunizations in protecting children from serious diseases and the recommended vaccination schedule to ensure they receive timely and effective protection against various illnesses."/>
          <BlogCard img={img5} headlines="The Importance of Regular Exercise" description="Regular exercise is vital for maintaining physical health, improving mood, reducing stress, enhancing cognitive function, and preventing chronic diseases, promoting overall well-being and longevity."/>
          <BlogCard img={img6} headlines="Skin Health" description="Encompasses practices like proper hydration, sun protection, regular cleansing, and a balanced diet, along with skincare routines tailored to individual needs, ensuring optimal skin function and appearance."/>
        </div>
      </div>
    </div>
  );
};

export default Blogs;