import React from "react";
import Search from "./components/searsh";
import Carousel from "./components/carousel";
import ListAnnonces from "./components/listAnnonces";
import Feedback from "./components/feedback";

const Page = () => {
  return (
    <div
      style={{
        position: "relative",
        top: "110px",
        backgroundColor: "#FFFEFE",
        marginBottom: "202px",
        width: "100%",
      }}
      className="flex flex-col items-center space-y-90"
    >
     

      <Search />
      <Carousel />
      <ListAnnonces />
      <Feedback />
    </div>
  );
};

export default Page;
