import React, { useState } from "react";

import { MdSearch } from "react-icons/md";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const history = useHistory();
  const { path, url } = useRouteMatch();

  const search = () => {
    console.log("searching for", searchTerm);
    history.push(`/student/search/${searchTerm}`);
  };

  return (
    <>
      <div className="m-auto w-3/5">
        <h1 className="uppercase text-center text-4xl mb-4 font-semibold">
          Tutor Search
        </h1>
        <span
          className={`flex border-gray-900 rounded ${
            isFocused ? "border-4" : "border-2"
          } `}
        >
          <input
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className=" inline-block w-full ml-2 focus:outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <button className="m-2 cursor-pointer  w-10 h-10" onClick={search}>
            <MdSearch className="bg-blue-500 w-full h-full rounded" />
          </button>
        </span>
      </div>
    </>
  );
};
export default Home;
