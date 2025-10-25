import { Plane } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-section-dark text-text-light py-14 border-t border-section-light-600/30 overflow-hidden">
      {/* === Glowing Top Border Animation === */}

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* === Top Grid === */}
        <div className="grid md:grid-cols-4 gap-10">
          {/* === Brand Section === */}
          <div>
            <div className="flex items-center space-x-3 mb-5">
              <Plane className="h-7 w-7 text-red-500" />
              <span className="text-2xl font-bold tracking-wide">Naavi</span>
            </div>
            <p className=" leading-relaxed max-w-xs">
              Leading the future of autonomous flight with military-grade
              precision and commercial reliability.
            </p>
          </div>

          {/* === Products === */}
          <div>
            <h4 className="font-bold mb-4 tracking-wide">Products</h4>
            <ul className="space-y-2 ">
              {["MatriX", "Falcon", "Drishti", " FlyMAN"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-red-500 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* === Company === */}
          <div>
            <h4 className="font-bold mb-4  tracking-wide">Company</h4>
            <ul className="space-y-2 ">
              {[
                { name: "About Us", link: "#about" },
                { name: "Careers", link: "#" },
                { name: "News", link: "#" },
                { name: "Contact", link: "#contact" },
              ].map(({ name, link }) => (
                <li key={name}>
                  <a
                    href={link}
                    className="hover:text-red-500 transition-colors duration-200"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* === Support === */}
          <div>
            <h4 className="font-bold mb-4  tracking-wide">Support</h4>
            <ul className="space-y-2 ">
              {["Documentation", "Training", "Support Center", "Emergency"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-red-500 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* === Divider & Bottom Section === */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className=" text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-semibold ">Naavi</span>. All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            <a
              href="#"
              className="hover:text-red-500 transition-colors duration-200"
            >
              Privacy Policy
            </a>{" "}
            <span className="text-gray-600">|</span>{" "}
            <a
              href="#"
              className="hover:text-red-500 transition-colors duration-200"
            >
              Terms of Service
            </a>
          </p>
        </div>
      </div>

      {/* === Custom Pulse Animation Keyframes === */}
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 0.4; transform: scaleX(1); }
            50% { opacity: 0.9; transform: scaleX(1.02); }
          }
        `}
      </style>
    </footer>
  );
}
