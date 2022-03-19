import React from "react";
import "./SearchBox.css";

const SearchBox = ({ placeholder, handleChange, className }) => {
  return (
    <input
      className={className}
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
