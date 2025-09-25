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

export async function generateMetadata({ params }: any) {
  const { slug } = await params;
  const blogDetail: any = await blogDetailsByName(slug);

  if (!blogDetail) {
    return {
      title: "Мэдээ олдсонгүй | Их таван нүдэн ХХК",
      description:
        "Таны хайсан үйлчилгээ олдсонгүй. Бидний санал болгож буй бусад үйлчилгээг сонирхоно уу.",
    };
  }

  const { title, image } = blogDetail?.fields ?? {};

  return {
    title: `${title} | Их таван нүдэн ХХК`,
    description:
      title ||
      "Их таван нүдэн ХХК-ийн мэдээ, мэдээллээс хамгийн сүүлийн үеийн мэдээллийг аваарай.",
    keywords: `${title}, мэдээ, мэдээлэл, Монгол бизнес, тоног төхөөрөмж, үйлчилгээ`,
    openGraph: {
      title: `${title} | Их таван нүдэн ХХК`,
      description:
        title ||
        "Их таван нүдэн ХХК-ийн мэдээ, мэдээллээс хамгийн сүүлийн үеийн мэдээллийг аваарай.",
      url: `https://ikhtavannuden.mn/news/${slug}`,
      type: "article",
      images: [
        {
          url:
            image?.fields?.file?.url ||
            "https://images.ctfassets.net/5yb73dsvpmu0/3Ti1t3qMRWd7IdIEpOkgrO/558cf821e14e3ef96a7f24b53f30ca6c/cover.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}

const page = async ({ params }: any) => {
  const { slug } = await params;
  const blogsAll = await fetchDataByNameProdcut();
  const blogDetails = await blogDetailsByName(slug);
  return <BlogDetails blogDetails={blogDetails[0]} blogsAll={blogsAll} />;
};

export default page;
