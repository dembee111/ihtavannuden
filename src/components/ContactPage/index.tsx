"use client";

import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

const ContactPage = () => {
  return (
    <section className="my-42 px-4 2xl:px-0">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="w-full h-90  overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18..."
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
              Lorem ipsum gravida nibh vel velit auctor aliqunean
              sollicitudinlor quis bibendum auci elit consequat ipsutis sem nibh
              id elit sed vulputate.
            </p>

            <div className="flex gap-4 text-white">
              <a
                href="#"
                className="hover:text-[#1877f2] bg-[#3b5998]  p-1 rounded-md"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="hover:text-[#e1306c]  bg-[#3ba1f2] p-1 rounded-md"
              >
                <Instagram />
              </a>
              <a
                href="#"
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
                  <p>yourmail@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-[#f7c51e]" />
                <div>
                  <p className="font-semibold">Хаяг :</p>
                  <p>
                    Jl. Maleer Indah II, Maleer, Batununggal, Kota Bandung, Jawa
                    Barat 40274
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <form className="bg-white border border-[#aaaaaa]  shadow p-6 space-y-4">
              <input
                type="text"
                placeholder="Нэр"
                className="w-full border-b border-gray-300 focus:border-[#f7c51e] outline-none py-2"
              />
              <input
                type="email"
                placeholder="Имайл"
                className="w-full border-b border-gray-300 focus:border-[#f7c51e] outline-none py-2"
              />
              <input
                type="text"
                placeholder="Сэдэв"
                className="w-full border-b border-gray-300 focus:border-[#f7c51e] outline-none py-2"
              />
              <textarea
                placeholder="Дэлгэрэнгүй мэдээлэл"
                rows={5}
                className="w-full border-b border-gray-300 focus:border-[#f7c51e] outline-none py-2 resize-none"
              />
              <button
                type="submit"
                className="bg-[#f7c51e] text-white hover:bg-[#e5b91a] transition text-black font-semibold py-3 px-6  w-full"
              >
                Илгээх
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
