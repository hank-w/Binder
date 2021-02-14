import React from "react";
import { useParams } from "react-router-dom";

const SearchResult = (props) => {
  const { searchRequest } = useParams();
  console.log("searchString", searchRequest);

  return (
    <>
      <h1>SearchResult</h1>
      <span>Searched for: {searchRequest}</span>
    </>
  );
};
export default SearchResult;
