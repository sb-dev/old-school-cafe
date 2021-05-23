import "./Home.css";
import '../../theme/dashboard.scss'

import { Layout } from "../../components/layout";
import React from "react";

function Home() {
    return (
      <Layout page={"home"}>
          <div className="container Dashboard">
            <div className="inner-container"></div>
          </div>
      </Layout>
    );
}

export default Home;
