import React from "react";
import errorImg from "../../assets/error-404.png";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-center">
      <div>
        <img src={errorImg} alt="" className="mx-auto mb-6" />
        <h1 className="text-5xl font-bold">Oops, page not found!</h1>
        <p className="text-xl text-gray-500 font-normal mt-4 mb-6">
          The page you are looking for is not available
        </p>
        <button
          onClick={handleGoBack}
          className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-[16px] font-[600] text-white hover:bg-blue-900 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
