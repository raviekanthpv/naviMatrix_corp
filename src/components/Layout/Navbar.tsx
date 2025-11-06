import React, { useEffect, useRef, useState } from "react";
import {
  Plane,
  Wind,
  ArrowRight,
  Grid,
  Settings,
  FileText,
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import falcon from "../../Assets/falconBlack.png";
import Logo from "../../Assets/logo.png";

/** ========== Types (split layout for Matrix) ========== */
type LayoutType = "bigLayout" | "smallLayout" | "splitLayout";

type SubItem = {
  title: string;
  desc?: string;
  image?: string;
  icon?: React.ReactNode;
  href?: string; // e.g. "#NavAIIntro"
  path?: string; // e.g. "/falcon"
};

type SubMenuConfig = {
  layout: LayoutType;
  items?: SubItem[];
  headingLeft?: string;
  summaryDescRight?: string;
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [openSub, setOpenSub] = useState<string | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Remember a hash we want to scroll to after navigation to "/"
  const pendingHashRef = useRef<string | null>(null);

  // --- Scroll hide/show with hysteresis ---
  const lastYRef = useRef<number>(window.scrollY);
  useEffect(() => {
    const scrollContainer = document.body;
    const handleScroll = () => {
      const currentY = scrollContainer.scrollTop;
      const lastY = lastYRef.current;
      const delta = currentY - lastY;

      if (currentY < 80) {
        setIsVisible(true);
        setScrolled(false);
      } else {
        if (delta > 15) setIsVisible(false);
        else if (delta < -15) setIsVisible(true);
        setScrolled(true);
      }
      lastYRef.current = currentY;
    };
    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  // Try smooth-scroll to a hash; retry briefly until the element exists
  const tryScrollTo = (hash: string, attempts = 24, delayMs = 50) => {
    const h = hash.startsWith("#") ? hash : `#${hash}`;
    const attempt = (left: number) => {
      const el = document.querySelector(h);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (left > 0) setTimeout(() => attempt(left - 1), delayMs);
    };
    attempt(attempts);
  };

  // Navigate or scroll depending on where we are
  const handleSmoothScroll = (hash: string) => {
    const h = hash.startsWith("#") ? hash : `#${hash}`;
    if (location.pathname === "/") {
      tryScrollTo(h);
    } else {
      pendingHashRef.current = h; // remember target
      navigate({ pathname: "/", hash: h }); // go home with hash
    }
  };

  // After navigation, when we are on "/", try to scroll to either the URL hash or pendingHash
  useEffect(() => {
    if (location.pathname !== "/") return;
    const urlHash = location.hash; // includes leading "#"
    const target = urlHash || pendingHashRef.current;
    if (target) {
      tryScrollTo(target);
      pendingHashRef.current = null; // clear after use
    }
  }, [location]);

  // ⬅️ NEW: When the route path changes without a hash, always jump to top (e.g., /falcon)
  useEffect(() => {
    if (location.hash) return; // hash handler will manage scrolling
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    // safety for some browsers
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [location.pathname]);

  /** NAV ITEMS **/
  const navItems = [
    { name: "Matrix. - autonomy", link: "/matrix", hasSub: "matrix" },
    { name: "CUAS", link: "/cuas", hasSub: "cuas" },
    { name: "Air Crafts", link: "#aircrafts", hasSub: "aircrafts" },
  ];

  /** SUBMENUS **/
  const subMenus: Record<string, SubMenuConfig> = {
    // === Matrix split menu (Left: OS/links, Right: summary) ===
    matrix: {
      layout: "splitLayout",
      headingLeft: "OS",
      items: [
        {
          title: "NAV.AI",
          desc: "AI-native operating system — the central brain.",
          icon: <Grid className="h-5 w-5 hidden" />,
          href: "#NavAIIntro", // <-- go to "/" then scroll here
        },
        {
          title: "Autonomy",
          desc: "Mission control, perception, planning & swarming.",
          icon: <Settings className="h-5 w-5 hidden" />,
          href: "#matrixSAIntro", // <-- go to "/" then scroll here
        },
      ],
      summaryDescRight:
        "A family of autonomous systems, powered by Matrix OS, providing integrated, persistent awareness and security across land, sea, and air — all at the tactical edge.",
    },

    // === CUAS (Falcon card) ===
    cuas: {
      layout: "bigLayout",
      items: [
        {
          title: "FALCON SERIES",
          desc: "A unified operating system for autonomous systems.",
          image: falcon,
          path: "/falcon", // direct route; will start at top because of the effect above
        },
      ],
    },

    // === Aircrafts ===
    aircrafts: {
      layout: "bigLayout",
      items: [
        {
          title: "Drishti",
          desc: "COMING SOON",
          image:
            "https://images.unsplash.com/photo-1533154683836-84ea7a0f3b12?q=80&w=1600&auto=format&fit=crop",
          icon: <Wind className="h-5 w-5" />,
          path: "/", // example
        },
      ],
    },

    // Apps
    apps: {
      layout: "smallLayout",
      items: [
        {
          title: "Summary",
          icon: <FileText className="h-5 w-5" />,
          href: "#Mission",
        },
        // { title: "Support", icon: <LifeBuoy className="h-5 w-5" />, path: "/support" },
        // { title: "Settings", icon: <Settings className="h-5 w-5" />, path: "/settings" },
        // { title: "Info", icon: <Info className="h-5 w-5" />, path: "/info" },
      ],
    },
  };

  /** Submenu Renderer **/
  const SubMenu = ({ config }: { name: string; config: SubMenuConfig }) => {
    const { layout } = config;

    // ====== Matrix: split layout ======
    if (layout === "splitLayout") {
      const items = config.items ?? [];
      return (
        <div className="fixed left-0 right-0 z-[45] top-[80px] animate-slideDown">
          <div className="w-screen bg-black border-t border-text-light/30">
            <div className="max-w-7xl mx-auto px-[5vw] py-8">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] items-center min-h-[302px]">
                {/* LEFT */}
                <div className="pr-0 md:pr-0 pb-0 md:col-start-1 md:col-end-2 flex items-center justify-end">
                  <div className="w-[560px] max-w-full text-left">
                    {config.headingLeft && (
                      <div className="text-[11px] tracking-[0.12em] text-white/70 uppercase mb-4">
                        {config.headingLeft}
                      </div>
                    )}
                    <div className="space-y-4">
                      {items.map((s) => (
                        <div key={s.title} className="pointer-events-none">
                          <span
                            role="button"
                            tabIndex={0}
                            onClick={() => {
                              if (s.href) handleSmoothScroll(s.href);
                              else if (s.path) navigate(s.path);
                              setActiveMenu(null);
                            }}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                if (s.href) handleSmoothScroll(s.href);
                                else if (s.path) navigate(s.path);
                                setActiveMenu(null);
                              }
                            }}
                            className="inline-block pointer-events-auto cursor-pointer
                                       text-3xl md:text-4xl leading-tight font-semibold text-white
                                       transition hover:opacity-90 hover:underline
                                       underline-offset-[6px] decoration-white/80"
                          >
                            {s.title}
                          </span>
                          {s.desc && <span className="sr-only">{s.desc}</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block self-stretch bg-white" />

                {/* RIGHT */}
                <div className="md:col-start-3 md:col-end-4 pl-0 md:pl-8 pt-0 flex items-center justify-start">
                  <div className="w-[560px] max-w-full">
                    <p className="text-[16px] sm:text-[17px] leading-7 text-white/85">
                      {config.summaryDescRight}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // ====== big layout ======
    if (layout === "bigLayout" && config.items) {
      const items = config.items;
      return (
        <div className="fixed left-0 right-0 z-[45] top-[80px] animate-slideDown overflow-hidden">
          <div className="w-screen bg-black border-t border-text-light/30">
            <div
              className="w-full px-[5vw] py-8 flex justify-center gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory border-y border-white/20"
              style={{ minHeight: "320px" }}
            >
              {items.map((s) => (
                <button
                  key={s.title}
                  onClick={() => {
                    if (s.path) navigate(s.path);
                    else if (s.href) handleSmoothScroll(s.href);
                    setActiveMenu(null);
                  }}
                  className="group relative overflow-hidden rounded-3xl ring-1 ring-white/20 hover:ring-white/60 transition shrink-0 w-[400px] h-[300px] border border-white/15 hover:border-white/40"
                >
                  <div className="relative w-full h-full">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url(${s.image})` }}
                    />
                    <div className="absolute bg-gradient-to-b from-black/10 via-black/55 to-black/90" />
                    <div className="relative z-10 h-full w-full p-8 flex flex-col justify-end">
                      <div className="flex items-center gap-2 text-white/90">
                        {s.icon}
                        <span className="text-lg font-semibold">{s.title}</span>
                      </div>
                      <p className="mt-2 text-[15px] leading-snug text-white/80 text-justify">
                        {s.desc}
                      </p>
                      <div className="mt-4 text-sm text-white/90 flex items-center">
                        Explore
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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

    // ====== small layout ======
    const items = config.items ?? [];
    return (
      <div className="absolute left-2 -translate-x-1/2 top-[50px] mt-3 z-[45] w-56 rounded-xl bg-black border border-text-light/30 shadow-lg py-3 flex flex-col text-sm animate-slideDown">
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
            className="px-5 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-2"
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
      className={`fixed w-full z-50 transition-all duration-500 transform
      ${scrolled ? "bg-section-dark/90 backdrop-blur-sm shadow-[0_10px_30px_-10px_rgba(255,255,255,0.15)]" : "bg-section-dark/90"}
      ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
      text-text-light border-b border-text-light/30`}
    >
      {/* DESKTOP */}
      <div className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:flex items-center justify-between w-full relative py-4">
          {/* LEFT: Brand */}
          <div className="flex items-center space-x-6 flex-1 justify-start">
            <Link
              to="/"
              className="flex items-center space-x-2 group hover:scale-[1.02] transition"
              onClick={() => setActiveMenu(null)}
            >
              <img className="h-[50px] w-100" src={Logo} alt="NAAVI" />
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
                    className={`flex text-xl items-center gap-1 font-medium transition-all duration-200 ${
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

          {/* RIGHT: Apps */}
          <div className="flex-1 flex items-center justify-end space-x-10">
            <div className="relative">
              <button
                onClick={() =>
                  setActiveMenu(activeMenu === "apps" ? null : "apps")
                }
                className={`p-2 text-xl rounded-full transition flex items-center gap-2 ${
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

      {/* MOBILE BAR */}
      <div className="md:hidden px-4 py-3 flex items-center justify-between">
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

      {/* MOBILE DROPDOWN */}
      {activeMenu === "mobile" && (
        <div className="md:hidden flex flex-col bg-black border-t border-text-light/30 py-4 px-6 space-y-3">
          {[
            ...navItems,
            { name: "Company", hasSub: "company" },
            { name: "Apps", hasSub: "apps" },
          ].map((item) => (
            <div key={item.name} className="flex flex-col">
              <button
                onClick={() =>
                  setOpenSub(openSub === item.name ? null : item.name)
                }
                className="flex justify-between items-center py-2 text-text-light/90 hover:text-sky-400"
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

              {item.hasSub &&
                subMenus[item.hasSub] &&
                openSub === item.name && (
                  <div className="pl-4 border-l border-white/10 flex flex-col space-y-2 mt-1">
                    {(subMenus[item.hasSub].items ?? []).map((sub) => (
                      <button
                        key={sub.title}
                        onClick={() => {
                          if (sub.path) navigate(sub.path);
                          else if (sub.href) handleSmoothScroll(sub.href);
                          setActiveMenu(null);
                          setOpenSub(null);
                        }}
                        className="text-left text-text-light/70 hover:text-red-400 text-sm py-1 flex items-center gap-2"
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
