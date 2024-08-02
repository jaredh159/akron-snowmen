import React from "react";
import BrineAnswers from "../components/BrineAnswers";
import Layout from "../components/Layout";
import SmallHero from "../components/SmallHero";

const BrinePage: React.FC = () => {
  return (
    <Layout>
      <SmallHero
        imgPath="./brineTank.jpg"
        title="Why make the switch from salt?"
        text="We asked the same question. And after two years of research and testing on our own walkways and parking lots, we have a few answers."
      />
      <BrineAnswers />
    </Layout>
  );
};

export default BrinePage;
