import React from "react";
import { Catalog } from "../components/catalog";
import { useProducts } from "../hooks/products";
import { TopBar } from "../components/top-bar";

export const Home = () => {
  const {data,error,isLoading} = useProducts()

  return (
    <>
      <TopBar/>
      <Catalog  data = {data} error={error} isLoading= {isLoading} />
    </>
  );
};
