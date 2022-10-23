import React from "react";

const Searchbar = () => {
  return (
    <div className="searchbar">
      <form>
        <div className="form-group">
          <input type="search" placeholder="Enter food name" value="" />
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
