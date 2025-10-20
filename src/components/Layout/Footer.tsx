import { Plane } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Plane className="h-8 w-8 text-white" />
              <span className="text-xl font-bold tracking-wide">Naavi</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Leading the future of autonomous flight with military-grade precision 
              and commercial reliability.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-4 text-white">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Military Systems</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Industrial Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Survey & Mapping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Development</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">News</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4 text-white">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Training</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Emergency</a></li>
            </ul>
          </div>
        </div>

        {/* Divider & Bottom Text */}
        <div className="border-t border-slate-800 mt-10 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} <span className="font-semibold text-white">Naavi</span>. All rights reserved.
          </p>
          <p className="mt-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> |{" "}
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
