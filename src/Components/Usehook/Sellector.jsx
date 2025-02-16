import React from "react";
import { useSelector } from "react-redux";

const OtherComponent = () => {
  // Accessing the global searchTerm
  const searchTerm = useSelector((state) => state.search.searchTerm);

  return (
    <div>
      <h3>Current Search Term: {searchTerm}</h3>
      {/* You can use this searchTerm to filter or display results */}
    </div>
  );
};

export default OtherComponent;
