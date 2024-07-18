import React from "react";
import BrineAnswers from "../components/BrineAnswers";
import BrineHero from "../components/BrineHero";
import Layout from "../components/Layout";

const BrinePage: React.FC = () => {
  return (
    <Layout>
      <BrineHero />
      <BrineAnswers />
    </Layout>
  );
};

export default BrinePage;
