import BlogDetails from "@/components/BlogPage/BlogDetails";
import { createClient } from "contentful";
import { unstable_cache } from "next/cache";

const fetchDataByNameProdcut = unstable_cache(
  async () => {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE as string,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
    });

    const result = await client.getEntries({
      content_type: "blog",
    });

    return result.items;
  },
  ["blogs-all"],
  { revalidate: 10 }
);
const blogDetailsByName = unstable_cache(
  async (slug) => {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE as string,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
    });

    const result = await client.getEntries({
      content_type: "blog",
      "fields.slug": slug,
    });

    return result.items;
  },
  ["blogs-all"],
  { revalidate: 10 }
);

const page = async ({ params }: any) => {
  const { slug } = params;
  const blogsAll = await fetchDataByNameProdcut();
  console.log("blogsAll", blogsAll);
  const blogDetails = await blogDetailsByName(slug);
  console.log("blogDetails", blogDetails);
  return <BlogDetails blogDetails={blogDetails[0]} blogsAll={blogsAll} />;
};

export default page;
