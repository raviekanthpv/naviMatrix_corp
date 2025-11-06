import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  const team = [
    {
      name: "Navanit AV",
      position: "CEO",
      background: "Entrepreneur | Defense & Aerospace",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQEa4e3PdTdeSw/profile-displayphoto-shrink_200_200/B56ZUxl0RWHoAY-/0/1740293753047?e=1761782400&v=beta&t=aW0CXq10wl05WvSiaJmqUgbyTWH45V1JlAgDn5QV1ZY",
    },
  ];

  const milestones = [
    { year: "2023", event: "Company founded by aerospace veterans" },
    { year: "2024", event: "First prototype successfully tested" },
    { year: "2025", event: "Series A funding round completed" },
  ];

  return (
    <div id="about" className="bg-white">
      {/* Hero Section */}
      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Building the Future of Flight
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Founded by aerospace industry veterans, NaviMatriX is
            revolutionizing autonomous flight with military-grade precision and
            commercial scalability.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To democratize advanced aerial intelligence by creating the
                world's most reliable, intelligent, and secure autonomous drone
                systems for military, industrial, and commercial applications.
              </p>
              <p className="text-lg text-gray-600">
                We believe that autonomous flight technology should be
                accessible to organizations worldwide, enabling them to achieve
                their objectives with unprecedented efficiency and safety.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To become the global leader in autonomous drone systems, setting
                the standard for reliability, intelligence, and security in
                unmanned aerial vehicles across all industries and applications.
              </p>
              <p className="text-lg text-gray-600">
                We envision a world where intelligent drones seamlessly
                integrate into daily operations, making the impossible possible
                and the dangerous safe.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our leadership combines decades of experience from leading
              aerospace, defense, and technology companies.
            </p>
          </div>

          <div className="grid gap-8 mb-16 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-items-center">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {member.name}
                </h3>
                <div className="text-sky-600 font-semibold mb-4">
                  {member.position}
                </div>
                <p className="text-gray-600">{member.background}</p>
              </div>
            ))}
          </div>

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Users className="h-12 w-12 text-sky-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-slate-900 mb-2">150+</div>
              <div className="text-gray-600">Expert Engineers</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Award className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-slate-900 mb-2">25+</div>
              <div className="text-gray-600">Industry Awards</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Globe className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-slate-900 mb-2">50+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Lightbulb className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-slate-900 mb-2">100+</div>
              <div className="text-gray-600">Patents Filed</div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Timeline */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startup to global leader, our milestones reflect our
              commitment to innovation and excellence in autonomous flight
              technology.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-sky-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div
                    className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}
                  >
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-2xl font-bold text-sky-600 mb-2">
                        {milestone.year}
                      </div>
                      <div className="text-gray-700">{milestone.event}</div>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-8 h-8 bg-sky-500 rounded-full border-4 border-white shadow-lg z-10">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Join Us in Shaping the Future
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're looking for career opportunities, partnerships, or
            investment possibilities, we'd love to hear from you.
          </p>
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center space-x-2 transition-colors">
            <span>Get In Touch</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
