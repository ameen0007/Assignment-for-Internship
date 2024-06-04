import React, { useEffect } from "react";
import "./bookcard.scss";

export const BookCard = ({ handleAddlist, error, books, loading }) => {
  useEffect(() => {}, [books]);

  return (
    <div className="MainCard">
      {books?.map((data, index) => (
        <div key={index} className="inner-maincard">
          <h5>Book Name:</h5>
          <p>{data.title}</p>
          <h5>Author Name:</h5>
          <p>{data.author_name}</p>
          <button onClick={() => handleAddlist(data)}>Add Bookshelf</button>
        </div>
      ))}
      {error && <h3>The Book Is Not Avalible</h3>}
    </div>
  );
};
