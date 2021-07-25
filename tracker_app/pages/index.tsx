import json5 from "json5";
import Head from "next/head";
import { FunctionComponent } from "react";
import { GetServerSideProps } from "next";
import SearchBar from "../components/SearchBar";
import { SpendingCardList } from "../components/SpendingCard";
//import SpendingCard from "../components/SpendingCard";

const Home: FunctionComponent<{ spendingData: any }> = (spendingData) => {
  console.log(spendingData.spendingData);
  return (
    <div>
      <Head>
        <title>Budget Tracker</title>
        <meta name="my budget tracker" content="my budget tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchBar />
      {/* spendingData is just an Object, need to do spendingData.spendingData to get the array*/}
      <SpendingCardList spendingData={spendingData.spendingData} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const spendingData = await res.json();

  return {
    props: {
      spendingData,
    },
  };
};

export default Home;
