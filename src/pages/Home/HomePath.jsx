import React from "react";
import BreadCrumbs from "../../commonComponents/BreadCrumbs";

const HomePath = () => {
  const paths = [
    { label: "Crytocurrencies", url: "/" },
    { label: "Bitcoin", url: "/products" },
  ];
  return (
    <div>
      <p>webwjehbdwjhbed</p>
      <BreadCrumbs paths={paths} />
    </div>
  );
};

export default HomePath;
