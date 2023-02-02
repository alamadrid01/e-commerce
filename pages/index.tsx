import React from "react";
import Hero from "../components/homepage-section/hero";
import Collection from "../components/homepage-section/collection";
import Choose from "../components/homepage-section/choose";
import Product from "../components/homepage-section/product";
import Best from "../components/homepage-section/best";
import Deals from "../components/homepage-section/deals";
import Newsletter from "../components/homepage-section/newsletter";

const homepage = () => {

  return (
    <div>
      <Hero />
      <Collection />
      <Choose />
      <Best />
      <Product />
      <Deals />
      <Newsletter />
    </div>
  );
};

export default homepage;
