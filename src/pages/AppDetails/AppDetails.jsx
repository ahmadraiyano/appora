import React from "react";
import { useLoaderData, useParams } from "react-router";
import DetailsTop from "../../components/DetailsTop/DetailsTop";
import Chart from "../../components/Chart/Chart";

const AppDetails = () => {
  const { appsId } = useParams();
  const convertedId = parseInt(appsId);
  const appsData = useLoaderData();
  const appDetail = appsData.find((app) => app.id === convertedId);
  const { ratings, description } = appDetail;

  return (
    <div className="bg-base-200">
      <div className="w-11/12 lg:w-10/12 mx-auto text-center">
        <DetailsTop appDetail={appDetail}></DetailsTop>
        <div className="divider"></div>
        <Chart ratings={ratings}></Chart>
        <div className="divider"></div>
        <div className="py-10">
          <h2 className="font-bold text-2xl text-left mb-4">Description</h2>
          <div className="flex flex-col gap-12 text-justify ">
          {description.map((para, i)=> <p key={i}>{para.para}</p>)}
        </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
