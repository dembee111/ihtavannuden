import Hero from "./Hero";
import Advant from "./Advant";
import Intro from "./Intro";
import Project from "./Project";
import Banner from "./Banner";
import HomeNews from "./HomeNews";
import { createClient } from "contentful";

// 🚀 Disable ISR / caching for Contentful
export const revalidate = 0;

const client = createClient({
  space: process.env.CONTENTFUL_SPACE as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

// -------- Fetch functions -------- //
async function fetchDataByPage() {
  const result = await client.getEntries({
    content_type: "page",
    "fields.pageType": "home",
  });
  return result.items;
}

async function fetchDataByService() {
  const result = await client.getEntries({
    content_type: "page",
    "fields.pageType": "service",
    "fields.locale": "mn",
  });
  return result.items;
}

async function fetchDataByBlog() {
  const result = await client.getEntries({
    content_type: "blog",
    "fields.locale": "mn",
    limit: 2,
  });
  return result.items;
}

// -------- Page Component -------- //
const HomePage = async () => {
  // ⚡ Parallel fetch with Promise.all
  const [blogs, service, page] = await Promise.all([
    fetchDataByBlog(),
    fetchDataByService(),
    fetchDataByPage(),
  ]);

  const serviceData: any = service[0]?.fields?.components || [];
  const homeDatas: any = page[0]?.fields?.components || [];

  const advants = homeDatas.filter(
    (item: any) => item.fields.slug === "advant"
  );
  const homeHero = homeDatas.filter(
    (item: any) => item.fields.slug === "home-hero"
  );
  const homeAbout = homeDatas.filter(
    (item: any) => item.fields.slug === "home-about"
  );
  const services = serviceData.filter(
    (item: any) => item.fields.slug === "service-list"
  );

  return (
    <>
      <Hero homeHero={homeHero} />
      <Advant advants={advants} />
      <Intro homeAbout={homeAbout} />
      <Project services={services} />
      <Banner />
      <HomeNews blogs={blogs} />
    </>
  );
};

export default HomePage;
