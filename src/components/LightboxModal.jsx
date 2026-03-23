import { motion } from "framer-motion";

export default function LightboxModal({
  images,
  current,
  setCurrent,
  onClose,
}) {
  const nextImage = () =>
    setCurrent((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black/75 z-50 hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <motion.div
        className="fixed inset-0 z-50 hidden lg:flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="relative max-w-xl">
          
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 text-white text-3xl"
          >
            ×
          </button>

          <img
            src={images[current].full}
            alt=""
            className="rounded-2xl"
          />

          {/* Arrows */}
          <button
            onClick={prevImage}
            className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white p-4 rounded-full"
          >
            <img src="/images/icon-previous.svg" alt="" />
          </button>

          <button
            onClick={nextImage}
            className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white p-4 rounded-full"
          >
            <img src="/images/icon-next.svg" alt="" />
          </button>
        </div>
      </motion.div>
    </>
  );
}