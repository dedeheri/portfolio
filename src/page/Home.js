import React from "react";
import Banner from "../components/Banner";

// components
import Layout from "../components/Layout";
import Portfolio from "../components/Portfolio";
import Skill from "../components/Skill";

function Home() {
  return (
    <Layout>
      <div className="space-y-32">
        <Banner />
        <Skill />
        <Portfolio />
      </div>
    </Layout>
  );
}

export default Home;
