import { Route, Routes } from "react-router-dom";
import { Mainpage } from "./Pages/Mainpage";
import { BookshelfPage } from "./Pages/BookshelfPage";
import { useState } from "react";

function App() {
  const [favbooks, setFavBook] = useState([]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Mainpage favbooks={favbooks} setFavBook={setFavBook} />}
        />
        <Route
          path="/bookshelf"
          element={
            <BookshelfPage favbooks={favbooks} setFavBook={setFavBook} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
