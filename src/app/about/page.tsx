import AboutPage from "@/components/AboutPage";

export const metadata = {
  title:
    "Уул уурхайн тоног төхөөрөмж | Цэцэрлэгжүүлэлт, гадна тохижилт | Их таван нүдэн ХХК | ikhtavannuden",
  description: `Их таван нүдэн ХХК нь гадаад худалдаа, уул уурхай болон хүнд даацын техник, тоног төхөөрөмж, сэлбэг хэрэгсэл,
барилгын материалын худалдаа, цэцэрлэгжүүлэлт зэрэг чиглэлээр үйл ажиллагаа явуулдаг. 
Бид хэрэглэгчдэд найдвартай бүтээгдэхүүн, мэргэжлийн суурилуулалт болон засвар үйлчилгээний цогц шийдлийг хүргэдэг.`,
  metadataBase: new URL("https://ikhtavannuden.mn/contact"),
};

const About = () => {
  return <AboutPage />;
};

export default About;
