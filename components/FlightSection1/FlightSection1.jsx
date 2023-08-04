import React from "react";
import "./flightsection1.css";
const FlightSection1 = () => {
  return (
    <div className="col-lg-5 col-12 section-1 px-0">
      <div className="px-4 py-3">
        <div className="logo_container ">
          <span className="logo mb-0">Tickets4U</span>
        </div>
      </div>
      <div className="row mt-4 gx-1 px-0">
        <div className="col-3 tab-contt ">
          <di className="tab-cont active">
            <FlightIcon />
            <h5 className="mb-0">Flight</h5>
          </di>
        </div>
        <div className="col-3 tab-contt">
          <di className="tab-cont">
            <DirectionsRailwayIcon />
            <h5 className="mb-0">Train</h5>
          </di>
        </div>
        <div className="col-3 tab-contt">
          <di className="tab-cont">
            <DirectionsBoatFilledIcon />
            <h5 className="mb-0">Ship</h5>
          </di>
        </div>
        <div className="col-3 tab-contt mb-4">
          <di className="tab-cont">
            <TimeToLeaveIcon />
            <h5 className="mb-0">Cars</h5>
          </di>
        </div>
      </div>
      <div className="px-3 mb-4 mt-3">
        <h3 className="logo-text-cont">
          <h3>Best flight deals with </h3>
          <h3 className="logo-text">Tickets4U</h3>
        </h3>
      </div>
      <form>
        <div className="d-flex mb-3 px-3 w-100 gap-2 i">
          <div className="w-100 a">
            <label>Depart from</label>
            <div className="b  gap-3">
              <FlightTakeoffIcon className="form-icon" />
              <input type="text" className="c" />
            </div>
          </div>
        </div>
        <div className="d-flex mb-3 px-3 w-100 gap-2 i">
          <div className="w-100 a">
            <label>Arrive at</label>
            <div className="b  gap-3">
              <FlightLandIcon className="form-icon" />
              <input type="text" className="c" />
            </div>
          </div>
        </div>
        <div className="d-flex mb-3 px-3 w-100 gap-2 i">
          <div className="w-100 a">
            <label>Departure Date</label>
            <div className="b">
              <input type="date" className="c" />
            </div>
          </div>
          <div className="w-100 a">
            <label>Return Date</label>
            <div className="b">
              <input type="date" className="c" />
            </div>
          </div>
        </div>
        <div className="d-flex  mb-2 px-3 w-100 gap-2 i">
          <div className="w-100 a">
            <label>Class</label>
            <div className="b gap-3">
              <EventNoteIcon className="form-icon" />
              <input type="text" className="c" />
            </div>
          </div>
          <div className="w-100 a">
            <label>Passengers</label>
            <div className="b gap-3">
              <PersonIcon className="form-icon" />
              <input type="number" className="c" />
            </div>
          </div>
        </div>
        <div className="p-3">
          <button className="find-flight">FIND FLIGHT</button>
        </div>
      </form>
    </div>
  );
};

export default FlightSection1;
