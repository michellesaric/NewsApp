import React, { useState } from "react";
import Navbar from "../../navbar/Navbar";
import News from "../../news/News";
import LatestNews from "../../latest_news/LatestNews";

const Mobile = () => {
  const [isFeatured, setIsFeatured] = useState<boolean>(true);

  return (
    <section className="wrapper__mobile">
      <Navbar />
      <section className="button_wrapper">
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
      </section>
      {isFeatured ? <News /> : <LatestNews />}
    </section>
  );
};

export default Mobile;
