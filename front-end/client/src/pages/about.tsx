import HeroSection from "@/components/heroSection";
import React from "react";

export default function About() {
  return (
    <>
      <HeroSection />
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4 py-8 border border-gray-300 rounded-md">
          <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
          <p className="text-lg leading-7 mb-6">
            Welcome to TravelWay, a travel blog where travelers can share their
            stories, knowledge, and suggestions with fellow adventure
            enthusiasts.
          </p>
          <p className="text-lg leading-7 mb-6">
            We believe that traveling is not only about visiting new places, but
            also about discovering oneself, learning from different cultures,
            and connecting with people around the world.
          </p>
          <p className="text-lg leading-7 mb-6">
            At TravelWay, we strive to inspire and guide you with our stories,
            tips, and recommendations. Whether your an avid globetrotter or
            someone who dreams of embarking on new adventures, our blog is the
            perfect place for you to explore.
          </p>
          <p className="text-lg leading-7 mb-6">
            Feel free to reach out to us with your own travel stories,
            suggestions, or any questions you may have. We love hearing from
            fellow adventurers and helping others make the most out of their
            travels.
          </p>
        </div>
      </div>
    </>
  );
}
