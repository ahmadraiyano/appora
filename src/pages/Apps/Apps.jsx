import React, { useState } from "react";
import { useLoaderData } from "react-router";
import App from "../../pages/App/App";
import { IoSearchOutline } from "react-icons/io5";
import AppsNotFound from "../../components/AppsNotFound/AppsNotFound";

const Apps = () => {
  const appsData = useLoaderData();
  const [search, setSearch] = useState("");

  const filteredData = search
    ? appsData.filter((appData) =>
        appData.title.toLowerCase().includes(search.toLowerCase()),
      )
    : appsData;
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const NotFoundMsg = {
    heading: "OPPS!! APP NOT FOUND",
    para: "The App you are requesting is not found on our system.  please try another apps"
  }
  return (
    <div className="bg-base-200 py-10">
      <div className="w-11/12 lg:w-10/12 mx-auto text-center">
        <h2 className="text-5xl">Our All Applications</h2>
        <p className="opacity-80 mt-4">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <div className="sm:flex items-center justify-between mt-4">
          <p className="font-bold">({filteredData.length}) Apps Found</p>
          <label className="input mt-4">
            <IoSearchOutline />
            <input
              type="search"
              onChange={handleSearch}
              defaultValue={search}
              required
              placeholder="Search Apps"
            />
          </label>
        </div>
        {filteredData.length > 0 ?
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {filteredData.map((app) => (
            <App key={app.id} app={app}></App>
          ))}
        </div> : <AppsNotFound NotFoundMsg={NotFoundMsg}></AppsNotFound>}
      </div>
    </div>
  );
};

export default Apps;
