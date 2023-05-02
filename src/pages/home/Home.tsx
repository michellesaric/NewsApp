import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import News from "./news/News";
import LatestNews from "./latest_news/LatestNews";

const Home = () => {
  const [isFeatured, setIsFeatured] = useState<boolean>(true);

  return (
    <div className="wrapper">
      <Navbar />
      <div className="button_wrapper">
        <button
          onClick={() => setIsFeatured(true)}
          className={
            "btn " +
            (isFeatured ? "button_wrapper-red" : "button_wrapper-regular")
          }
        >
          Featured
        </button>
        <button
          onClick={() => setIsFeatured(false)}
          className={
            "btn " +
            (!isFeatured ? "button_wrapper-red" : "button_wrapper-regular")
          }
        >
          Latest
        </button>
      </div>
      {isFeatured ? <News /> : <LatestNews />}
    </div>
  );
};

export default Home;
