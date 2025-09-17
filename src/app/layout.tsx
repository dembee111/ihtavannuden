import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Header from "@/components/Shared/Header";
import Footer from "@/components/Shared/Footer";
import "./globals.css";

const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["cyrillic"],
  display: "swap",
});

export const metadata = {
  title:
    "Их таван нүдэн ХХК | Гадаад худалдаа | Уул уурхай, хүнд даацын техник, тоног төхөөрөмж, сэлбэг хэрэгсэл | Барилгын материалын худалдаа | Цэцэрлэгжүүлэлт | ikh tavan nuden | ikhtavannuden.mn",
  description: `Их таван нүдэн ХХК нь гадаад худалдаа, уул уурхай болон хүнд даацын техник, тоног төхөөрөмж, сэлбэг хэрэгсэл,
барилгын материалын худалдаа, цэцэрлэгжүүлэлт зэрэг чиглэлээр үйл ажиллагаа явуулдаг. 
Бид хэрэглэгчдэд найдвартай бүтээгдэхүүн, мэргэжлийн суурилуулалт болон засвар үйлчилгээний цогц шийдлийг хүргэдэг.`,
  keywords: [
    "Гадаад худалдаа",
    "Уул уурхай",
    "Хүнд даацын техник",
    "Уул уурхайн тоног төхөөрөмж",
    "Цэцэрлэгжүүлэлт",
    "Барилгын материалын худалдаа",
    "Барилгын материалын дэлгүүр",
    "Уул уурхайн хүнд даацын техник нийлүүлэлт",
    "Уул уурхайн экскаватор, ачигч, машин",
    "Барилгын материалын бөөний худалдаа",
    "Барилгын материал нийлүүлэгч Монгол",
    "Цэцэрлэгжүүлэлт, гадна тохижилт",
    "Гадаад худалдааны компани Монгол",
    "Найдвартай тоног төхөөрөмжийн нийлүүлэгч",
    "Их таван нүдэн ХХК",
    "Гадаад худалдаа Монгол",
    "Уул уурхайн тоног төхөөрөмж",
    "Хүнд даацын машин механизм",
    "Уул уурхайн сэлбэг хэрэгсэл",
    "Барилгын материалын худалдаа",
    "Цэцэрлэгжүүлэлт үйлчилгээ",
  ],
  metadataBase: new URL("https://ikhtavannuden.mn"),
  url: "https://ikhtavannuden.mn",
  siteName: "Их таван нүдэн",
  openGraph: {
    title:
      "Их таван нүдэн ХХК | Гадаад худалдаа | Уул уурхай, хүнд даацын техник, тоног төхөөрөмж, сэлбэг хэрэгсэл | Барилгын материалын худалдаа | Цэцэрлэгжүүлэлт | ikhtavannuden.mn",
    description: `Их таван нүдэн ХХК нь гадаад худалдаа, уул уурхай болон хүнд даацын техник, тоног төхөөрөмж, сэлбэг хэрэгсэл,
барилгын материалын худалдаа, цэцэрлэгжүүлэлт зэрэг чиглэлээр үйл ажиллагаа явуулдаг. 
Бид хэрэглэгчдэд найдвартай бүтээгдэхүүн, мэргэжлийн суурилуулалт болон засвар үйлчилгээний цогц шийдлийг хүргэдэг.`,
    images: [
      {
        url: "https://images.ctfassets.net/5yb73dsvpmu0/3Ti1t3qMRWd7IdIEpOkgrO/558cf821e14e3ef96a7f24b53f30ca6c/cover.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://images.ctfassets.net/5yb73dsvpmu0/3Ti1t3qMRWd7IdIEpOkgrO/558cf821e14e3ef96a7f24b53f30ca6c/cover.png",
        width: 1800,
        height: 1600,
        alt: "for big screen",
      },
    ],
    locale: "en_En",
    type: "website",
    publishedTime: "2024-05-31T00:00:00.000Z",
    authors: ["gegeensoft", "гэгээнсофт"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Их таван нүдэн ХХК | Гадаад худалдаа | Уул уурхай, хүнд даацын техник, тоног төхөөрөмж, сэлбэг хэрэгсэл | Барилгын материалын худалдаа | Цэцэрлэгжүүлэлт | ikhtavannuden.mn",
    description: `Их таван нүдэн ХХК нь гадаад худалдаа, уул уурхай болон хүнд даацын техник, тоног төхөөрөмж, сэлбэг хэрэгсэл,
барилгын материалын худалдаа, цэцэрлэгжүүлэлт зэрэг чиглэлээр үйл ажиллагаа явуулдаг. 
Бид хэрэглэгчдэд найдвартай бүтээгдэхүүн, мэргэжлийн суурилуулалт болон засвар үйлчилгээний цогц шийдлийг хүргэдэг.`,
    siteId: "1467726470533754981",
    creator: "",
    creatorId: "1467726470533754981",
    images: [
      "https://images.ctfassets.net/5yb73dsvpmu0/3Ti1t3qMRWd7IdIEpOkgrO/558cf821e14e3ef96a7f24b53f30ca6c/cover.png",
    ], // Must be an absolute URL
  },
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "https://ikhtavannuden.mn/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "https://ikhtavannuden.mn/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "https://ikhtavannuden.mn/favicon.ico",
    },
    {
      rel: "mask-icon",
      color: "#f8893a",
      url: "https://ikhtavannuden.mn/favicon.ico",
    },
    {
      rel: "shortcut icon",
      url: "https://ikhtavannuden.mn/favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
