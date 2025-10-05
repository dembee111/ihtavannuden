import { createClient } from "contentful";
import OurExperts from "./OurExperts";
import WhatCustomer from "./WhatCustomer";
import DoYou from "./DoYou";
import Hero from "./Hero";
import { unstable_cache } from "next/cache";

// ✅ Contentful client үүсгэх
const client = createClient({
  space: process.env.CONTENTFUL_SPACE as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

// ✅ Page data (about page)
const fetchDataByPage = unstable_cache(
  async () => {
    const result = await client.getEntries({
      content_type: "page",
      "fields.pageType": "about",
      "fields.locale": "mn",
    });
    return result.items[0]?.fields?.components || [];
  },
  ["about-page-data"],
  { revalidate: 3600 } // ⏱ 1 цаг тутамд cache шинэчлэнэ
);

// ✅ OurExperts data
const fetchDataByOurExperts = unstable_cache(
  async () => {
    const result = await client.getEntries({
      content_type: "ourExperts",
      "fields.locale": "mn",
    });
    return result.items[0] || null;
  },
  ["our-experts-data"],
  { revalidate: 3600 } // ⏱ 1 цаг
);

// ✅ OurBrands data
const fetchDataByOurBrands = unstable_cache(
  async () => {
    const result = await client.getEntries({
      content_type: "ourBrand",
      "fields.locale": "mn",
    });
    return result.items[0] || null;
  },
  ["our-brands-data"],
  { revalidate: 3600 } // ⏱ 1 цаг
);

const AboutPage = async () => {
  // 🚀 Promise.all ашиглан зэрэг татах
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
