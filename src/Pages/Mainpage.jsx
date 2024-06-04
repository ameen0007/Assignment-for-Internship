import React, { useEffect, useState } from "react";
import { BookCard } from "../components/BookCard";
import { BookSearch } from "../components/BookSearch";
import SyncLoader from "react-spinners/SyncLoader";
import "./mainpage.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Mainpage = ({ favbooks, setFavBook }) => {
  const [books, setBook] = useState([]);

  const [userEnterName, setUserEnterName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, SetError] = useState(false);
  useEffect(() => {
    HandleFetchApi();
  }, [userEnterName]);

  const navigate = useNavigate();

  const handleAddlist = (data) => {
    setFavBook((prevFavBooks) => [...prevFavBooks, data]);
    localStorage.setItem("favbooks", JSON.stringify([...favbooks, data]));
    console.log(favbooks, "innerfun");
  };
  console.log(favbooks, "outerfun");

  const handlebookshelf = () => {
    navigate("/bookshelf");
  };

  const HandleFetchApi = async () => {
    console.log("haa");
    if (userEnterName) {
      try {
        setLoading(true);
        console.log(userEnterName, "usedata");
        const url = `https://openlibrary.org/search.json?q=${userEnterName}&limit=10&page=1`;
        const result = await axios.get(url);
        console.log(result, "outer if");
        if (result.data.numFound === 0) {
          console.log(result, "inner if");

          if (!userEnterName == "") {
            SetError(true);
            console.log(error, "error");
            setBook(result.data.docs);
          } else {
            SetError(false);
            setBook(result.data.docs);
          }
        } else {
          SetError(false);
          setLoading(false);
          console.log(result.data.docs, "initall resilt");
          setBook(result.data.docs);
        }
      } catch (error) {
        setLoading(false);
        console.log(error, "error");
      }
      setLoading(false);
    } else {
      setBook([]);
    }
  };

  console.log(books, "state");

  const override = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1000,
  };
  const color = "rgb(52, 172, 88)";

  return (
    <div className="mainpage">
      {loading && (
        <div className="spinner">
          <SyncLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={15}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      <div className="inner-m">
        <h3>Ebook</h3>
        <div>
          <button onClick={handlebookshelf}>My Bookshelf</button>
        </div>
      </div>
      <BookSearch
        setUserEnterName={setUserEnterName}
        userEnterName={userEnterName}
      />
      <BookCard
        handleAddlist={handleAddlist}
        error={error}
        loading={loading}
        books={books}
      />
    </div>
  );
};
