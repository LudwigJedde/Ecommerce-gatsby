import React from "react";
/*import { Link } from "gatsby";*/

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title = "Accueil"/>
    <h1> Salut Ludwig </h1>  
    <p> Welcome to your new Gatsby site. </p>
  </Layout>
);

export default IndexPage;