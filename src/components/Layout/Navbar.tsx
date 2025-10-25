import React, { useEffect, useRef, useState } from "react";
import {
  Plane,
  Wind,
  ArrowRight,
  Grid,
  Settings,
  Info,
  LifeBuoy,
  FileText,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import falcon from "../../Assets/falcon.jpg";
import matrixOSsuit from "../../Assets/matrixOS.png";

type LayoutType = "bigLayout" | "smallLayout";
type SubItem = {
  title: string;
  desc?: string;
  image?: string;
  icon?: React.ReactNode;
  href?: string;
  path?: string;
};
type SubMenuConfig = {
  layout: LayoutType;
  items: SubItem[];
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  /** Sticky Navbar + Auto Close on Scroll **/
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      setActiveMenu(null);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /** Smooth scroll or navigate **/
  const handleSmoothScroll = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /** NAV ITEMS **/
  const navItems = [
    { name: "Matrix. - autonomy", link: "/matrix", hasSub: "matrix" },
    { name: "CUAS", link: "/cuas", hasSub: "cuas" },
    { name: "Air Crafts", link: "#aircrafts", hasSub: "aircrafts" },
  ];

  /** SUBMENUS **/
  const subMenus: Record<string, SubMenuConfig> = {
    matrix: {
      layout: "bigLayout",
      items: [
        {
          title: "SA",
          desc: "SA delivers a revolutionary layer of situational awareness, acting as the intelligent 'senses' for any integrated system.",
          image: matrixOSsuit,
          icon: <Grid className="h-5 w-5" />,
          path: "/matrix/sa",
        },
        {
          title: "NAAV.AI",
          desc: "Naav.ai is the intelligent, AI-native operating system that functions as the central brain for a unified autonomous force.",
          image: matrixOSsuit,
          icon: <Grid className="h-5 w-5" />,
          path: "/matrix/naav-ai",
        },
      ],
    },
    cuas: {
      layout: "bigLayout",
      items: [
        {
          title: "FALCON SERIES",
          desc: "A unified operating system for autonomous systems.",
          image: falcon,
          icon: <Grid className="h-5 w-5" />,
          path: "/cuas/falcon",
        },
      ],
    },
    aircrafts: {
      layout: "bigLayout",
      items: [
        {
          title: "Drishti",
          desc: "Drishti is the ultimate 'eye in the sky,' an advanced autonomous surveillance drone that grants unparalleled vision and awareness.",
          image:
            "https://images.unsplash.com/photo-1533154683836-84ea7a0f3b12?q=80&w=1600&auto=format&fit=crop",
          icon: <Wind className="h-5 w-5" />,
          href: "#vtol",
        },
      ],
    },
    company: {
      layout: "smallLayout",
      items: [
        { title: "About", path: "/company/about" },
        { title: "Team", path: "/company/team" },
        { title: "Career", path: "/company/career" },
      ],
    },
    apps: {
      layout: "smallLayout",
      items: [
        {
          title: "Docs",
          icon: <FileText className="h-5 w-5" />,
          path: "/docs",
        },
        {
          title: "Support",
          icon: <LifeBuoy className="h-5 w-5" />,
          path: "/support",
        },
        {
          title: "Settings",
          icon: <Settings className="h-5 w-5" />,
          path: "/settings",
        },
        { title: "Info", icon: <Info className="h-5 w-5" />, path: "/info" },
      ],
    },
  };

  /** Submenu Renderer **/
  const SubMenu = ({ config }: { name: string; config: SubMenuConfig }) => {
    const { layout, items } = config;

    // === BIG LAYOUT ===
    if (layout === "bigLayout") {
      return (
        <div
          className="fixed left-0 right-0 z-[45] mt-0 animate-slideDown 
                    overflow-hidden top-[64px]"
        >
          <div
            className="w-screen backdrop-blur-xl border-t border-white/10 
                      bg-gradient-to-b from-black/90 via-black/95 to-black 
                      shadow-[0_40px_120px_-20px_rgba(255,255,255,0.25)]"
          >
            <div
              className="w-full px-[5vw] py-14 flex justify-center gap-10 
                         overflow-x-auto scroll-smooth snap-x snap-mandatory 
                         border-y border-white/20"
              style={{ minHeight: "520px" }}
            >
              {items.map((s) => (
                <button
                  key={s.title}
                  onClick={() => {
                    if (s.path) navigate(s.path);
                    else if (s.href) handleSmoothScroll(s.href);
                    setActiveMenu(null);
                  }}
                  className="group relative overflow-hidden rounded-3xl ring-1 
                             ring-white/20 hover:ring-white/60 transition 
                             shrink-0 w-[500px] h-[480px] border border-white/15 
                             hover:border-white/40"
                >
                  <div className="relative w-full h-full">
                    <div
                      className="absolute inset-0 bg-cover bg-center 
                                 group-hover:scale-105 transition-transform 
                                 duration-500"
                      style={{ backgroundImage: `url(${s.image})` }}
                    />
                    <div
                      className="absolute 
                                 bg-gradient-to-b from-black/10 via-black/55 to-black/90"
                    />
                    <div
                      className="relative z-10 h-full w-full p-8 flex flex-col 
                                 justify-end"
                    >
                      <div
                        className="flex items-center gap-2 text-text-light/90 
                                   group-hover:text-white transition"
                      >
                        {s.icon}
                        <span className="text-lg font-semibold">{s.title}</span>
                      </div>
                      <p
                        className="mt-2 text-[15px] leading-snug text-white/80 
                                   text-justify"
                      >
                        {s.desc}
                      </p>
                      <div
                        className="mt-4 text-sm text-white/90 
                                   group-hover:text-white flex items-center"
                      >
                        Explore
                        <ArrowRight
                          className="ml-1 h-4 w-4 group-hover:translate-x-1 
                                     transition-transform"
                        />
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // === SMALL LAYOUT (Centered) ===
    return (
      <div
        className="absolute left-1/2 -translate-x-1/2 top-full mt-3 z-[45] w-56 
                   rounded-xl bg-black/95 border border-white/15 backdrop-blur-md 
                   shadow-lg py-3 flex flex-col text-sm animate-slideDown"
      >
        {items.map((link) => (
          <Link
            key={link.title}
            to={link.path ?? "#"}
            onClick={(e) => {
              if (link.href) {
                e.preventDefault();
                handleSmoothScroll(link.href);
              }
              setActiveMenu(null);
            }}
            className="px-5 py-2 text-white/80 hover:text-white hover:bg-white/10 
                       transition-colors flex items-center gap-2"
          >
            {link.icon && <span>{link.icon}</span>}
            {link.title}
          </Link>
        ))}
      </div>
    );
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-section-dark/90 backdrop-blur-sm shadow-[0_10px_30px_-10px_rgba(255,255,255,0.15)]"
          : "bg-section-dark/90"
      } text-text-light border-b border-text-light/30`}
    >
      <div
        ref={barRef}
        className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="hidden md:flex items-center justify-between w-full relative py-4">
          {/* LEFT: Brand */}
          <div className="flex items-center space-x-6 flex-1 justify-start">
            <Link
              to="/"
              className="flex items-center space-x-2 group hover:scale-[1.02] transition"
              onClick={() => setActiveMenu(null)}
            >
              <Plane className="h-8 w-8 text-red-500" />
              <span className="text-3xl font-bold tracking-wide">Naavi</span>
            </Link>
          </div>

          {/* CENTER: Menu */}
          <div className="flex-[2] flex justify-center">
            <div className="flex items-center space-x-12">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  <button
                    onClick={() =>
                      setActiveMenu(
                        activeMenu === item.hasSub ? null : item.hasSub || null
                      )
                    }
                    className={`flex text-2xl items-center gap-1 font-medium transition-all duration-200 ${
                      activeMenu === item.hasSub
                        ? "text-text-light scale-110 font-bold"
                        : "text-text-light/80 hover:text-text-light"
                    }`}
                  >
                    {item.name}
                    {item.hasSub && (
                      <ArrowRight
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          activeMenu === item.hasSub ? "rotate-90 " : ""
                        }`}
                      />
                    )}
                  </button>
                  {item.hasSub &&
                    activeMenu === item.hasSub &&
                    subMenus[item.hasSub] && (
                      <SubMenu
                        name={item.hasSub}
                        config={subMenus[item.hasSub]}
                      />
                    )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Company + Apps */}
          <div className="flex-1 flex items-center justify-end space-x-8">
            {/* Company */}
            <div className="relative">
              <button
                onClick={() =>
                  setActiveMenu(activeMenu === "company" ? null : "company")
                }
                className={`flex text-2xl items-center gap-1 font-medium transition-all duration-200 ${
                  activeMenu === "company"
                    ? "text-text-light scale-110 font-bold"
                    : "text-text-light/80 hover:text-text-light"
                }`}
              >
                Company
                <ArrowRight
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    activeMenu === "company" ? "rotate-90" : ""
                  }`}
                />
              </button>
              {activeMenu === "company" && (
                <SubMenu name="company" config={subMenus.company} />
              )}
            </div>

            {/* Apps */}
            <div className="relative">
              <button
                onClick={() =>
                  setActiveMenu(activeMenu === "apps" ? null : "apps")
                }
                className={`p-2 text-2xl rounded-full transition flex items-center gap-2 ${
                  activeMenu === "apps"
                    ? "bg-text-text-light/10 ring-1 scale-110 text-text-light"
                    : "text-text-light/80 hover:text-text-light hover:bg-text-light/10"
                }`}
              >
                <Grid className="h-6 w-6" />
                <ArrowRight
                  className={`h-4 w-4 transform transition-transform duration-200 ${
                    activeMenu === "apps" ? "rotate-90 text-text-light" : ""
                  }`}
                />
              </button>
              {activeMenu === "apps" && (
                <SubMenu name="apps" config={subMenus.apps} />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* === MOBILE NAVBAR === */}
      <div className="md:hidden px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2"
          onClick={() => {
            setActiveMenu(null);
            setOpenSub(null);
          }}
        >
          <Plane className="h-7 w-7 text-text-light" />
          <span className="text-xl font-bold">Naavi</span>
        </Link>

        {/* Hamburger button */}
        <button
          onClick={() =>
            setActiveMenu(activeMenu === "mobile" ? null : "mobile")
          }
          className="p-2 rounded-md hover:bg-white/10 transition"
        >
          {activeMenu === "mobile" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* === MOBILE DROPDOWN === */}
      {activeMenu === "mobile" && (
        <div
          className="md:hidden flex flex-col 
                     bg-black/95 border-t border-white/10 
                     py-4 px-6 space-y-3"
        >
          {[
            ...navItems,
            { name: "Company", hasSub: "company" },
            { name: "Apps", hasSub: "apps" },
          ].map((item) => (
            <div key={item.name} className="flex flex-col">
              {/* Parent button */}
              <button
                onClick={() =>
                  setOpenSub(openSub === item.name ? null : item.name)
                }
                className="flex justify-between items-center py-2 
                           text-text-light/90 hover:text-sky-400"
              >
                <span>{item.name}</span>
                {item.hasSub && (
                  <ArrowRight
                    className={`h-4 w-4 transition-transform duration-200 ${
                      openSub === item.name ? "rotate-90 text-sky-400" : ""
                    }`}
                  />
                )}
              </button>

              {/* Submenu items */}
              {item.hasSub &&
                subMenus[item.hasSub] &&
                openSub === item.name && (
                  <div
                    className="pl-4 border-l border-white/10 flex flex-col space-y-2 
                               mt-1"
                  >
                    {subMenus[item.hasSub].items.map((sub) => (
                      <button
                        key={sub.title}
                        onClick={() => {
                          if (sub.path) navigate(sub.path);
                          else if (sub.href) handleSmoothScroll(sub.href);
                          setActiveMenu(null);
                          setOpenSub(null);
                        }}
                        className="text-left text-text-light/70 hover:text-red-400 
                                   text-sm py-1 flex items-center gap-2"
                      >
                        {sub.icon}
                        {sub.title}
                      </button>
                    ))}
                  </div>
                )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
