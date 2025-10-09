import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { Download, Star, ThumbsUp } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";

const AppDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const [install, setInstall] = useState(false);

  const handleInstall = () => {
    setInstall(true);

    toast.success("App installed successfully!");
  };

  const app = data.find((item) => String(item.id) === String(id));

  return (
    <div className="max-w-5xl mx-auto mt-10 p-5">
      <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <img
          src={app.image}
          alt=""
          className="h-40 w-56 sm:h-48 sm:w-48 object-cover rounded-xl"
        />

        <div className="flex-1 flex flex-col gap-3 w-full items-center justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold">{app.title}</h1>
          <p className="text-gray-600">
            Developed by:{" "}
            <span className="text-blue-600">{app.companyName}</span>
          </p>

          <div className="border-t border-gray-200 my-3"></div>

          <div className="flex flex-col sm:flex-row gap-4 text-gray-700 text-sm sm:text-base">
            <div>
              <Download className="text-green-400"></Download>
              <p>Downloads</p>
              <span className="font-semibold">{app.downloads}</span>
            </div>
            <div>
              <Star className="text-yellow-400"></Star>
              <p>Average Ratings</p>
              <span className="font-semibold">{app.ratingAvg}</span>
            </div>
            <div>
              <ThumbsUp className="text-blue-400"></ThumbsUp>
              <p>Total Reviews</p>
              <span className="font-semibold">{app.reviews}</span>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={install}
            className="mt-5 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg w-fit"
          >
            {install
              ? "Installed"
              : `Install Now ${app.size ? `(${app.size})` : ""}`}
          </button>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
