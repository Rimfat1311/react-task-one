// import React from "react";

// function QuoteSection() {
//   return (
//     <section className="w-full bg-background-soft py-16 sm:py-20 lg:py-28 border-t border-neutral-200">
//       <div className="container-px">
//         <div className="max-w-4xl mx-auto text-center">
//           <p className="text-2xl sm:text-3xl lg:text-[40px] leading-tight font-bold tracking-tight text-neutral-900">
//             "Storage should be smart, local, and effortless — so you can focus on what matters."
//           </p>
//           <p className="mt-5 text-neutral-600 text-base sm:text-lg">— Stuf Storage Team</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default QuoteSection;







// 





import React from 'react'
import CompanyLogo1 from "../../assets/images/CompanyLogo1.svg"
import CompanyLogo2 from "../../assets/images/CompanyLogo2.svg"
import CompanyLogo3 from "../../assets/images/CompanyLogo3.svg"
import CompanyLogo4 from "../../assets/images/CompanyLogo4.svg"
import CompanyLogo5 from "../../assets/images/CompanyLogo5.svg"

const QuoteSection = () => {
  const logos = [
    { src: CompanyLogo1, alt: "Fast Company" },
    { src: CompanyLogo2, alt: "Inc." },
    { src: CompanyLogo3, alt: "The New York Times" },
    { src: CompanyLogo4, alt: "Yahoo!" },
    { src: CompanyLogo5, alt: "Forbes" }
  ];

  return (
    <section className="py-12 bg-[#F9F5F0] mb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;