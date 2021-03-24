import React, { useState } from "react";
import { Link } from "react-router-dom";

function BranchSelect() {
  const [branchSearch, setBranchSearch] = useState("");
  const branchSearchChange = (e) => {
    setBranchSearch(e.target.value);
  };
  return (
    <div>
      <div className="area-search-wrapper">
        <input
          onChange={(e) => branchSearchChange(e)}
          type="search"
          placeholder="Search branch"
          className="area-search"
          value={branchSearch}
        ></input>
      </div>
      <div className="branch-list-container">
        <ul className="branch-list">
          <li className="branch-list-item">
            <Link className="branch-details">
              <h2 className="branch-name">Mijana Fahaheel</h2>
              <p className="branch-address">
                Fahaheel - Block 12, Al Dabous Street, Al Kout Mall
              </p>
            </Link>
            <Link to="/" className="branch-info">
              <span>i</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BranchSelect;
