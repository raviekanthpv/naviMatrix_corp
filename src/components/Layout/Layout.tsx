import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-black text-white">
      <Navbar />
      <main className="relative w-full h-full main-scroll-container">
        {children}
      </main>
      <Footer />
    </div>
  );
}
