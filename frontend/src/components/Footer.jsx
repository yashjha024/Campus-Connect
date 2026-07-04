import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

function Footer() {
  const [name, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name) {
      Swal.fire("Error", "Name is a required field", "error");
      return;
    }

    if (!rollNumber) {
      Swal.fire("Error", "Roll Number is a required field", "error");
      return;
    }

    if (!content) {
      Swal.fire("Error", "Content is a required field", "error");
      return;
    }

    try {
      const response = await axios.post("/api/v1/reviews", {
        name,
        rollNumber,
        content,
      });
      if (response.data) {
        Swal.fire("Success", "Review Submitted", "success");
        setName("");
        setRollNumber("");
        setContent("");
        // Optionally, you can refresh the reviews list here if needed
      }
    } catch (error) {
      console.log(error.response.data);
      if (error.response.status == 429) {
        Swal.fire(
          "Error",
          "You have reached the maximum number of reviews allowed per day",
          "error"
        );
      } else if (
        error.response &&
        error.response.data &&
        error.response.data.message === "Invalid roll number"
      ) {
        Swal.fire(
          "Error",
          "Incorrect Roll Number. Sign up to add a review",
          "error"
        );
      } else {
        Swal.fire(
          "Error",
          "There was an error submitting the review!",
          "error"
        );
      }
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div className="grid bg-slate-950 p-12 text-slate-300 border-t border-slate-800/80 md:grid-cols-3 gap-10">
      <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left leading-7 border-b border-slate-800/80 md:border-b-0 md:border-r md:pr-8 pb-8 md:pb-0">
        <img
          src="/static/images/Birla_Institute_of_Technology_Mesra.png"
          alt="BIT Mesra Logo"
          className="w-20 h-auto mb-4 opacity-90 hover:opacity-100 transition-opacity"
        />
        <p className="text-base font-bold text-white tracking-wide">Campus Connect</p>
        <p className="text-xs text-slate-400 mt-1">&copy; 2024 | campusconnect.ac.in</p>
        <p className="text-xs text-slate-500 mt-0.5">Birla Institute of Technology, Mesra</p>
        <a
          href="https://www.bitmesra.ac.in"
          className="text-indigo-400 hover:text-indigo-300 hover:underline text-xs mt-3 inline-block font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Official College Website →
        </a>
      </div>
      <div className="flex flex-col items-center md:items-start justify-center space-y-3 border-b border-slate-800/80 md:border-b-0 md:border-r md:px-8 pb-8 md:pb-0">
        <p className="text-sm font-semibold text-white uppercase tracking-wider mb-2">Quick Navigation</p>
        <Link
          to="/"
          className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200"
        >
          → Home
        </Link>
        <Link
          to="/sg"
          className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200"
        >
          → Student Registration
        </Link>
        <Link
          to="/features"
          className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200"
        >
          → Platform Features
        </Link>
        <Link
          to="/interview-experiences"
          className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200"
        >
          → Interview Experiences
        </Link>
      </div>
      <div className="flex flex-col items-center md:items-start gap-4">
        <div>
          <p className="text-base font-bold text-white">Share Your Experience</p>
          <p className="text-xs text-slate-400 mt-0.5">Help peers by sharing feedback about Campus Connect.</p>
        </div>
        <form
          className="flex flex-col w-full max-w-sm gap-3"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-1/2 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              autoComplete="name"
              required
            />
            <input
              type="text"
              placeholder="Roll No (BTECH/...)"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
              className="w-1/2 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              autoComplete="roll-number"
              required
            />
          </div>
          <textarea
            placeholder="Write your review here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-20 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 resize-none transition-all"
            required
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 font-bold text-sm text-white hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-200"
          >
            Submit Review ✨
          </button>
        </form>
      </div>
    </div>
  );
}

export default Footer;
