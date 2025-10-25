import VideoSection from "./VideoSection";
import Mission from "./MissionBlock/Mission";
import HeroIntro from "./HeroIntro";
import MatrixProductIntro from "./MatrixProductIntro";
import FalconIntro from "./FalconBlock/FalconIntro";
import NewsSection from "./NewsSection";

export default function HomePage() {
  return (
    <div id="home">
      <section className="bg-section-dark text-text-light">
        <VideoSection
          title="Next-Gen Drone Technology"
          subtitle="Pioneering autonomous flight systems for military, industrial, and global applications with cutting-edge AI and precision engineering"
          videoUrl=""
        />
      </section>
      <section className="bg-section-light text-text-dark">
        <Mission />
      </section>
      <section className="bg-section-dark text-text-light">
        <HeroIntro />
      </section>
      <section className="bg-section-light text-text-dark">
        <MatrixProductIntro />
      </section>
      <section className="bg-section-light text-text-dark">
        <FalconIntro />
      </section>
      <section className="bg-section-dark text-text-light">
        <NewsSection />
      </section>
    </div>
  );
}
