import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import About from "./About";
import ReviewCarousel from "./ReviewCarousel";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-white selection:bg-indigo-500 selection:text-white">
      <NavBar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16 pb-24 lg:pt-28 lg:pb-36 px-6 md:px-12 text-center bg-gradient-to-b from-slate-950 via-indigo-950/40 to-slate-900 border-b border-slate-800/80">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs md:text-sm font-medium mb-8 animate-pulse">
            <span>✨</span>
            <span>Official Digital Academic Portal — BIT Mesra</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight md:leading-none mb-8 bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
            Empowering Campus Life Through Smart Digital Management
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Streamline academic records, track placement recruitment drives, book campus venues, and collaborate with peers—all in one unified, role-based platform.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/log"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-lg shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              🚀 Student Login
            </Link>
            <Link
              to="/public-user"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white font-semibold text-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              🔍 Search Student Profile
            </Link>
          </div>
        </div>
      </div>

      <About />
      
      {/* Call-to-action section */}
      <div className="bg-slate-950 py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-900/80 via-indigo-900/80 to-purple-900/80 border border-indigo-500/30 backdrop-blur-xl shadow-2xl rounded-3xl p-8 md:p-14 flex flex-col md:flex-row items-center justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-indigo-500/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700 pointer-events-none"></div>
          
          <div className="mb-8 md:mb-0 max-w-xl relative z-10 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Know Your Student
            </h2>
            <p className="text-indigo-200 mt-3 text-base md:text-lg leading-relaxed">
              Discover detailed student academic profiles, verify achievements, and explore research projects and internship records instantly.
            </p>
          </div>
          <Link
            to="/public-user"
            className="relative z-10 bg-white text-indigo-950 text-lg font-bold rounded-xl px-8 py-4 hover:bg-indigo-50 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 whitespace-nowrap"
          >
            Find a Student →
          </Link>
        </div>
      </div>

      <ReviewCarousel />
      <Footer />
    </div>
  );
}
