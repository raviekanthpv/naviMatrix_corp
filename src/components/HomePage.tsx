import VideoSection from "./VideoSection";
import MissionBlock from "./MissionBlock";
import HeroIntro from "./HeroIntro";
import MatrixProductIntro from "./MatrixProductIntro";
import FalconProductIntro from "./FalconProductIntro";
import NewsSection from "./NewsSection";

export default function HomePage() {
  return (
    <div id="home">
      <VideoSection
        title="Next-Gen Drone Technology"
        subtitle="Pioneering autonomous flight systems for military, industrial, and global applications with cutting-edge AI and precision engineering"
        videoUrl=""
      />
      <MissionBlock />
      <HeroIntro />
      <MatrixProductIntro />
      <FalconProductIntro />
      <NewsSection />
    </div>
  );
}
