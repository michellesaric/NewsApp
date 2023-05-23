import React from "react";
import { Link } from "react-router-dom";
import LeftArrow from "../../components/icons/left_arrow/LeftArrow";
import HomeIcon from "../../components/icons/home/HomeIcon";

const Error = () => {
  return (
    <section className="error-page">
      <h2 className="error-page__404">
        4<span>0</span>4
      </h2>
      <p className="error-page__text">
        Whoops! Looks like you came to an incorrect page! Please click the
        button below to return to Home!
      </p>
      <Link to="/" className="error-page__redirect">
        <LeftArrow />
        <div className="error-page__redirect-wrapper">
          <HomeIcon color="#bb1e1e" />
          <h4 className="error-page__redirect-wrapper-home">Home</h4>
        </div>
      </Link>
    </section>
  );
};

export default Error;
