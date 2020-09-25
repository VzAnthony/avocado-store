import React from "react";
import Avocado from "@components/Avocado";
import { item } from "./Item.module.css";

export const getStaticPaths = async () => {
  const response = await fetch(
    "https://avocado-store-hg1yjakdf.vercel.app/api/avo"
  );
  const { data: avocados } = await response.json();
  const paths = avocados.map(({ id }) => ({
    params: {
      id,
    },
  }));
  return {
    paths,
    // Incremental Static Generation
    // 404 for everything else.
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const response = await fetch(
    `https://avocado-store-hg1yjakdf.vercel.app/api/avo/${id}`
  );
  const avo = await response.json();
  return {
    props: {
      avo,
    },
  };
};

const ProductItem = ({ avo }) => {
  return (
    <section className={item}>
      <Avocado avo={avo} />
    </section>
  );
};

export default ProductItem;
