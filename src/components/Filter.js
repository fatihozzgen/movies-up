import React from "react";
import Search from "./Search";

function Filter() {
  return (
    <>
      <div className="filter">
        <div className="year-container">
          <select className="filter-year">
            <option value="">Year</option>
          </select>
        </div>

        <div className="type-container">
          <select className="filter-type">
            <option value="">Type</option>
          </select>
        </div>

        <div className="filter-search">
          <Search />
        </div>

        <div className="filter-button">
          <button>Search</button>
        </div>
      </div>
      ;
    </>
  );
}

export default Filter;
