import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { Download, Star, ThumbsUp } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const AppDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const app = data.find((item) => String(item.id) === String(id));

  const [install, setInstall] = useState(false);

  useEffect(() => {
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    const alreadyInstalled = installedApps.find((a) => a.id === app.id);
    if (alreadyInstalled) setInstall(true);
  }, [app.id]);

  const handleInstall = () => {
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    installedApps.push(app);
    localStorage.setItem("installedApps", JSON.stringify(installedApps));
    setInstall(true);
    toast.success("App installed successfully!");
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-5">
      <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <img
          src={app.image}
          alt={app.title}
          className="h-40 w-56 sm:h-48 sm:w-48 object-cover rounded-xl"
        />

        <div className="flex-1 flex flex-col gap-3 w-full items-center justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold">{app.title}</h1>
          <p className="text-gray-600">
            Developed by:{" "}
            <span className="text-blue-600">{app.companyName}</span>
          </p>

          <div className="border-t border-gray-200 my-3 w-full"></div>

          <div className="flex flex-col sm:flex-row gap-4 text-gray-700 text-sm sm:text-base justify-center">
            <div className="flex flex-col items-center">
              <Download className="text-green-400" />
              <p>Downloads</p>
              <span className="font-semibold">{app.downloads}</span>
            </div>
            <div className="flex flex-col items-center">
              <Star className="text-yellow-400" />
              <p>Average Ratings</p>
              <span className="font-semibold">{app.ratingAvg}</span>
            </div>
            <div className="flex flex-col items-center">
              <ThumbsUp className="text-blue-400" />
              <p>Total Reviews</p>
              <span className="font-semibold">{app.reviews}</span>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={install}
            className="mt-5 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg w-fit"
          >
            {install ? (
              <p className="cursor-not-allowed">Installed</p>
            ) : (
              `Install Now ${app.size ? `(${app.size})` : ""}`
            )}
          </button>

          <ToastContainer />
        </div>
      </div>

      {app.ratings && app.ratings.length > 0 && (
        <div className="w-full mt-10">
          <h2 className="text-xl font-bold mb-4">Ratings</h2>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                layout="vertical"
                data={[...app.ratings].reverse()} // So 5 star is at top
                margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
              >
                <XAxis type="number" tick={{ fontSize: 12 }} />
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={{ fontSize: 14 }}
                  width={80}
                />
                <Tooltip />
                <Bar dataKey="count" fill="#f97316" barSize={20}>
                  {app.ratings.map((entry, index) => (
                    <Cell key={`cell-${index}`} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Description</h2>

        {app.description && (
          <p className="text-gray-700 text-base">{app.description}</p>
        )}
      </div>
    </div>
  );
};

export default AppDetails;
