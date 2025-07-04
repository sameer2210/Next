import { useRouter } from "next/router";
import React from "react";

const NestednameId = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>NestednameId Page inside proudcts folder</h1>
      <div>{router.query.nestdetail}</div>
    </div>
  );
};

export default NestednameId;
