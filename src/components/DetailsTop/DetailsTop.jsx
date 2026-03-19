import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";

const DetailsTop = ({ appDetail }) => {
  const { image, title, ratingAvg, downloads, companyName, reviews, size } =
    appDetail;
  const formatted = (calc) => {
    return calc >= 1000000
      ? (calc / 1000000).toFixed(1) + "M"
      : (calc / 1000).toFixed(1) + "K";
  };

  const formattedDownloads = formatted(downloads);
  const formattedReviews = formatted(reviews);
  return (
    <div className="py-10">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex justify-center">
          <img
            src={image}
            alt={title}
            className="sm:max-w-sm rounded-lg bg-white "
          />
        </div>
        <div className="md:text-start w-full flex flex-col justify-between gap-4">
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p>
              <span className="opacity-80">Developed By</span>{" "}
              <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                {companyName}
              </span>
            </p>
          </div>
          <div className="divider m-0 p-0"></div>
          <div className="flex gap-4 justify-center sm:justify-start">
            <div className="flex flex-col gap-2 items-center">
              <FaDownload className="text-2xl text-success" />
              <p>Downloads</p>
              <p className="font-bold text-2xl">{formattedDownloads}</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <FaStar className="text-2xl text-warning" />
              <p>Average Ratings</p>
              <p className="font-bold text-2xl">{ratingAvg}</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <MdOutlineRateReview className="text-2xl text-primary" />
              <p>Total Reviews</p>
              <p className="font-bold text-2xl">{formattedReviews}</p>
            </div>
          </div>
          <button className="btn btn-success sm:self-start">
            Install Now ({size} MB)
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsTop;
