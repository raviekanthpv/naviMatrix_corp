import VideoSection from "./VideoSection";
import Mission from "./MissionBlock/Mission";
import HeroIntro from "./HeroIntro";
import MatrixProductIntro from "./MatrixProductIntro";
import FalconIntro from "./FalconBlock/FalconIntro";
import NewsSection from "./NewsSection";
import MatrixSAIntro from "./MatrixSAIntro";
import NavAIIntro from "./NavAIIntro";

export default function HomePage() {
  return (
    <div id="home" className="overflow-x-hidden">
        <VideoSection
          title="Next-Gen Drone Technology"
          subtitle="Pioneering autonomous flight systems for military, industrial, and global applications with cutting-edge AI and precision engineering"
          videoUrl=""
        />
        <Mission />
        <HeroIntro />
        <MatrixProductIntro />
     
        <MatrixSAIntro />
        

        <NavAIIntro />
      
        <FalconIntro />
      
        {/* <NewsSection /> */}
    </div>
  );
}
