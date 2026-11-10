import React, { useEffect } from "react";
import MyServices from "./Home/MyServices";
import MyPortfolio from "./Home/MyPortfolio";

// Stand-alone, shareable pages for single home-page sections:
//   /services    -> only the "My Services" section
//   /portfolios  -> only the "My Portfolios" section
// Header and Footer come from App; the section components are the same ones
// the home page uses, so content stays in one place.
const SectionPage = ({ title, children }) => {
  useEffect(() => {
    const previous = document.title;
    document.title = title;
    window.scrollTo(0, 0);
    return () => {
      document.title = previous;
    };
  }, [title]);

  return <div className="main-container d-block w-100">{children}</div>;
};

export const ServicesPage = () => (
  <SectionPage title="Services | Papu Bhattacharya">
    <MyServices />
  </SectionPage>
);

export const PortfoliosPage = () => (
  <SectionPage title="Portfolios | Papu Bhattacharya">
    <MyPortfolio />
  </SectionPage>
);
