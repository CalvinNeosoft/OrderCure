import React, { useState } from "react";

function AreaSelectContainer() {
  const [areaSearch, setAreaSearch] = useState("");
  const [governarateActive, setGovernarateActive] = useState({
    1: true,
    2: true,
  });
  const areaSearchChange = (e) => {
    setAreaSearch(e.target.value);
  };

  return (
    <div>
      <div className="area-search-wrapper">
        <input
          onChange={(e) => areaSearchChange(e)}
          type="search"
          placeholder="Search in cities"
          className="area-search"
          value={areaSearch}
        ></input>
      </div>
      <div className="mt-3 accordion-container">
        <button
          className={`governarate-accordion ${
            governarateActive[1] ? "active" : ""
          }`}
          onClick={() =>
            setGovernarateActive({
              ...governarateActive,
              1: !governarateActive[1],
            })
          }
        >
          Kuwait City Governorate
        </button>
        <div
          className={`area-list-collapse ${
            governarateActive[1] ? "active" : ""
          }`}
        >
          <ul>
            <li className="area">
              <a href="javascript:void(0)">dasd</a>
            </li>
            <li className="area">
              <a href="javascript:void(0)">dasd</a>
            </li>
            <li className="area">
              <a href="javascript:void(0)">dasd</a>
            </li>
            <li className="area">
              <a href="javascript:void(0)">dasd</a>
            </li>
            <li className="area">
              <a href="javascript:void(0)">dasd</a>
            </li>
          </ul>
        </div>
        <button
          className={`governarate-accordion ${
            governarateActive[2] ? "active" : ""
          }`}
          onClick={() =>
            setGovernarateActive({
              ...governarateActive,
              2: !governarateActive[2],
            })
          }
        >
          Kuwait City state
        </button>
        <div
          className={`area-list-collapse ${
            governarateActive[2] ? "active" : ""
          }`}
        >
          <ul>
            <li className="area">
              <a href="javascript:void(0)">dasd</a>
            </li>
            <li className="area">
              <a href="javascript:void(0)">dasd</a>
            </li>
            <li className="area">
              <a href="javascript:void(0)">dasd</a>
            </li>
            <li className="area">
              <a href="javascript:void(0)">dasd</a>
            </li>
            <li className="area">
              <a href="javascript:void(0)">dasd</a>
            </li>
            <li className="area">
              <a href="javascript:void(0)">dasd</a>
            </li>
            <li className="area">
              <a href="javascript:void(0)">dasd</a>
            </li>
            <li className="area">
              <a href="javascript:void(0)">dasd</a>
            </li>
            <li className="area">
              <a href="javascript:void(0)">dasd</a>
            </li>
            <li className="area">
              <a href="javascript:void(0)">dasd</a>
            </li>
            <li className="area">
              <a href="javascript:void(0)">dasd</a>
            </li>
            <li className="area">
              <a href="javascript:void(0)">dasd</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AreaSelectContainer;
