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
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const result = await client.getEntries({
    content_type: "page",
    "fields.pageType": "home",
  });

  return result.items;
}

const HomePage = async () => {
  const page = await fetchDataByPage();
  const homeDatas = page[0].fields.components;
  const advants = homeDatas.filter((item) => item.fields.slug === "advant");
  console.log("🚀 ~ HomePage ~ page:", advants);
  return (
    <>
      <Hero />
      <Advant advants={advants} />
      <Intro />
      <Project />
      <Banner />
      <HomeNews />
    </>
  );
};
export default HomePage;
