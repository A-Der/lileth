import React, { useEffect } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import { useDispatch } from "react-redux";
import { getPosts } from "./_actions/posts";
import Form from "./components/form/Form";
import Navbar from "./components/common/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/common/Footer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts);
  }, [dispatch]);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        {/* <Form /> */}
      </BrowserRouter>
      <Footer />
    </>
  );
}
export default App;
