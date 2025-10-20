import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface VideoSectionProps {
  videoUrl?: string;
  title: string;
  subtitle: string;
  showScrollIndicator?: boolean;
}

export default function VideoSection({ 
  videoUrl = "https://videos.pexels.com/video-files/3843433/3843433-uhd_2560_1440_30fps.mp4",
  title, 
  subtitle, 
  showScrollIndicator = true 
}: VideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden blockBreakerBottomBorder">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        
        {showScrollIndicator && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-white" />
          </div>
        )}
      </div>
    </div>
  );
}