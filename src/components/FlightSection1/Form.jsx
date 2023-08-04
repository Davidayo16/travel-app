import React from "react";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import PersonIcon from "@mui/icons-material/Person";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Form = ({ title }) => {
  return (
    <form>
      <section className="d-flex mb-3 px-3 w-100 gap-2 form-section">
        <div className="w-100 form-container">
          <label>Depart from</label>
          <div className="form-body  gap-3">
            <FlightTakeoffIcon className="form-icon" />
            <input type="text" className="form-input" required />
          </div>
        </div>
      </section>
      <section className="d-flex mb-3 px-3 w-100 gap-2 form-section">
        <div className="w-100 form-container">
          <label>Arrive at</label>
          <div className="form-body  gap-3">
            <FlightLandIcon className="form-icon" />
            <input type="text" className="form-input" required />
          </div>
        </div>
      </section>
      <section className="d-flex mb-3 px-3 w-100 gap-4 form-section">
        <div className="w-100 form-container">
          <label>Departure Date</label>
          <div className="form-body">
            <input type="date" className="form-input" required />
          </div>
        </div>
        <div className="w-100 form-container">
          <label>Return Date</label>
          <div className="form-body">
            <input type="date" className="form-input" required />
          </div>
        </div>
      </section>
      <section className="d-flex  mb-2 px-3 w-100 gap-4 form-section">
        <div className="w-100 form-container">
          <label>Class</label>
          <div className="form-body gap-3">
            <EventNoteIcon className="form-icon" />
            <input type="text" className="form-input" required />
          </div>
        </div>
        <div className=" form-container">
          <label>Passengers</label>
          <div className="form-body gap-3">
            <PersonIcon className="form-icon" />
            <input type="number" className="form-input" />
          </div>
        </div>
      </section>
      <div className="p-3">
        <button className="find-flight">FIND {title}</button>
      </div>
    </form>
  );
};

export default Form;
