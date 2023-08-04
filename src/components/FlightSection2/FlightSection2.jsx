import React from "react";
import "./FlightSection2.css";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const FlightSection2 = () => {
  return (
    <div className="col-lg-7 col-12  section-2 px-3 py-4">
      <div className="d-flex justify-content-between align-items-sm-center  flex-sm-row flex-column">
        <div className="d-flex flex-column justify-content-center search">
          <h4 className="mb-0">Search results</h4>
          <p className="mb-0 mt-0 dim">We found 15 results</p>
        </div>
        <div className="d-flex gap-3 btnn align-items-center mt-sm-0 mt-3">
          <button>CHEAPEST</button>
          <button>SHORTEST</button>
          <button className="active">RECOMMENDED</button>
        </div>
      </div>
      <div className="mt-3 d-flex gap-3 search-head">
        London{" "}
        <span>
          <ArrowForwardIcon className="dim" />
        </span>
        <span>New York</span>
      </div>
      <div className="d-flex w-100 justify-content-between mt-2 result-cont ">
        <div className="brand">
          <img src="/images/br.png" className="img-fluid" />
        </div>
        <div className="side-2">
          <small className="mb-1 mt-1 dim">Deport</small>
          <p className="mb-1 mt-1">11/11/2019</p>
          <p className="mb-0 bold"> 7:34PM</p>
        </div>
        <div className="side-2">
          <small className="mb-1 mt-1 stops">0 Stops</small>
          <p className="mb-1 mt-1 dim">8hrs 23mins</p>
        </div>
        <div className="side-2">
          <small className="mb-1 mt-1 dim">Arrive</small>
          <p className="mb-1 mt-1"> 11/11/2019</p>
          <p className="mb-1 mt-1 bold">7:34PM</p>
        </div>
        <div className="side-2">
          <small className="mb-1 mt-1 dim">Price</small>
          <p className="mb-1 mt-1 bold price">$ 850</p>
        </div>
      </div>
      <div className="d-flex w-100 justify-content-between mt-2 result-cont ">
        <div className="brand">
          <img src="/images/wizz.png" className="img-fluid" />
        </div>
        <div className="side-2">
          <small className="mb-1 mt-1 dim">Deport</small>
          <p className="mb-1 mt-1">11/11/2019</p>
          <p className="mb-0 bold"> 7:34PM</p>
        </div>
        <div className="side-2">
          <small className="mb-1 mt-1 stops">0 Stops</small>
          <p className="mb-1 mt-1 dim">8hrs 23mins</p>
        </div>
        <div className="side-2">
          <small className="mb-1 mt-1 dim">Arrive</small>
          <p className="mb-1 mt-1"> 11/11/2019</p>
          <p className="mb-1 mt-1 bold">7:34PM</p>
        </div>
        <div className="side-2">
          <small className="mb-1 mt-1 dim">Price</small>
          <p className="mb-1 mt-1 bold price">$ 850</p>
        </div>
      </div>
      <div className="d-flex w-100 justify-content-between mt-2 result-cont ">
        <div className="brand">
          <img src="/images/br.png" className="img-fluid" />
        </div>
        <div className="side-2">
          <small className="mb-1 mt-1 dim">Deport</small>
          <p className="mb-1 mt-1">11/11/2019</p>
          <p className="mb-0 bold"> 7:34PM</p>
        </div>
        <div className="side-2">
          <small className="mb-1 mt-1 stops-t">1 Stop</small>
          <p className="mb-1 mt-1 dim">8hrs 23mins</p>
        </div>
        <div className="side-2">
          <small className="mb-1 mt-1 dim">Arrive</small>
          <p className="mb-1 mt-1"> 11/11/2019</p>
          <p className="mb-1 mt-1 bold">7:34PM</p>
        </div>
        <div className="side-2">
          <small className="mb-1 mt-1 dim">Price</small>
          <p className="mb-1 mt-1 bold price">$ 350</p>
        </div>
      </div>
      <div className="d-flex w-100 justify-content-between mt-2 result-cont ">
        <div className="brand">
          <img src="/images/wizz.png" className="img-fluid" />
        </div>
        <div className="side-2">
          <small className="mb-1 mt-1 dim">Deport</small>
          <p className="mb-1 mt-1">11/11/2019</p>
          <p className="mb-0 bold"> 7:34PM</p>
        </div>
        <div className="side-2">
          <small className="mb-1 mt-1 stops">0 Stops</small>
          <p className="mb-1 mt-1 dim">8hrs 23mins</p>
        </div>
        <div className="side-2">
          <small className="mb-1 mt-1 dim">Arrive</small>
          <p className="mb-1 mt-1"> 11/11/2019</p>
          <p className="mb-1 mt-1 bold">7:34PM</p>
        </div>
        <div className="side-2">
          <small className="mb-1 mt-1 dim">Price</small>
          <p className="mb-1 mt-1 bold price">$ 465</p>
        </div>
      </div>
      <div className="d-flex w-100 justify-content-between mt-2 result-cont ">
        <div className="brand">
          <img src="/images/br.png" className="img-fluid" />
        </div>
        <div className="side-2">
          <small className="mb-1 mt-1 dim">Deport</small>
          <p className="mb-1 mt-1">11/11/2019</p>
          <p className="mb-0 bold"> 7:34PM</p>
        </div>
        <div className="side-2">
          <small className="mb-1 mt-1 stops-t">1 Stop</small>
          <p className="mb-1 mt-1 dim">8hrs 23mins</p>
        </div>
        <div className="side-2">
          <small className="mb-1 mt-1 dim">Arrive</small>
          <p className="mb-1 mt-1"> 11/11/2019</p>
          <p className="mb-1 mt-1 bold">7:34PM</p>
        </div>
        <div className="side-2">
          <small className="mb-1 mt-1 dim">Price</small>
          <p className="mb-1 mt-1 bold price">$ 1850</p>
        </div>
      </div>
      <nav aria-label="Page navigation" className="mt-3 mb-0">
        <ul className="pagination mb-0 p-0">
          <li className="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default FlightSection2;
