import React from "react";
import Search from "./components/searsh";
import Carousel from "./components/carousel";
import ListAnnonces from "./components/listAnnonces";
import Feedback from "./components/feedback";
import PromoteAnnonce from "./components/listingSection";
import Stats from "./components/stats";
import WhyUs from "./components/whyUs";

const Page = () => {
  return (
    <div
      style={{
        position: "relative",
        top: "110px",
        backgroundColor: "#FFFEFE",
        width: "100%",
      }}
      className="flex flex-col  items-center space-y-90"
    >
     
      <Search />
      <Carousel />
      <ListAnnonces />
      <WhyUs/>
      <Feedback />
      <PromoteAnnonce/>
      <Stats/>
    </div>
  );
};

export default Page;
