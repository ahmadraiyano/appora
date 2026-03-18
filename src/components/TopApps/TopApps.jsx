import React from "react";
import { Link, useLoaderData } from "react-router";
import App from "../../pages/App/App";

const TopApps = () => {
  const appsData = useLoaderData();
  const topApps = appsData.slice(0, 8);
  return (
    <div className="bg-base-200 py-10">
      <div className="w-11/12 lg:w-10/12 mx-auto text-center">
        <h2 className="text-5xl">Trending Apps</h2>
        <p className="opacity-80 mt-4">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {topApps.map((app) => (
            <App key={app.id} app={app}></App>
          ))}
        </div>
        <a href='/apps' className="btn bg-linear-to-tl from-[#9F62F2] to-[#632EE3] rounded-md text-white mt-6">Show All</a>
      </div>
    </div>
  );
};

export default TopApps;
