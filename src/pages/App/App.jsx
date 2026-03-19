import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { Link} from "react-router";

const App = ({ app }) => {
  const { image, ratingAvg, title, downloads,id } = app;


 
    const formattedDownloads =
    downloads >= 1000000
      ? (downloads / 1000000).toFixed(1) + "M"
      : (downloads / 1000).toFixed(1) + "K";
  return (
    <Link to={`/apps/details/${id}`}>
      <div className="card bg-base-100 shadow-sm">
      <figure className="p-4">
        <img className="bg-base-200 w-full" src={image} alt={title} />
      </figure>
      <div className="px-4 pb-4">
        <h2 className="card-title mb-4">{title}</h2>
        <div className="card-actions justify-between">
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
    </div>
    </Link>
  );
};

export default App;
