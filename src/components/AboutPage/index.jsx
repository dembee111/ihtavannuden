import OurExperts from "./OurExperts";
import WhatCustomer from "./WhatCustomer";
import DoYou from "./DoYou";
import Hero from "./Hero";
const AboutPage = () => {
  return (
    <section className="my-12 lg:my-20 2xl:my-28 pt-24">
      <Hero />
      <OurExperts />
      <WhatCustomer />
      <DoYou />
    </section>
  );
};

export default AboutPage;
