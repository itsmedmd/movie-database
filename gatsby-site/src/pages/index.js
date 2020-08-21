import React from "react"
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div className="page-content">
      <Helmet>
        <meta name="description" content="A frontend development portfolio website of Deimantas Butėnas where you can see his work."/>
        <meta name="keywords" content="web development, frontend, portfolio, design, web design" />
        <meta property="og:title" content="Frontend developer Deimantas Butėnas" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="A portfolio website of Deimantas Butėnas where you can see his work." />
        <meta property="og:image" content="meta-og-image.png" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://www.deimantasbutenas.lt/" />
        <link rel="canonical" href="https://www.deimantasbutenas.lt/" />
        <title>{`DMD - Rest Countries`}</title>
      </Helmet>
      <Header/>
      <main></main>
    </div>
  );
}
