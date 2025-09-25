import { createClient } from "contentful";
import BlogCard from "./BlogCard";
import BlogList from "./BlogList";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

async function fetchDataByBlogs() {
  const result = await client.getEntries({
    content_type: "blog",
    "fields.locale": "mn",
  });
  return result.items;
}

const BlogPage = async () => {
  const blogsData = await fetchDataByBlogs();
  return (
    <div className="mt-32 mb-12  md:mb-24 md:mt-42 px-4 2xl:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-12 gap-0 md:gap-8 lg:gap-12 items-start space-y-12">
          <div className="col-span-12 md:col-span-8 space-y-8">
            <BlogCard blogsData={blogsData} />
          </div>
          <div className="col-span-12 md:col-span-4 space-y-6">
            <BlogList blogsData={blogsData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
