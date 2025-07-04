/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import React from "react";

const singleProduct = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>Single Product Page inside products folder</h1>
      <h2>its a Dynamic product file</h2>
    </div>
  );
};

export default singleProduct;
