import React, { useEffect } from "react";
import "../components/bookcard.scss";
import { BiColor } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export const BookshelfPage = ({ favbooks, setFavBook }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const storedFavBooks = JSON.parse(localStorage.getItem("favbooks"));
    if (storedFavBooks) {
      setFavBook(storedFavBooks);
    }
  }, [favbooks]);
  const handlereturn = () => {
    navigate("/");
  };
  console.log(favbooks, "inshelfpage");

  return (
    <div
      style={{
        color: "rgb(52, 172, 88)",
        fontFamily: "Poppins",
        fontSize: "20px",
        fontWeight: "500",
        textAlign: "center",
        marginTop: "10px",
      }}
    >
      <div>My Bookshelf</div>
      <p
        onClick={handlereturn}
        style={{ textAlign: "left", marginLeft: "20px" }}
      >
        <FaArrowLeft />
      </p>
      <div className="MainCard">
        {favbooks?.map((data, index) => (
          <div key={index} className="inner-maincard">
            <h5>Book Name:</h5>
            <p>{data.title}</p>
            <h5>Author Name:</h5>
            <p>{data.author_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
