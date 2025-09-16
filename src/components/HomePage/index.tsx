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

const HomePage = async () => {
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
  // console.log("🚀 ~ HomePage ~ page:", homeAbout);
  return (
    <>
      <Hero homeHero={homeHero} />
      <Advant advants={advants} />
      <Intro homeAbout={homeAbout} />
      <Project />
      <Banner />
      <HomeNews />
    </>
  );
};
export default HomePage;
