import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Container1 from "../components/Container1";
import Container2 from "../components/Container2";
import Container3 from "../components/Container3";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Container1></Container1>
        <Container2></Container2>
        <Container3></Container3>
      </main>
    </div>
  );
};

export default Home;
