import OurExperts from "./OurExperts";
import WhatCustomer from "./WhatCustomer";
import DoYou from "./DoYou";
import Hero from "./Hero";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export async function fetchDataByPage() {
  try {
    const result = await client.getEntries(
      {
        content_type: "page",
        "fields.pageType": "about",
        "fields.locale": "mn",
      },
      { cache: "no-store" } // 🔴 cache устгах тохиргоо
    );

    return result.items[0]?.fields?.components || [];
  } catch (error) {
    console.error("Contentful fetch error:", error);
    return [];
  }
}

async function fetchDataByOurExperts() {
  try {
    const result = await client.getEntries(
      {
        content_type: "ourExperts",
        "fields.locale": "mn",
      },
      { cache: "no-store" }
    );
    return result.items[0] || null;
  } catch (error) {
    console.error("OurExperts fetch error:", error);
    return null;
  }
}

async function fetchDataByOurBrands() {
  try {
    const result = await client.getEntries(
      {
        content_type: "ourBrand",
        "fields.locale": "mn",
      },
      { cache: "no-store" }
    );
    return result.items[0] || null;
  } catch (error) {
    console.error("OurBrand fetch error:", error);
    return null;
  }
}

const AboutPage = async () => {
  const [aboutData, ourExpertsData, ourBrandData] = await Promise.all([
    fetchDataByPage(),
    fetchDataByOurExperts(),
    fetchDataByOurBrands(),
  ]);

  return (
    <section className="mt-12 lg:mt-20 2xl:mt-28 pt-24">
      <Hero aboutData={aboutData} />
      <OurExperts data={ourExpertsData} />
      <WhatCustomer data={ourBrandData} />
      <DoYou />
    </section>
  );
};

export default AboutPage;
