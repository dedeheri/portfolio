import React from "react";

// compontents
import Layout from "../components/Layout";
import Card from "../components/Card";

import data from "../data.json";

function Portfolio() {
  return (
    <Layout>
      <h1 className="font-medium text-5xl">Portfolio</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-3">
        {data?.map(({ id, image, title, demo, technology }) => (
          <Card
            key={id}
            id={id}
            image={image}
            title={title}
            demo={demo}
            technology={technology}
          />
        ))}
      </div>
    </Layout>
  );
}

export default Portfolio;
