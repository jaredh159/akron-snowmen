import React from "react";
import ArticlePage from "../components/ArticlePage";
import BodyText from "../components/BodyText";
import ArticleImage from "../components/ArticleImage";
import Layout from "../components/Layout";

const Article: React.FC = () => {
  return (
    <Layout>
      <ArticlePage
        color="rgba(0, 0, 0, 0.7)"
        image="./lights.jpg"
        headline="Our Clients"
      >
        <div className="max-w-4xl">
          <BodyText>
            Akron Snowmen is best represented by our long-standing relationships
            with our clients. We recognize the level of trust and quality of
            workmanship required to maintain a good rapport with those we serve.
            If you’re looking for confirmation that Akron Snowmen is a reputable
            company with outstanding customer service, just ask them.
          </BodyText>
          <ArticleImage image="./logo-cloud-2.png" direction="right" />
          <BodyText>
            Among the list of Akrons Snowmen's current and former clients
            include:
          </BodyText>
          <ul className="list-disc mb-6 pl-8 space-y-4">
            <li>
              <span>Stark State College</span>
            </li>
            <li>
              <span>Coventry Schools</span>
            </li>
            <li>
              <span>Lowe's Home Improvement</span>
            </li>
            <li>
              <span>
                United States Postal Service (should we say which locations?)
              </span>
            </li>
            <li>
              <span>Akron-Beacon Journal</span>
            </li>
            <li>
              <span>American Medical Response (24-hour Ambulance Service)</span>
            </li>
            <li>
              <span>Progressive Insurance Company (Akron Headquarters)</span>
            </li>
            <li>
              <span>BJ's wholesale</span>
            </li>
            <li>
              <span>Shantz Cartage (Semi Truck Terminal)</span>
            </li>
            <li>
              <span>Save-A-Lot Grocery Stores</span>
            </li>
            <li>
              <span>FedEx Corporation</span>
            </li>
            <li>
              <span>
                Associated Property Management (Condominiums throughout the
                Greater Akron area)
              </span>
            </li>
            <li>
              <span>
                TH Martin (Akron Children’s Hospital Service Provider)
              </span>
            </li>
            <li>
              <span>Citizens Bank</span>
            </li>
            <li>
              <span>Best Buy</span>
            </li>
            <li>
              <span>Barnes and Noble Bookstores</span>
            </li>
          </ul>
        </div>
      </ArticlePage>
    </Layout>
  );
};

export default Article;
