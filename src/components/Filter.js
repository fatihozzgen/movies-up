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
            <option value="">1990</option>
            <option value="">1991</option>
            <option value="">1992</option>
            <option value="">1993</option>
            <option value="">1994</option>
            <option value="">1995</option>
            <option value="">1996</option>
            <option value="">1997</option>
            <option value="">1998</option>
            <option value="">1999</option>
            <option value="">2000</option>
            <option value="">2001</option>
            <option value="">2002</option>
            <option value="">2003</option>
            <option value="">2004</option>
            <option value="">2005</option>
            <option value="">2006</option>
            <option value="">2007</option>
            <option value="">2008</option>
            <option value="">2009</option>
            <option value="">2010</option>
            <option value="">2011</option>
            <option value="">2012</option>
            <option value="">2013</option>
            <option value="">2014</option>
            <option value="">2015</option>
            <option value="">2016</option>
            <option value="">2017</option>
            <option value="">2018</option>
            <option value="">2019</option>
            <option value="">2020</option>
            <option value="">2012</option>
            <option value="">2022</option>
          </select>
        </div>

        <div className="select-dropdown">
          <select className="filter-type">
            <option value="">Type</option>
            <option value="">Adventure</option>
            <option value="">Comedy</option>
            <option value="">Drama</option>
            <option value="">Horror</option>
            <option value="">Romance</option>
            <option value="">Science fiction</option>
            <option value="">Fantasy</option>
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
