import React from "react";

const Search = (props) => {
  return (
    <div className="header">
      <div className="head">
        <h1>Movie Maven</h1>
      </div>
      <input
        type="suggestions"
        placeholder="Search movie..."
        list="suggestions"
        onChange={(e) => {
          props.search(e.target.value);
        }}
      />
    </div>
    
  );
};

export default Search;
