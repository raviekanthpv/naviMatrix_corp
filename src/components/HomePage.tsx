import React from 'react';
import { Shield, Zap, Globe, Target, ArrowRight } from 'lucide-react';
import VideoSection from './VideoSection';

export default function HomePage() {
  return (
    <div id="home">
      <VideoSection
        title="Next-Gen Drone Technology"
        subtitle="Pioneering autonomous flight systems for military, industrial, and global applications with cutting-edge AI and precision engineering"
        videoUrl=""
      />
      
      {/* Content Section */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Revolutionizing Aerial Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced drone systems combine military-grade reliability with commercial efficiency, 
              delivering unmatched performance for defense, surveillance, and industrial operations worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 justify-center">
            <div className="bg-white text-center p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Shield className="h-12 w-12 text-sky-500 mb-4 block mx-auto" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Military Grade</h3>
              <p className="text-gray-600">
                Built to exceed military specifications with advanced encryption and tactical capabilities.
              </p>
            </div>

            <div className="bg-white text-center p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Zap className="h-12 w-12 text-orange-500 mb-4 block mx-auto" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI-Powered</h3>
              <p className="text-gray-600">
                Autonomous navigation with machine learning for real-time decision making and obstacle avoidance.
              </p>
            </div>

            {/* <div className="bg-white text-center p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Globe className="h-12 w-12 text-green-500 mb-4 block mx-auto" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Global Reach</h3>
              <p className="text-gray-600">
                Deployed across 25+ countries with 24/7 support and maintenance networks worldwide.
              </p>
            </div> */}

            <div className="bg-white text-center p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Target className="h-12 w-12 text-red-500 mb-4 block mx-auto" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Precision</h3>
              <p className="text-gray-600">
                Sub-centimeter accuracy with advanced sensor fusion and real-time data processing.
              </p>
            </div>
          </div>

          {/* <div className="bg-slate-900 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Operations?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading organizations worldwide who trust AeroTech Drones for their most critical missions.
            </p>
            <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center space-x-2 transition-colors">
              <span>Get Started Today</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}