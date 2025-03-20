import React from "react";
import ArticleImage from "../components/ArticleImage";
import styles from "../components/styles/Clients.module.css";
import Layout from "../components/Layout";
import SmallHero from "../components/SmallHero";

const Article: React.FC = () => {
  return (
    <Layout>
      <SmallHero
        title="Our Clients"
        text="Akron Snowmen is best represented by our long-standing relationships
          with our clients. We recognize the level of trust and quality of
          workmanship required to maintain a good rapport with those we serve.
          If you're looking for confirmation that Akron Snowmen is a reputable
          company with outstanding customer service, just ask them."
        imgPath="./lights.jpg"
      />

      <div className="max-w-4xlx pl-16 pt-8 bg-[#3d2c63]">
        <ArticleImage
          image="./collage-2024.png"
          // image="./collage-2024-transparent.png"
          direction="right"
          className="w-[40rem] pr-24"
        />
        <h2 className="text-white">
          Among the list of Akrons Snowmen's current and former clients include:
        </h2>

        {/* this is the same as BodyText, but apparently Next won't let you nest ul's in p's.
        So I'm just using a div */}
        <div className="text-text-white max-w-[900px] leading-150">
          <ul className="pl-8 space-y-4 mb-10">
            <li className="font-bold text-lg">Stark State College</li>
            <li className="font-bold text-lg">Coventry Schools</li>
            <li className="font-bold text-lg">Target</li>
            <li className="font-bold text-lg">Lowe's Home Improvement</li>
            <li className="font-bold text-lg">United States Postal Service</li>
            <li className="font-bold text-lg">Walmart</li>
            <li className="font-bold text-lg">Akron-Beacon Journal</li>
            <li className="font-bold text-lg">City of Wadsworth</li>
            <li className="font-bold text-lg">
              American Medical Response (24-hour Ambulance Service)
            </li>
            <li className="font-bold text-lg">
              Progressive Insurance Company (Akron Headquarters)
            </li>
            <li className="font-bold text-lg">Medina County Parks</li>
            <li className="font-bold text-lg">BJ's Wholesale</li>
            <li className="font-bold text-lg">
              Shantz Cartage (Semi Truck Terminal)
            </li>
            <li className="font-bold text-lg">Save-A-Lot Grocery Stores</li>
            <li className="font-bold text-lg">FedEx Corporation</li>
            <li className="font-bold text-lg">
              Associated Property Management (Condominiums throughout the
              Greater Akron area)
            </li>
            <li className="font-bold text-lg">
              TH Martin (Akron Children's Hospital Service Provider)
            </li>
            <li className="font-bold text-lg">Citizens Bank</li>
            <li className="font-bold text-lg">Best Buy</li>
            <li className="font-bold text-lg">Barnes and Noble Bookstores</li>
          </ul>
        </div>
      </div>
      {/* </ArticlePage> */}
    </Layout>
  );
};

export default Article;
