import Project from "@/components/HomePage/Project";
import { createClient } from "contentful";

async function fetchDataByPage() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });

  const result = await client.getEntries({
    content_type: "page",
    "fields.pageType": "service",
  });

  return result.items;
}

const ProjectPage = async () => {
  const page = await fetchDataByPage();
  const homeDatas: any = page[0].fields.components;
  const services = homeDatas.filter(
    (item: any) => item.fields.slug === "service-list"
  );
  return <Project bgColor={true} services={services} />;
};
export default ProjectPage;
