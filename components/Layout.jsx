import Head from "next/head";
import React from "react";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>MajorKey App || Challenge</title>
        <link rel="shortcut icon" href={"/image/M.svg"} />
      </Head>

      <Header />

      <div>{children}</div>
    </>
  );
}
