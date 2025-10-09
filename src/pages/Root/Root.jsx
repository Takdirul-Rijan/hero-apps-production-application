import React from "react";
import Navbar from "../../components/Header/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../../components/Footer/Footer";
import SpinnerLoading from "../../components/SpinnerLoading/SpinnerLoading";

const Root = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      <Navbar></Navbar>
      <div>
        {isLoading ? <SpinnerLoading></SpinnerLoading> : <Outlet></Outlet>}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
