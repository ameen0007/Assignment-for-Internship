import React, { useEffect, useState } from "react";
import "./booksearch.scss";

import { IoSearch } from "react-icons/io5";
export const BookSearch = ({ setUserEnterName, userEnterName }) => {
  return (
    <div className="main-search">
      <div className="inner-s">
        <p>
          <IoSearch />
        </p>
        <input
          value={userEnterName}
          onChange={(e) => setUserEnterName(e.target.value)}
          type="text"
          placeholder="Search Your favorite Books....!"
        />
      </div>
    </div>
  );
};
