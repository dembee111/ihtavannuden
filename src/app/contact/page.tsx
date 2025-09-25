import ContactPage from "@/components/ContactPage";

export const metadata = {
  title: "Хүнд даацын техник | Уул уурхай | Гадаад худалдаа",
  description: `Их таван нүдэн ХХК нь гадаад худалдаа, уул уурхай болон хүнд даацын техник, тоног төхөөрөмж, сэлбэг хэрэгсэл,
барилгын материалын худалдаа, цэцэрлэгжүүлэлт зэрэг чиглэлээр үйл ажиллагаа явуулдаг. 
Бид хэрэглэгчдэд найдвартай бүтээгдэхүүн, мэргэжлийн суурилуулалт болон засвар үйлчилгээний цогц шийдлийг хүргэдэг.`,
  metadataBase: new URL("https://ikhtavannuden.mn/contact"),
};

const Contact = () => {
  return <ContactPage />;
};

export default Contact;
