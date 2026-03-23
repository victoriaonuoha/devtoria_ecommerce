import Navbar from "./components/Navbar";
import ProductGallery from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";

export default function App() {
  return (
    <div>
      <Navbar />

      <main className="max-w-6xl mx-auto lg:px-6 py-10 lg:py-20 grid lg:grid-cols-2 gap-16 items-center">
        <ProductGallery />
        <ProductInfo />
      </main>
    </div>
  );
}