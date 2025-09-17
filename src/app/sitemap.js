import { createClient } from "contentful";

const fetchData = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const rest = await client.getEntries({
    content_type: "blog",
  });
  return rest.items || [];
};

export default async function sitemap() {
  const blogs = await fetchData();

  // Ensure blogs and services are defined before mapping
  const news = blogs?.map((blog) => ({
    url: `https://ikhtavannuden.mn/news/${blog?.fields?.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: "https://ikhtavannuden.mn",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://ikhtavannuden.mn/project",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://ikhtavannuden.mn/about",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://ikhtavannuden.mn/news",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://ikhtavannuden.mn/contact",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...(news || []), // fallback to an empty array if news is undefined
  ];
}
