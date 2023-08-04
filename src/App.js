import React from "react";
import FlightIcon from "@mui/icons-material/Flight";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import DirectionsRailwayIcon from "@mui/icons-material/DirectionsRailway";
import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import PersonIcon from "@mui/icons-material/Person";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FlightSection1 from "./components/FlightSection1/FlightSection1";
import FlightSection2 from "./components/FlightSection2/FlightSection2";
const App = () => {
  const [active, setIsActive] = React.useState("flight");
  return (
    <>
      <div className="home-wrapper py-sm-4 py-0">
        <div className="container">
          <div className="row">
            {active === "flight" && (
              <FlightSection1
                active={active}
                setIsActive={setIsActive}
                title="flight"
              />
            )}{" "}
            {active === "car" && (
              <FlightSection1
                active={active}
                setIsActive={setIsActive}
                title="car"
              />
            )}{" "}
            {active === "train" && (
              <FlightSection1
                active={active}
                setIsActive={setIsActive}
                title="train"
              />
            )}{" "}
            {active === "ship" && (
              <FlightSection1
                active={active}
                setIsActive={setIsActive}
                title="ship"
              />
            )}{" "}
            <FlightSection2 />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
