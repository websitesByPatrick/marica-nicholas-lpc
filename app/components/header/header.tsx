import Heading from "./heading";
import Navbar from "./navbar";

const Header = () => {
  return (
    <header id="top" className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-12">
        <Heading />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
