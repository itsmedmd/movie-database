import React from "react"
import localStyles from './style.module.css';
import Header from "../components/header";
import Main from "../components/main";

export default function Home() {
  return (
    <div className={localStyles.pageContent}>
      <Header/>
      <Main/>
    </div>
  );
}
