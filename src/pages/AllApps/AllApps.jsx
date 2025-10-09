import { Download, Star } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router";
import SpinnerLoading from "../../components/SpinnerLoading/SpinnerLoading";

const AllApps = () => {
  const data = useLoaderData();
  const [search, setSearch] = useState("");

  const filteredApps = data.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    if (!search) {
      setSearchLoading(false);
      return;
    }
    setSearchLoading(true);
    setTimeout(() => setSearchLoading(false), 400);
    return;
  }, [search]);

  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/appdetails/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto bg-base-400">
      <h1 className="text-3xl font-bold mt-4 mb-1 text-center">
        Our Applications
      </h1>
      <p className="text-xl text-center text-gray-600 mt-4">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="flex justify-between mt-3 items-center">
        <p className="text-2xl font-[600]">
          ({filteredApps.length}) Apps Found
        </p>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search Apps"
            className="border border-gray-400 rounded-lg outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-300 px-3 py-1"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {searchLoading && (
            <div className="fixed inset-0 flex justify-center items-center bg-white/50 z-50">
              <SpinnerLoading />
            </div>
          )}
        </div>
      </div>

      {filteredApps.length === 0 ? (
        <p className="text-center text-xl text-red-900 my-10">No App Found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-4">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              className="bg-[#d9d9d9] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 flex flex-col items-center text-center"
              onClick={() => handleCardClick(app.id)}
            >
              <img
                src={app.image}
                alt={app.title}
                className="h-[180px] w-[316px] object-cover rounded-xl mb-4"
              />
              <h2 className="text-xl font-semibold mb-1">{app.title}</h2>

              <div className="flex justify-between items-center w-full gap-2 text-sm text-gray-600 mt-auto">
                <span className="flex gap-1 bg-[#f1f5e8] p-1 rounded-sm">
                  <Download className="text-green-600"></Download>{" "}
                  {app.downloads}
                </span>
                <span className="flex gap-1 bg-[#f1f5e8] p-1 rounded-sm">
                  <Star className="text-yellow-600"></Star> {app.ratingAvg}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllApps;
