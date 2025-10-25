import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

export default function NewsSection() {
  const news = [
    {
      title: "Naavi launches Matrix.OS v3.0",
      desc: "Our next-gen autonomous operating system enhances drone coordination with AI-driven decision layers.",
      date: "October 18 2025",
      image:
        "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1600",
    },
    {
      title: "FALCON Series sets new record",
      desc: "The Falcon X drone achieved a 48-hour continuous surveillance flight — redefining endurance.",
      date: "October 12 2025",
      image:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1600",
    },
    {
      title: "Naavi AI Lab partners with DRDO",
      desc: "Collaborating on cutting-edge autonomous defense systems focused on situational awareness.",
      date: "October 9 2025",
      image:
        "https://images.unsplash.com/photo-1533154683836-84ea7a0f3b12?q=80&w=1600",
    },
  ];

  return (
    <section
      id="news"
      className="relative w-full py-24"
    >
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
            Latest <span className="text-red-600">News</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Updates, innovations, and milestones shaping Naavi’s journey toward
            the future of autonomy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {news.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-black/50 border border-white/10 hover:border-sky-400/50 transition"
            >
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/70 to-black/95" />
              <div className="relative z-10 p-6 flex flex-col justify-end h-[380px]">
                <div className="flex items-center gap-2 text-sm text-white/70 mb-2">
                  <Calendar className="h-4 w-4" /> {item.date}
                </div>
                <h3 className="text-xl font-semibold group-hover:text-sky-400 transition">
                  {item.title}
                </h3>
                <p className="text-sm text-white/80 mt-2 line-clamp-3">
                  {item.desc}
                </p>
                <div className="mt-4 text-sm flex items-center text-red-400 group-hover:translate-x-1 transition-transform">
                  Read More <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
