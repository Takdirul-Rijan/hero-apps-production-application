import React, { useEffect, useState } from "react";
import { Download, Star } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";

const MyInstallation = () => {
  const [apps, setApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
    setApps(stored);
  }, []);

  const handleUninstall = (id) => {
    const updated = apps.filter((app) => app.id !== id);
    setApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
    toast.info("App uninstalled successfully!");
  };

  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);

    const sortedApps = [...apps].sort((a, b) => {
      const getNumber = (d) => {
        const num = parseFloat(d);
        if (d.includes("M")) return num * 1000000;

        return num;
      };

      const downloadsA = getNumber(a.downloads);
      const downloadsB = getNumber(b.downloads);

      if (order === "high-low") return downloadsB - downloadsA;
      if (order === "low-high") return downloadsA - downloadsB;
      return 0;
    });

    setApps(sortedApps);
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 p-5">
      <h1 className="text-3xl font-bold text-center mb-2">
        Your Installed Apps
      </h1>
      <p className="text-center text-gray-500 mb-8">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold mb-4">
          ({apps.length}) Apps Found
        </h2>

        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="border border-gray-300 rounded-md px-3 py-1"
        >
          <option value="">Sort By Downloads</option>
          <option value="high-low">High-Low</option>
          <option value="low-high">Low-High</option>
        </select>
      </div>

      <div className="flex flex-col gap-5 mt-3">
        {apps.length === 0 ? (
          <p className="text-gray-500 text-center">No apps installed yet.</p>
        ) : (
          apps.map((app) => (
            <div
              key={app.id}
              className="flex items-center justify-between md:gap-36 bg-white rounded-2xl shadow-sm p-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold">{app.title}</h3>
                  <div className="flex items-center gap-3 mt-2 text-sm text-gray-600">
                    <span className="flex items-center gap-1 text-green-500">
                      <Download /> {app.downloads}
                    </span>
                    <span className="flex items-center gap-1 text-orange-400">
                      <Star /> {app.ratingAvg}
                    </span>
                    <span>{app.size}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleUninstall(app.id)}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-md"
              >
                Uninstall
              </button>
            </div>
          ))
        )}
      </div>

      <ToastContainer />
    </div>
  );
};

export default MyInstallation;
