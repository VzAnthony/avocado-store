import React from "react";
import Hero from "@components/Hero";
import ListAvocados from "@components/ListAvocados";

export const getStaticProps = async () => {
  const response = await fetch(
    "https://avocado-store-hg1yjakdf.vercel.app/api/avo"
  );
  const avocados = await response.json();
  return {
    props: {
      avocados,
    },
  };
};

const Home = ({ avocados }) => {
  return (
    <>
      <Hero />
      <ListAvocados listAvocados={avocados} />
    </>
  );
};

export default Home;
