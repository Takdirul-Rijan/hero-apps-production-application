import { Download, Star } from "lucide-react";
import React from "react";
import { useLoaderData } from "react-router";

const AllApps = () => {
  const data = useLoaderData();
  //   console.log(data);

  return (
    <div className="max-w-7xl mx-auto bg-base-400">
      <h1 className="text-3xl font-bold mt-4 mb-1 text-center">
        Our Applications
      </h1>
      <p className="text-xl font-normal text-center mt-4 text-gray-600">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex justify-between mt-3">
        <p className="text-2xl font-[600]">({data.length}) Apps Found</p>
        <input
          className="border border-gray-400 rounded-lg outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-300"
          type="text"
          placeholder="search apps"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-4 ">
        {data.map((app) => (
          <div
            key={app.id}
            className="bg-[#d9d9d9] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 flex flex-col items-center text-center"
          >
            <img
              src={app.image}
              alt=""
              className="h-[180px] w-[316px] object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-semibold mb-1">{app.title}</h2>

            <div className="flex justify-between items-center w-full gap-2 text-sm text-gray-600 mt-auto">
              <span className="flex gap-1 bg-[#f1f5e8] p-1 rounded-sm">
                <Download></Download>
                {app.downloads}
              </span>
              <span className="flex gap-1 bg-[#f1f5e8] p-1 rounded-sm">
                <Star></Star> {app.ratingAvg}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllApps;
