import React, { useEffect } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import { useDispatch } from "react-redux";
import { getPosts } from "./_actions/posts";
import Form from "./components/form/Form";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./components/pages/Home";
import Development from "./components/pages/Development";
import HealingClinics from "./components/pages/HealingClinics";
import Membership from "./components/pages/Membership";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts);
  }, [dispatch]);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/Development&Training" component={Development} />
        <Route exact path="/HealingClinics" component={HealingClinics} />
        <Route exact path="/BecomeAMember" component={Membership} />
        {/* <Form /> */}
      </BrowserRouter>
      <Footer />
    </>
  );
}
export default App;
