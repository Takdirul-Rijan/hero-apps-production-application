import { Download, Star } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

const TrendingApps = ({ data }) => {
  const showAllBtnNavigate = useNavigate();

  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/appdetails/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto bg-base-400">
      <h1 className="text-3xl font-bold mt-4 mb-1 text-center">
        Trending Apps
      </h1>
      <p className="text-xl font-normal text-center mt-4 text-gray-600">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-4 ">
        {data.map((app) => (
          <div
            key={app.id}
            className="bg-[#d9d9d9] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 flex flex-col items-center text-center"
            onClick={() => handleCardClick(app.id)}
          >
            <img
              src={app.image}
              alt=""
              className="h-[180px] w-[316px] object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-semibold mb-1">{app.title}</h2>

            <div className="flex justify-between items-center w-full gap-2 text-sm text-gray-600">
              <span className="flex gap-1 bg-[#f1f5e8] p-1 rounded-sm">
                <Download className="text-green-600"></Download>
                {app.downloads}
              </span>
              <span className="flex gap-1 bg-[#f1f5e8] p-1 rounded-sm">
                <Star className="text-yellow-600"></Star> {app.ratingAvg}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-5">
        <button
          onClick={() => showAllBtnNavigate("/allapps")}
          className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-[16px] font-[600] text-white"
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default TrendingApps;
