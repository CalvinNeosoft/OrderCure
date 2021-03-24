import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

function SearchContainer() {
  const history = useHistory();
  const [searchText, setSearchText] = useState("");

  const changeSearchText = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div className="search-container">
      <div className="searchbar-container">
        <input
          type="search"
          onChange={(e) => {
            changeSearchText(e);
          }}
          value={searchText}
          placeholder="Search"
          class="searchbar"
        ></input>
        <Link className="search-cancel" onClick={() => history.goBack()}>
          Cancel
        </Link>
      </div>
    </div>
  );
}

export default SearchContainer;
