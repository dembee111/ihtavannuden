"use client";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { useState } from "react";
// import { createClient } from "contentful-management";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    description: "",
  });

  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const client = createClient({
  //     accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_INPUT_TOKEN,
  //   });

  //   try {
  //     const space = await client.getSpace("m13q2cw2lx92");
  //     const environment = await space.getEnvironment("master");

  //     await environment.createEntry("contact", {
  //       fields: {
  //         name: { "en-US": formData.name },
  //         companyName: { "en-US": formData.company },
  //         email: { "en-US": formData.email },
  //         phone: { "en-US": Number(formData.phone) },
  //         descrption: { "en-US": formData.description },
  //       },
  //     });

  //     Swal.fire("Амжилттай илгээгдлээ!", "", "success");
  //     setFormData({
  //       name: "",
  //       phone: "",
  //       email: "",
  //       description: "",
  //       company: "",
  //     });
  //   } catch (error) {
  //     console.error("Error:", error.message);
  //     Swal.fire("Алдаа гарлаа!", "Системийн алдаа.", "error");
  //   }
  // };

  return (
    <section className=" mt-32 md:mt-42 mb-12 md:mb-32 px-4 2xl:px-0">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="w-full h-90  overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10700.746924123843!2d106.62947718715822!3d47.89407100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96e9de6dd2fc63%3A0xa33603d6ba218110!2z0KHQpdCULdC40LnQvSAzMi3RgCDRhdC-0YDQvtC-!5e0!3m2!1sen!2smn!4v1757913189429!5m2!1sen!2smn"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            className="w-full h-full"
          ></iframe>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-900">
              Бидэнтэй холбоо барина уу
            </h1>
            <div className="border-b-3 border-[#f7c51e] w-[40px]"></div>
            <p className="text-gray-600 leading-relaxed">
              Манай багтай холбогдож, таны санал хүсэлт, асуулт, зөвлөгөөг
              хүлээн авна уу. Бид таны хэрэгцээ, хүсэлтийг анхааралтай сонсож,
              хамгийн тохиромжтой шийдлийг санал болгоно.
            </p>

            <div className="flex gap-4 text-white">
              <a
                href="https://www.facebook.com/share/16wAXELzzN/"
                className="hover:text-[#1877f2] bg-[#3b5998]  p-1 rounded-md"
              >
                <Facebook />
              </a>
              <a
                href="https://www.facebook.com/share/16wAXELzzN/"
                className="hover:text-[#e1306c]  bg-[#3ba1f2] p-1 rounded-md"
              >
                <Instagram />
              </a>
              <a
                href="https://www.facebook.com/share/16wAXELzzN/"
                className="hover:text-[#ff0000] bg-[#dd4b39] p-1 rounded-md"
              >
                <Youtube />
              </a>
            </div>

            <div className="space-y-4 text-gray-700">
              <div className="flex items-center gap-3">
                <Phone className="text-[#f7c51e]" />
                <div>
                  <p className="font-semibold">Утас :</p>
                  <p>+976 8822 2233</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-[#f7c51e]" />
                <div>
                  <p className="font-semibold">Имайл :</p>
                  <p>Ikhtavannuden@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-[#f7c51e]" />
                <div>
                  <p className="font-semibold">Хаяг :</p>
                  <p>
                    Компаний агуулах Улаанбаатар хот сонгинохайрхан дүүрэг 32-р
                    хороо мал бордох гудамж
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 items-center">
              <div className="col-span-1">
                <Image
                  src={`/image/about/kod.jpg`}
                  alt="images"
                  width={590}
                  height={587}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="col-span-1">
                <Image
                  src={`/image/about/kod-1.jpg`}
                  alt="images"
                  width={590}
                  height={587}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <form className="bg-white border border-[#aaaaaa]  shadow p-6 space-y-4">
              <input
                type="text"
                placeholder="Нэр"
                className="w-full border-b border-gray-300 focus:border-[#f7c51e] outline-none py-2"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                type="email"
                placeholder="Имайл"
                className="w-full border-b border-gray-300 focus:border-[#f7c51e] outline-none py-2"
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Утас"
                className="w-full border-b border-gray-300 focus:border-[#f7c51e] outline-none py-2"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <textarea
                placeholder="Дэлгэрэнгүй мэдээлэл"
                rows={5}
                className="w-full border-b border-gray-300 focus:border-[#f7c51e] outline-none py-2 resize-none"
                value={formData.description}
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className="bg-[#f7c51e] text-white hover:bg-[#e5b91a] transition  font-semibold py-3 px-6  w-full"
              >
                Илгээх
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
