import OurExperts from "./OurExperts";
import WhatCustomer from "./WhatCustomer";
import DoYou from "./DoYou";
import Hero from "./Hero";
const AboutPage = () => {
  return (
    <section className="mt-12 lg:mt-20 2xl:mt-28 pt-24">
      <Hero />
      <OurExperts />
      <WhatCustomer />
      <DoYou />
    </section>
  );
};

export default AboutPage;
