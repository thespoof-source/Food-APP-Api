import React, { useState } from "react";

const Searchbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="search"
            placeholder="Enter food name"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Searchbar;
