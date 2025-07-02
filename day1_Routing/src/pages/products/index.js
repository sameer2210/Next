import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div>
      <ul>
        <Link href="/products" />
      </ul>
    </div>
  );
};

export default index;
