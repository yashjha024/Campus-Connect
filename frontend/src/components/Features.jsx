import React, { useState } from "react";
import feat_det from "../feat_det";
import { FaPlus, FaMinus } from "react-icons/fa";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Features = () => {
  const [isOpen, setIsOpen] = useState(Array(feat_det.length).fill(false));

  const toggleDropdown = (index) => {
    setIsOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="bg-slate-950 min-h-screen text-white selection:bg-indigo-500 selection:text-white flex flex-col justify-between">
      <div>
        <NavBar />
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-indigo-400 font-semibold tracking-wider uppercase text-xs md:text-sm px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
              Explore Tools
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mt-4 mb-6 bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
              Platform Features & Capabilities
            </h1>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed">
              Uncover a seamless and intuitive academic experience as you navigate through advanced tools designed to enhance student engagement and campus administration.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {feat_det.map((ele, index) => (
              <div 
                key={index} 
                className={`p-6 border rounded-2xl transition-all duration-300 shadow-lg ${
                  isOpen[index] 
                    ? "bg-slate-900 border-indigo-500/50 shadow-indigo-500/10" 
                    : "bg-slate-900/60 border-slate-800/80 hover:bg-slate-900 hover:border-slate-700"
                }`}
              >
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleDropdown(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                      {<ele.icon size={24} />}
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-wide">{ele.title}</h3>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                    <FaPlus className={`transition-transform duration-300 text-sm ${isOpen[index] ? "rotate-45 text-indigo-400" : ""}`} />
                  </div>
                </div>
                <div className={`transition-all duration-300 overflow-hidden ${isOpen[index] ? "max-h-48 mt-4 pt-4 border-t border-slate-800/80" : "max-h-0"}`}>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed pl-16">{ele.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Features;
