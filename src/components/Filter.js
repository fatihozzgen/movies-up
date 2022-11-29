import React from "react";
import Search from "./Search";
import { mainContext, useContext } from "../context";

function Filter() {
  const { filterData, setFilterData } = useContext(mainContext);

  return (
    <>
      <div className="filter">
        <div className="select-dropdown">
          <select className="filter-year">
            <option value="">Year</option>
            <option value="">Year</option>
            <option value="">Year</option>
            <option value="">Year</option>
            <option value="">Year</option>
          </select>
        </div>

        <div className="select-dropdown">
          <select className="filter-type">
            <option value="">Type</option>
            <option value="">Type</option>
            <option value="">Type</option>
            <option value="">Type</option>
            <option value="">Type</option>
          </select>
        </div>

        <div className="filter-search">
          <Search
            filtred={(veri) => setFilterData([...veri].join(""))}
            allChange={(e, filtred) => filtred(e.target.value)}
            searchValue={filterData}
          />
        </div>

        <div className="filter-button">
          <button>Search</button>
        </div>
      </div>
    </>
  );
}

export default Filter;
