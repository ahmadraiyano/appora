import React from "react";

const StateSection = () => {
  return (
    <div className="bg-linear-to-bl from-[#632EE3] to-[#9F62F2] text-white flex flex-col items-center text-center py-20">
        <div>
            <h2 className="text-4xl lg:text-6xl">Trusted by Millions, Built for You</h2>
        </div>
      <div className="flex flex-col md:flex-row gap-24 lg:gap-48 mt-10">
        <div>
          <h6 className="footer-title">Total Downloads</h6>
          <p className="text-6xl">29.6M</p>
          <p>21% more than last month</p>
        </div>
        <div>
          <h6 className="footer-title">Total Reviews</h6>
          <p className="text-6xl">906K</p>
          <p>46% more than last month</p>
        </div>
        <div>
          <h6 className="footer-title">Active Apps</h6>
          <p className="text-6xl">132+</p>
          <p>31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default StateSection;
