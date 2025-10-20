import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main className="pt-[64px]">{children}</main>
      <Footer />
    </div>
  );
}
