// // // src/components/NotAverageStorage.jsx
// // import React from 'react';

// // // Assuming you have an image for the phone, import it here:
// // import DigitalKey from '../../assets/images/DigitalKey.jpg'; // Adjust path as needed

// // // Define custom colors for consistency
// // const COLORS = {
// //     TITLE_NAVY: '#172a58',
// //     UNDERLINE_ORANGE: '#e59976',
// //     HIGHLIGHT_BLUE: '#4a7eff', // For feature titles, if they need to be blue
// //     TEXT_DARK: '#333', // Dark text for descriptions
// // };

// // const NotAverageStorage = () => {
// //   return (
// //     <section className="py-16 md:py-24 px-4 bg-white">
// //       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
// //         {/* Left Column: Title and Features */}
// //         <div className="flex flex-col">
// //           {/* Main Title */}
// //           <h2 
// //             className="text-4xl md:text-5xl font-bold mb-1" 
// //             style={{ color: COLORS.TITLE_NAVY }}
// //           >
// //             Not Your Average Storage
// //           </h2>
// //           {/* Underline */}
// //           <div 
// //             className="w-16 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mb-12" // Using a gradient for a nicer look like the image
// //             style={{ backgroundColor: COLORS.UNDERLINE_ORANGE }}
// //           ></div>

// //           {/* Feature List */}
// //           <div className="space-y-10"> {/* Adds vertical space between features */}
// //             {/* Feature 1 */}
// //             <div>
// //               <h3 
// //                 className="text-xl md:text-2xl font-bold mb-2" 
// //                 style={{ color: COLORS.TITLE_NAVY }} // Using navy for feature titles as in the image
// //               >
// //                 Storage in your neighborhood
// //               </h3>
// //               <p className="text-gray-700 text-base md:text-lg leading-relaxed">
// //                 We transform underutilized spaces in nearby buildings 
// //                 into convenient storage solutions.
// //               </p>
// //             </div>

// //             {/* Feature 2 */}
// //             <div>
// //               <h3 
// //                 className="text-xl md:text-2xl font-bold mb-2" 
// //                 style={{ color: COLORS.TITLE_NAVY }}
// //               >
// //                 Secure, inviting spaces
// //               </h3>
// //               <p className="text-gray-700 text-base md:text-lg leading-relaxed">
// //                 Our clean, bright, and welcoming storage facilities are 
// //                 equipped with top-notch security and surveillance.
// //               </p>
// //             </div>

// //             {/* Feature 3 */}
// //             <div>
// //               <h3 
// //                 className="text-xl md:text-2xl font-bold mb-2" 
// //                 style={{ color: COLORS.TITLE_NAVY }}
// //               >
// //                 Digital key entry
// //               </h3>
// //               <p className="text-gray-700 text-base md:text-lg leading-relaxed">
// //                 Safe, simple, and at your fingertips – the Stuf Digital 
// //                 Key is the modern way to access your storage unit.
// //               </p>
// //             </div>

// //             {/* Feature 4 */}
// //             <div>
// //               <h3 
// //                 className="text-xl md:text-2xl font-bold mb-2" 
// //                 style={{ color: COLORS.TITLE_NAVY }}
// //               >
// //                 Personalized service
// //               </h3>
// //               <p className="text-gray-700 text-base md:text-lg leading-relaxed">
// //                 Manage your reservation online or chat with a member
// //               </p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Right Column: Image */}
// //         <div className="flex justify-center lg:justify-end">
// //           <div className="relative w-full max-w-md">
// //             {/* The background shape */}
// //             <div className="absolute inset-0 bg-gray-100 rounded-[3rem] transform rotate-3 -translate-y-4 -translate-x-4 opacity-50 z-0"></div>
// //             <div className="absolute inset-0 bg-gray-100 rounded-[3rem] transform -rotate-3 translate-y-4 translate-x-4 opacity-50 z-0"></div>

// //             {/* The main image, slightly larger and rounded */}
// //             <img 
// //               src={DigitalKey} 
// //               alt="Phone showing digital key interface for storage unit" 
// //               className="relative z-10 w-full h-auto rounded-[3rem] shadow-xl" 
// //             />
// //           </div>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default NotAverageStorage;





// // src/components/NotAverageStorage.jsx
// import React from 'react';
// import PrimaryButton from "../ui/PrimaryButton"; 
// import DigitalKey from '../../assets/images/DigitalKey.jpg'; 

// const COLORS = {
//     TITLE_NAVY: '#172a58',
//     UNDERLINE_ORANGE: '#e59976',
//     BUTTON_BLUE: '#4a7eff', 
//     TEXT_DARK: '#333', 
// };

// const features = [
//   { id: 1, text: "Storage in your neighborhood", description: "We transform underutilized spaces in nearby buildings into convenient storage solutions." },
//   { id: 2, text: "Secure, inviting spaces", description: "Our clean, bright, and welcoming storage facilities are equipped with top-notch security and surveillance." },
//   { id: 3, text: "Digital key entry", description: "Safe, simple, and at your fingertips – the Stuf Digital Key is the modern way to access your storage unit." },
//   { id: 4, text: "Personalized service", description: "Manage your reservation online or chat with a member of our 5-star Member Experience team." },
// ];

// const FeatureItem = ({ title, description }) => (
//     <div>
//         <h3 
//             className="text-xl md:text-2xl font-bold mb-2" 
//             style={{ color: COLORS.TITLE_NAVY }}
//         >
//             {title}
//         </h3>
//         <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//             {description}
//         </p>
//     </div>
// );


// const NotAverageStorage = () => {
//   return (
//     <section className=" py-16 md:py-24 px-4 bg-white">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2  gap-12 lg:gap-40  items-start"> 
        
//         {/* Left Column: Title, Features, and CTA */}
//         <div className="flex flex-col justify-center">
//           {/* Main Title */}
//           <h2 
//             className="text-4xl md:text-5xl font-bold mb-1" 
//             style={{ color: COLORS.TITLE_NAVY }}
//           >
//             Not Your Average Storage
//           </h2>
//           {/* Underline - NOW LEFT ALIGNED */}
//           <div 
//             className="w-16 h-1 mb-12"
//             style={{ backgroundColor: COLORS.UNDERLINE_ORANGE }}
//           ></div>

//           {/* Feature List */}
//           <div className="space-y-10 mb-10"> 
//             {features.map(feature => (
//               <FeatureItem 
//                 key={feature.id} 
//                 title={feature.text} 
//                 description={feature.description} 
//               />
//             ))}
//           </div>
          
//           {/* CTA Button */}
//           <div className="mt-4"> 
//               <PrimaryButton 
//                 variant="custom" 
//                 className="px-8 py-4 text-base sm:text-lg font-semibold border-2 rounded-full transition duration-300"
//                 style={{ 
//                     borderColor: COLORS.BUTTON_BLUE, 
//                     color: COLORS.BUTTON_BLUE,
//                 }}
//               >
//                 Explore Our Storage Facilities
//               </PrimaryButton>
//           </div>
//         </div>

//         {/* Right Column: Image with background shapes */}
//         <div className="flex justify-center lg:justify-start">
//           <div className="relative w-full max-w-lg lg:max-w-md 
//             // FINAL FIX: Negative margin pulls the image slightly left for the perfect overlap
//             lg:-ml-12 lg:-mr-12" 
//           > 
//             <div className="absolute inset-0 bg-gray-100 rounded-[3rem] transform rotate-3 -translate-y-4 -translate-x-4 opacity-50 z-0"></div>
//             <div className="absolute inset-0 bg-gray-100 rounded-[3rem] transform -rotate-3 translate-y-4 translate-x-4 opacity-50 z-0"></div>

//             <img 
//               src={DigitalKey} 
//               alt="Phone showing digital key interface for storage unit" 
//               className="relative z-10 w-full h-auto rounded-[3rem] " 
//             />
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default NotAverageStorage;




import React from 'react';

// Replace this with your actual import path
import DigitalKey from '../../assets/images/DigitalKey.jpg';


export default function StorageLanding() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-8 lg:py-10">
        {/* Header */}
        <div className="mb-10 lg:mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#003087] mb-5 leading-tight">
            Not Your Average Storage
          </h1>
          <div className="w-16 h-1 bg-[#ff6b35]"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-2 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-5 lg:pr-8">
            {/* Feature 1 */}
            <div>
              <h2 className="text-3xl lg:text-3xl font-bold text-[#003087] mb-4 leading-snug">
                Storage in your neighborhood
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We transform underutilized spaces in nearby buildings into convenient storage solutions.
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <h2 className="text-3xl lg:text-3xl font-bold text-[#003087] mb-4 leading-snug">
                Secure, inviting spaces
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our clean, bright, and welcoming storage facilities are equipped with top-notch security and surveillance.
              </p>
            </div>

            {/* Feature 3 */}
            <div>
              <h2 className="text-3xl lg:text-3xl font-bold text-[#003087] mb-4 leading-snug">
                Digital key entry
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Safe, simple, and at your fingertips — the Stuf Digital Key is the modern way to access your storage unit.
              </p>
            </div>

            {/* Feature 4 */}
            <div>
              <h2 className="text-3xl lg:text-3xl font-bold text-[#003087] mb-4 leading-snug">
                Personalized service
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Manage your reservation online or chat with a member of our 5-star Member Experience team.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button className="px-12 py-4 border-2 border-[#2563ff] text-[#2563ff] rounded-full text-lg font-semibold hover:bg-[#2563ff] hover:text-white transition-all duration-300">
                Explore Our Storage Facilities
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <img 
                src={DigitalKey} 
                alt="Digital Key App Interface" 
                className="w-full h-auto rounded-[3rem]  object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}