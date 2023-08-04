import React from "react";
import "./flightsection1.css";
import FlightIcon from "@mui/icons-material/Flight";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import DirectionsRailwayIcon from "@mui/icons-material/DirectionsRailway";
import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";

import Form from "./Form";

const FlightSection1 = ({ active, setIsActive, title }) => {
  return (
    <div className="col-lg-5 col-12 section-1 mt-0 px-0">
      <div className="px-3 a py-3">
        <div className="logo_container ">
          <span className="logo mb-0">Tickets4U</span>
        </div>
      </div>
      <div className="row mt-4 gx-1 px-0">
        <div className="col-3 tab-contt ">
          <div
            className={`tab-cont ${active == "flight" ? "active" : " "}`}
            onClick={() => setIsActive("flight")}
          >
            <FlightIcon />
            <h5 className="mb-0">Flight</h5>
          </div>
        </div>
        <div className="col-3 tab-contt">
          <diV
            className={`tab-cont ${active == "train" ? "active" : " "}`}
            onClick={() => setIsActive("train")}
          >
            <DirectionsRailwayIcon />
            <h5 className="mb-0">Train</h5>
          </diV>
        </div>
        <div className="col-3 tab-contt">
          <div
            className={`tab-cont ${active == "ship" ? "active" : " "}`}
            onClick={() => setIsActive("ship")}
          >
            <DirectionsBoatFilledIcon />
            <h5 className="mb-0">Ship</h5>
          </div>
        </div>
        <div className="col-3 tab-contt mb-4">
          <div
            className={`tab-cont ${active == "car" ? "active" : " "}`}
            onClick={() => setIsActive("car")}
          >
            <TimeToLeaveIcon />
            <h5 className="mb-0">Cars</h5>
          </div>
        </div>
      </div>
      <div className="px-3 mb-4 mt-3">
        <h3 className="logo-text-cont">
          <h3>Best {title} deals with </h3>
          <h3 className="logo-text">Tickets4U</h3>
        </h3>
      </div>
      <Form title={title} />
    </div>
  );
};

export default FlightSection1;
