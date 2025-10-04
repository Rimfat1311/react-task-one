// import React from "react";
// import Card from "../../components/ui/Card.jsx";
// import IconPlaceholder from "../../components/ui/IconPlaceholder.jsx";
// import SectionTitle from "../../components/ui/SectionTitle.jsx";

// const FEATURES = [
//   {
//     title: "24/7 Access",
//     desc: "Come and go on your schedule with secure, smart entry.",
//   },
//   {
//     title: "Flexible Sizing",
//     desc: "Pick the right size today, adjust as your needs change.",
//   },
//   {
//     title: "Local & Convenient",
//     desc: "Neighborhood locations close to home and work.",
//   },
//   {
//     title: "Modern Security",
//     desc: "Monitored facilities with smart locks and cameras.",
//   },
// ];

// function FeatureList() {
//   return (
//     <section className="container-px py-16">
//       <SectionTitle as="h2" className="text-center mb-12">Not your average storage</SectionTitle>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
//         {FEATURES.map((f, idx) => (
//           <Card key={idx} className="p-6 lg:p-8 text-center">
//             <div className="flex justify-center">
//               <IconPlaceholder size={56} />
//             </div>
//             <h3 className="mt-4 text-lg font-semibold text-neutral-900">{f.title}</h3>
//             <p className="mt-2 text-neutral-600 leading-relaxed">{f.desc}</p>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default FeatureList;









// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const LOCATIONS = [
//   {
//     city: "Atlanta",
//     image: "https://images.unsplash.com/photo-1477980572062-5a53b711b4bc?w=800&h=600&fit=crop"
//   },
//   {
//     city: "Boston",
//     image: "https://images.unsplash.com/photo-1570519392814-2e1d6c46cd4c?w=800&h=600&fit=crop"
//   },
//   {
//     city: "Los Angeles",
//     image: "https://images.unsplash.com/photo-1542259009477-d625272157b7?w=800&h=600&fit=crop"
//   },
//   {
//     city: "New Jersey",
//     image: "https://images.unsplash.com/photo-1546436834-df24cadfea1c?w=800&h=600&fit=crop"
//   },
//   {
//     city: "New York",
//     image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop"
//   },
//   {
//     city: "San Diego",
//     image: "https://images.unsplash.com/photo-1551016043-06083b1e30b1?w=800&h=600&fit=crop"
//   }
// ];

// export default function LocationsSection() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % Math.max(1, LOCATIONS.length - 2));
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + Math.max(1, LOCATIONS.length - 2)) % Math.max(1, LOCATIONS.length - 2));
//   };

//   return (
//     <section className="py-16 px-4 bg-white">
//       <div className="max-w-7xl mx-auto">
//         {/* Title with Orange Underline */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl lg:text-5xl font-bold text-[#0A1E5E] inline-block">
//             Discover Our Locations
//           </h2>
//           <div className="w-16 h-1 bg-[#D96541] mx-auto mt-3"></div>
//         </div>

//         {/* Cards Container */}
//         <div className="relative">
//           {/* Navigation Arrows */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
//             aria-label="Previous locations"
//           >
//             <ChevronLeft className="w-6 h-6 text-gray-600" />
//           </button>

//           <button
//             onClick={nextSlide}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
//             aria-label="Next locations"
//           >
//             <ChevronRight className="w-6 h-6 text-gray-600" />
//           </button>

//           {/* Cards Grid */}
//           <div className="">
//             <div 
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
//             >
//               {LOCATIONS.map((location, idx) => (
//                 <div
//                   key={idx}
//                   className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
//                 >
//                   <div className="bg-white rounded-3xl shadow-lg overflow-hidden h-full border border-gray-100">
//                     {/* Image */}
//                     <div className="relative h-64 overflow-hidden">
//                       <img
//                         src={location.image}
//                         alt={`${location.city} skyline`}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>

//                     {/* Content */}
//                     <div className="p-6 pb-8">
//                       <h3 className="text-2xl font-bold text-[#0A1E5E] mb-6">
//                         Storage in {location.city}
//                       </h3>

//                       <button className="w-full py-3.5 px-6 border-2 border-[#2B5CE7] text-[#2B5CE7] rounded-full font-semibold hover:bg-[#2B5CE7] hover:text-white transition-colors text-base">
//                         View All Facilities
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }







import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Atlanta from "../../assets/images/Atlanta.jpg"
import Boston  from "../../assets/images/Boston.jpg"
import LosAngeles from "../../assets/images/LosAngeles.jpg"
import NewJersey from "../../assets/images/NewJersey.jpg"
import NewYork from "../../assets/images/NewYork.jpg"
import SanDiego from "../../assets/images/SanDiego.jpg"


const LOCATIONS = [
  {
    city: "Atlanta",
    image: Atlanta
  },
  {
    city: "Boston",
    image:Boston
  },
  {
    city: "Los Angeles",
    image: LosAngeles
  },
  {
    city: "New Jersey",
    image: NewJersey
  },
  {
    city: "New York",
    image: NewYork
  },
  {
    city: "San Diego",
    image: SanDiego
  }
];

export default function LocationsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, LOCATIONS.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, LOCATIONS.length - 2)) % Math.max(1, LOCATIONS.length - 2));
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title with Orange Underline and Navigation */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex-1"></div>
          
          <div className="text-center">
            <h2 className="text-4xl lg:text-4xl font-bold text-[#0A1E5E] inline-block">
              Discover Our Locations
            </h2>
            <div className="w-16 h-1 bg-[#D96541] mx-auto mt-3"></div>
          </div>

          {/* Navigation Arrows - Top Right */}
          <div className="flex-1 flex justify-end items-start mt-20 gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
              aria-label="Previous locations"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
              aria-label="Next locations"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Cards Container */}
        <div className="relative">

          {/* Cards Grid */}
          <div className="px-10">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {LOCATIONS.map((location, idx) => (
                <div
                  key={idx}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="bg-white p-5 rounded-3xl shadow-lg overflow-hidden h-full border border-gray-50">
                    {/* Image */}
                    <div className="relative overflow-hidden mb-3">
                      <img
                        src={location.image}
                        alt={`${location.city} skyline`}
                        className="w-full h-48 object-cover rounded-xl"
                      />
                    </div>

                    {/* Content */}
                    <div className=" items-center ">
                      <h3 className="text-xl font-bold text-[#0A1E5E] ">
                        Storage in {location.city}
                      </h3>

                      <button className="w-full my-8 py-2 px-4 border  border-[#1642F0] text-[#2B5CE7] rounded-full font-semibold hover:bg-[#2B5CE7] hover:text-white transition-colors text-base">
                        View All Facilities
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='text-center text-xl font-bold mt-5 pt-5 text-[#1642F0]'>Explore All Locations</div>
    </section>
  );
}