import React, { useState, useEffect } from "react";
import { getStoredData } from "../../utilities/storageDB";
import { useLoaderData } from "react-router";
import InstalledApp from "../../components/InstalledApp/InstalledApp";
import { removeFromDB } from "../../utilities/storageDB";

const Installation = () => {
  const storedApp = getStoredData();
  const appsData = useLoaderData();

  const filteredStoredData = appsData.filter((appData) =>
    storedApp.includes(appData.id)
  );

  const [sortedApps, setSortedApps] = useState([]);

  useEffect(() => {
    setSortedApps(filteredStoredData);
  }, [appsData]);

  const handleSort = (type) => {
    let sorted = [...sortedApps];

    if (type === "highToLow") {
      sorted.sort((a, b) => b.downloads - a.downloads);
    }

    if (type === "lowToHigh") {
      sorted.sort((a, b) => a.downloads - b.downloads);
    }

    setSortedApps(sorted);
  };
  const handleUninstall = id => {
        removeFromDB(id)

        const newData = sortedApps.filter(app=> app.id !== id)
        setSortedApps(newData)
      }

  return (
    <div className="bg-base-200 py-10">
      <div className="w-11/12 lg:w-10/12 mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-5xl font-bold mb-4">Your Installed Apps</h2>
          <p className="opacity-80">Explore your installed apps</p>
        </div>

        <div className="flex justify-between items-center mb-4">
          <p className="font-bold">{sortedApps.length} Apps Found</p>

          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort By Download
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a onClick={() => handleSort("highToLow")}>
                  High to Low
                </a>
              </li>
              <li>
                <a onClick={() => handleSort("lowToHigh")}>
                  Low to High
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid gap-6">
          {sortedApps.map((app) => (
            <InstalledApp key={app.id} app={app} handleUninstall={handleUninstall}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation;