import { motion } from "framer-motion";

export default function LightboxModal({
  products,
  selectedProduct,
  setSelectedProduct,
  onClose,
}) {
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
      {/* Overlay */}
      <motion.div
        className="fixed inset-0 bg-black/75 z-50 hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}   // ✅ Click outside closes
      />

      {/* Modal Wrapper */}
      <motion.div
        className="fixed inset-0 z-50 hidden lg:flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="relative w-full max-w-lg px-4">

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute -top-10 right-4 text-white text-3xl font-bold"
          >
            ✕
          </button>

          {/* Main Image */}
          <img
            src={selectedProduct.full}
            alt={selectedProduct.title}
            className="w-full rounded-2xl"
          />

          {/* Arrows */}
          <button
            onClick={prevImage}
            className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow"
          >
            <img src="/images/icon-previous.svg" alt="" />
          </button>

          <button
            onClick={nextImage}
            className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow"
          >
            <img src="/images/icon-next.svg" alt="" />
          </button>

          {/* Thumbnails */}
          <div className="flex justify-center gap-4 mt-6">
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
                  className={`w-16 ${
                    selectedProduct.id === product.id
                      ? "opacity-50"
                      : "hover:opacity-70"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}