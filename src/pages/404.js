import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout-new";

const NotFoundPage = () => {
  return (
    <Layout>
      <div style={{ textAlign: "center", padding: "80px 24px" }}>
        <h1>404 — Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/">Go back home</Link>
      </div>
   </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>404 | Dr. Pavan Pai</title>;