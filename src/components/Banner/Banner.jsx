import React from "react";
import playStoreImg from "../../assets/playstore.png";
import appStoreImg from "../../assets/appstore.png";
import heroImg from "../../assets/hero.png";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto bg-base-400">
      <div className="max-w-7xl mx-auto py-10 px-4 text-center ">
        <h1 className="text-4xl md:text-6xl font-bold mt-4">
          We Build <br /> <span className="text-blue-700">Productive</span> Apps
        </h1>
        <p className="text-xl font-normal mt-4 text-gray-600">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>

        <div className="flex justify-center gap-3 mt-2">
          <div className="flex btn hover:bg-blue-700 rounded-lg shadow-xl transition duration-300">
            <img src={playStoreImg} alt="" />
            <a
              href="https://play.google.com/store/games?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="font-semibold ">Google Play</button>
            </a>
          </div>
          <div className="flex btn hover:bg-blue-700 rounded-lg shadow-xl transition duration-300">
            <img src={appStoreImg} alt="" />
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="   font-semibold ">App Store</button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          className="flex justify-center w-[400px] h-[300px]"
          src={heroImg}
          alt=""
        />
      </div>
      <section className="w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-10">
        <div className="text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
            Trusted By Millions, Built For You
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-white">
              <p className="text-xl mb-2">Total Downloads</p>
              <p className="text-4xl sm:text-5xl font-bold mb-2">29.6M</p>
              <p className="text-xs sm:text-sm">21% More Than Last Month</p>
            </div>

            <div className="text-white">
              <p className="text-xl mb-2">Total Reviews</p>
              <p className="text-4xl sm:text-5xl font-bold mb-2">906K</p>
              <p className="text-xs sm:text-sm">46% More Than Last Month</p>
            </div>

            <div className="text-white">
              <p className="text-xl mb-2">Active Apps</p>
              <p className="text-4xl sm:text-5xl font-bold mb-2">132+</p>
              <p className="text-xs sm:text-sm">31 More Will Launch</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
