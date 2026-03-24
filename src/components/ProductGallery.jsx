import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LightboxModal from "./LightboxModal";

export const products = [
  {
    id: 1,
    title: "Fall Limited Edition Sneakers",
    price: 125,
    full: "/images/image-product-1.jpg",
    thumb: "/images/image-product-1-thumbnail.jpg",
  },
  {
    id: 2,
    title: "Winter Street Sneakers",
    price: 135,
    full: "/images/image-product-2.jpg",
    thumb: "/images/image-product-2-thumbnail.jpg",
  },
  {
    id: 3,
    title: "Minimal Beige Sneakers",
    price: 150,
    full: "/images/image-product-3.jpg",
    thumb: "/images/image-product-3-thumbnail.jpg",
  },
  {
    id: 4,
    title: "Classic White Sneakers",
    price: 120,
    full: "/images/image-product-4.jpg",
    thumb: "/images/image-product-4-thumbnail.jpg",
  },
];

export default function ProductGallery({
  products,
  selectedProduct,
  setSelectedProduct,
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const currentIndex = products.findIndex(
    (p) => p.id === selectedProduct.id
  );

  const nextImage = () => {
    const next = (currentIndex + 1) % products.length;
    setSelectedProduct(products[next]);
  };

  const prevImage = () => {
    const prev =
      currentIndex === 0
        ? products.length - 1
        : currentIndex - 1;

    setSelectedProduct(products[prev]);
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto">
        {/* Main Image */}
        <div className="relative">
          <motion.img
            key={selectedProduct.id}
            src={selectedProduct.full}
            alt={selectedProduct.title}
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
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className={`rounded-xl overflow-hidden border-2 ${
                selectedProduct.id === product.id
                  ? "border-orange-500"
                  : "border-transparent"
              }`}
            >
              <img
                src={product.thumb}
                alt={product.title}
                className={`w-20 transition ${
                  selectedProduct.id === product.id
                    ? "opacity-50"
                    : "hover:opacity-70"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <LightboxModal
            products={products}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}