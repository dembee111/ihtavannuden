import BlogPage from "@/components/BlogPage";

export const metadata = {
  title: "Мэдээ, мэдээлэл | Их таван нүдэн ХХК",
  description: `Их таван нүдэн ХХК-ийн хамгийн сүүлийн үеийн мэдээ, мэдээлэл, шинэ бүтээгдэхүүн, 
  үйлчилгээ, төслүүдийн талаархи мэдээллийг эндээс аваарай.`,
  metadataBase: new URL("https://ikhtavannuden.mn"),
  keywords: [
    "Их таван нүдэн ХХК",
    "мэдээ",
    "шинэ бүтээгдэхүүн",
    "үйлчилгээ",
    "төсөл",
    "гадаад худалдаа",
    "уул уурхай",
    "техник нийлүүлэлт",
    "барилгын материал",
    "цэцэрлэгжүүлэлт",
  ],
  authors: [{ name: "Их таван нүдэн ХХК" }],
  openGraph: {
    title: "Мэдээ, мэдээлэл | Их таван нүдэн ХХК",
    description: `Их таван нүдэн ХХК-ийн хамгийн сүүлийн үеийн мэдээ, мэдээлэл, шинэ бүтээгдэхүүн, 
    үйлчилгээ, төслүүдийн талаархи мэдээллийг эндээс аваарай.`,
    url: "https://ikhtavannuden.mn/news",
    siteName: "Их таван нүдэн ХХК",
    locale: "mn_MN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Мэдээ, мэдээлэл | Их таван нүдэн ХХК",
    description: `Их таван нүдэн ХХК-ийн мэдээ, шинэ бүтээгдэхүүн, үйлчилгээний мэдээлэл.`,
  },
};

const Blogs = () => {
  return (
    <div>
      <BlogPage />
    </div>
  );
};

export default Blogs;
