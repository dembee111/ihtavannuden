import Hero from "./Hero";
import Advant from "./Advant";
import Intro from "./Intro";
import Project from "./Project";
import Banner from "./Banner";
import HomeNews from "./HomeNews";
import { createClient } from "contentful";
// news

async function fetchDataByPage() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });

  const result = await client.getEntries({
    content_type: "page",
    "fields.pageType": "home",
  });

  return result.items;
}

async function fetchDataByService() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });

  const result = await client.getEntries({
    content_type: "page",
    "fields.pageType": "service",
    "fields.locale": "mn",
  });

  return result.items;
}

async function fetchDataByBlog() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });

  const result = await client.getEntries({
    content_type: "blog",
    "fields.locale": "mn",
    limit: 2,
  });

  return result.items;
}

const HomePage = async () => {
  const blogs = await fetchDataByBlog();
  const service = await fetchDataByService();
  const serviceData: any = service[0].fields.components;
  const page = await fetchDataByPage();
  const homeDatas: any = page[0].fields.components;
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
