import React, { useState } from "react";

function SearchBar() {
  const [searchText, setSearchText] = useState("");

  const changeSearchText = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="searchbar-container">
      <input
        type="search"
        className="searchbar"
        id="text_search"
        onChange={(e) => {
          changeSearchText(e);
        }}
        value={searchText}
        placeholder="Search"
      ></input>
      {/* <button className="btn searchbar-button searchbar-searchbtn">
        <i className="fa fa-search"></i>
      </button>
      <button className="btn searchbar-button searchbar-resetbtn">
        <i className="fa fa-undo"></i>
      </button> */}
    </div>
  );
}

export default SearchBar;
