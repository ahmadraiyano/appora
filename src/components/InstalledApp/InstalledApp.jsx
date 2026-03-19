import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";

const InstalledApp = ({ app }) => {
  const { image, ratingAvg, title, downloads } = app;

  const formattedDownloads =
    downloads >= 1000000
      ? (downloads / 1000000).toFixed(1) + "M"
      : (downloads / 1000).toFixed(1) + "K";
  return (
    <div className="bg-white">
      <div className="flex flex-col md:flex-row items-center p-4">
        <img src={image} className="max-w-52 rounded-lg shadow-2xl" />
        <div className="flex flex-col md:flex-row justify-center md:justify-between w-full items-center md:px-16">
          <div className="flex flex-col gap-8">
            <h1 className="text-5xl font-bold mt-4 md:mt-0">{title}</h1>
            <div className="flex justify-evenly gap-8">
              <div className="badge badge-outline badge-success border-0 bg-green-100">
                <FaDownload />
                {formattedDownloads}
              </div>
              <div className="badge badge-outline badge-warning border-0 bg-yellow-100">
                <FaStar />
                {ratingAvg}
              </div>
            </div>
          </div>
          <div>
            <button className="btn mt-4 md:mt-0">Uninstall</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstalledApp;
