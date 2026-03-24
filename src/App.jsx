import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductGallery, { products } from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <div>
      <Navbar />

      <main className="max-w-6xl mx-auto lg:px-6 py-10 lg:py-5 grid lg:grid-cols-2 gap-16 items-center">
        <ProductGallery
          products={products}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />

        <ProductInfo product={selectedProduct} />
      </main>
    </div>
  );
}