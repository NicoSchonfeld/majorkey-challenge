import Head from "next/head";
import React from "react";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>MajorKey App || Challenge</title>
      </Head>

      <Header />

      <div>{children}</div>
    </>
  );
}
