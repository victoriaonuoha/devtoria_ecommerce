import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LightboxModal from "./LightboxModal";

const images = [
  {
    full: "/images/image-product-1.jpg",
    thumb: "/images/image-product-1-thumbnail.jpg",
  },
  {
    full: "/images/image-product-2.jpg",
    thumb: "/images/image-product-2-thumbnail.jpg",
  },
  {
    full: "/images/image-product-3.jpg",
    thumb: "/images/image-product-3-thumbnail.jpg",
  },
  {
    full: "/images/image-product-4.jpg",
    thumb: "/images/image-product-4-thumbnail.jpg",
  },
];

export default function ProductGallery() {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const nextImage = () =>
    setCurrent((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  return (
    <>
      <div className="w-full max-w-md mx-auto">
        
        {/* Main Image */}
        <div className="relative">
          <motion.img
            key={current}
            src={images[current].full}
            alt="Product"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full lg:rounded-2xl cursor-pointer"
            onClick={() => setLightboxOpen(true)}
          />

          {/* Mobile Arrows */}
          <div className="lg:hidden">
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow"
            >
              <img src="/images/icon-previous.svg" alt="" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow"
            >
              <img src="/images/icon-next.svg" alt="" />
            </button>
          </div>
        </div>

        {/* Thumbnails (Desktop) */}
        <div className="hidden lg:flex gap-6 mt-6">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`rounded-xl overflow-hidden border-2 ${
                current === index
                  ? "border-orange-500"
                  : "border-transparent"
              }`}
            >
              <img
                src={img.thumb}
                alt=""
                className={`w-20 ${
                  current === index
                    ? "opacity-50"
                    : "hover:opacity-70"
                } transition`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <LightboxModal
            images={images}
            current={current}
            setCurrent={setCurrent}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}