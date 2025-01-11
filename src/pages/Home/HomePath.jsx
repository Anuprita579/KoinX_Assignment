import React from "react";
//Common Component
import BreadCrumbs from "../../commonComponents/BreadCrumbs";

const HomePath = () => {
  const paths = [
    { label: "Crytocurrencies", url: "/" },
    { label: "Bitcoin", url: "/" },
  ];
  return (
    <div>
      <BreadCrumbs paths={paths} />
    </div>
  );
};

export default HomePath;
