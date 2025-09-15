import Hero from "./Hero";
import Advant from "./Advant";
import Intro from "./Intro";
import Project from "./Project";
import Banner from "./Banner";
import HomeNews from "./HomeNews";
import { createClient } from "contentful";

const fetchDataByPage = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const result = await client.getEntries({
    content_type: "page",
    "fields.pageType": "home",
  });

  return result.items;
};

const HomePage = async () => {
  const page = await fetchDataByPage();
  console.log("🚀 ~ HomePage ~ page:", page);
  return (
    <>
      <Hero />
      <Advant />
      <Intro />
      <Project />
      <Banner />
      <HomeNews />
    </>
  );
};
export default HomePage;
