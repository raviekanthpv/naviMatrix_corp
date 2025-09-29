import React from 'react';
import { Camera, Battery, Cpu, Radio, ArrowRight } from 'lucide-react';
import VideoSection from './VideoSection';

export default function ProductsPage() {
  const products = [
    {
      name: "AeroGuard Military",
      category: "Defense & Surveillance",
      specs: {
        range: "50km",
        flight: "8 hours",
        payload: "5kg",
        speed: "120 km/h"
      },
      features: [
        "Encrypted communications",
        "Night vision capability",
        "Weather resistant",
        "Silent operation mode"
      ],
      image: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "IndustroPro X1",
      category: "Industrial & Commercial",
      specs: {
        range: "25km",
        flight: "6 hours",
        payload: "3kg",
        speed: "80 km/h"
      },
      features: [
        "4K thermal imaging",
        "Real-time data streaming",
        "Collision avoidance",
        "GPS precision landing"
      ],
      image: "https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "SkyMapper Pro",
      category: "Survey & Mapping",
      specs: {
        range: "40km",
        flight: "10 hours",
        payload: "2kg",
        speed: "60 km/h"
      },
      features: [
        "LiDAR integration",
        "Sub-cm accuracy",
        "Automated flight plans",
        "Cloud data processing"
      ],
      image: "https://images.pexels.com/photos/3862618/pexels-photo-3862618.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <div id="products">
      <VideoSection
        title="Drone Systems"
        subtitle="Explore our commercial drone solutions designed for global deployment"
        videoUrl=""
      />
      
      {/* Products Grid */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Our Product Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each drone system is engineered for specific applications, combining cutting-edge technology 
              with field-proven reliability for mission-critical operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <div className="text-sm font-semibold text-sky-600 mb-2">{product.category}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{product.name}</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-sm text-gray-500">Range</div>
                      <div className="font-semibold">{product.specs.range}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Flight Time</div>
                      <div className="font-semibold">{product.specs.flight}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Payload</div>
                      <div className="font-semibold">{product.specs.payload}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Max Speed</div>
                      <div className="font-semibold">{product.specs.speed}</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center space-x-2 text-gray-600">
                          <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-lg font-medium inline-flex items-center justify-center space-x-2 transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Technology Features */}
          <div className="bg-slate-900 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Cutting-Edge Technology Stack
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Camera className="h-12 w-12 text-sky-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Advanced Imaging</h4>
                <p className="text-gray-300">4K/8K cameras with thermal and multispectral sensors</p>
              </div>
              <div className="text-center">
                <Battery className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Long Endurance</h4>
                <p className="text-gray-300">Extended flight times with intelligent power management</p>
              </div>
              <div className="text-center">
                <Cpu className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">AI Processing</h4>
                <p className="text-gray-300">Edge computing with real-time analytics</p>
              </div>
              <div className="text-center">
                <Radio className="h-12 w-12 text-red-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Secure Comms</h4>
                <p className="text-gray-300">Military-grade encryption and mesh networking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}