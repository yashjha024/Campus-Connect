import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ReviewCarousel = () => {
  const data = [
    {
      name: "Aarav Sharma",
      specialties: "Campus Connect has revolutionized how I manage my academic records and projects. The ease of uploading and accessing my higher examination details and internships is unparalleled. It's a must-have for every student aiming for excellence!",
    },
    {
      name: "Rohan Gupta",
      specialties: "Campus Connect's ability to store and organize all my academic and internship records in one place is fantastic. The review functionality is a great addition, helping me share my experiences with peers. An excellent tool for students!",
    },
    {
      name: "Priya Verma",
      specialties: "Campus Connect is an invaluable tool for any student. It keeps all my academic records, project details, and internship information organized and easily accessible. I highly recommend it to all my peers!",
    },
    {
      name: "Vikram Singh",
      specialties: "Campus Connect has been a game-changer for me. Managing my academic and higher examination details has never been this simple. The platform's user-friendly design makes it an essential tool for every student.",
    },
    {
      name: "Siddharth Mehta",
      specialties: "I can't imagine my student life without Campus Connect. The convenience of having all my academic records, exam details, and internship information in one place is incredible. The review feature is great for sharing feedback with the admin.",
    },
    {
      name: "Neha Patel",
      specialties: "Campus Connect provides a holistic solution for managing student data. Uploading my academic records and tracking my placements has never been easier. The admin's ability to access all data ensures efficient management. A brilliant platform for students!",
    },
    {
      name: "Aditya Joshi",
      specialties: "The seamless interface of Campus Connect makes it incredibly easy to track my placements and exam details. It's a comprehensive platform that has significantly improved my academic journey. Highly recommended!"
    },
    {
      name: "Ananya Rao",
      specialties: "Campus Connect is a transformative platform for students, simplifying the management of academic records, project details, and internships. Its user-friendly interface and comprehensive features make it an essential tool for achieving academic and career excellence."
    }
  ];

  return (
    <div className="py-24 lg:px-32 px-6 bg-slate-950 text-white border-t border-slate-800/80 relative overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-indigo-400 font-semibold tracking-wider uppercase text-xs md:text-sm px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
          Testimonials
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold mt-4 bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
          What Students Say
        </h1>
      </div>
      <div className="mt-5">
        <Swiper
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 3500 }}
          navigation={true}
          modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
          className="mySwiper !pb-12"
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 10,
            stretch: 50,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
          }}
        >
          {data.map((e, index) => (
            <SwiperSlide 
              key={index} 
              className="swiper-slide bg-slate-900/90 border border-slate-800/80 text-slate-200 rounded-2xl mb-6 cursor-pointer p-6 hover:border-indigo-500/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-[300px] lg:h-[320px]"
            >
              <div className="flex flex-col justify-between h-full w-full text-left">
                <div>
                  <div className="text-indigo-400 text-sm mb-3">⭐⭐⭐⭐⭐</div>
                  <p className="text-sm md:text-base text-slate-300 italic leading-relaxed line-clamp-6">
                    "{e.specialties}"
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-white text-sm shrink-0">
                    {e.name.charAt(0)}
                  </div>
                  <div>
                    <h2 className="font-semibold text-sm md:text-base text-white leading-tight">{e.name}</h2>
                    <p className="text-xs text-indigo-400 mt-0.5">Student, BIT Mesra</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewCarousel;
