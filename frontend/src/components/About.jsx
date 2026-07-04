import React from "react";

const About = () => {
  return (
    <div className="bg-slate-900 text-white py-24 px-6 md:px-12 border-t border-slate-800/80 relative overflow-hidden">
      {/* Background glow circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-400 font-semibold tracking-wider uppercase text-xs md:text-sm px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
            Why Campus Connect?
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-6 bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            Revolutionizing Academic Management
          </h2>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            Campus Connect is the official centralized digital portal for Birla Institute of Technology, Mesra. Designed to bridge the gap between students, faculty, and administration through automated workflows and smart analytics.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6 hover:bg-slate-800 hover:border-indigo-500/50 hover:-translate-y-1.5 transition-all duration-300 shadow-xl group">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-2xl mb-4 group-hover:scale-110 transition-transform">
              📊
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">AI-Driven Analytics</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Track SGPA/CGPA progression, analyze academic performance trends, and receive personalized insights for excellence.
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6 hover:bg-slate-800 hover:border-indigo-500/50 hover:-translate-y-1.5 transition-all duration-300 shadow-xl group">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-2xl mb-4 group-hover:scale-110 transition-transform">
              🚀
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Placement & Career</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Access real-time CTC statistics, company recruitment drives, internship opportunities, and higher education records.
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6 hover:bg-slate-800 hover:border-indigo-500/50 hover:-translate-y-1.5 transition-all duration-300 shadow-xl group">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-2xl mb-4 group-hover:scale-110 transition-transform">
              🏢
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Venue & Event Booking</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Check real-time classroom and seminar hall availability. Submit automated room booking requests with admin approval workflows.
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6 hover:bg-slate-800 hover:border-indigo-500/50 hover:-translate-y-1.5 transition-all duration-300 shadow-xl group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-2xl mb-4 group-hover:scale-110 transition-transform">
              🤝
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Alumni & Peer Network</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Connect with BIT Mesra alumni, explore industry work experiences, share interview reviews, and foster mentorship.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
