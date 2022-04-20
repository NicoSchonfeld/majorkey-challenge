import Head from "next/head";
import React from "react";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Hola</title>
      </Head>

      <Header />

      <div>{children}</div>
    </>
  );
}
