// import React from "react";
// import IconPlaceholder from "../../components/ui/IconPlaceholder.jsx";

// function Footer() {
//   return (
//     <footer className="bg-neutral-50 border-t border-neutral-200 mt-16">
//       <div className="container-px py-12">
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-sm text-neutral-600">
//           <div className="col-span-2 sm:col-span-3 lg:col-span-2">
//             <div className="w-36 h-8 bg-neutral-200 rounded-md mb-4" aria-label="Logo">{/* [Placeholder: Logo] */}</div>
//             <p className="text-neutral-600">Smart local storage near you.</p>
//             <div className="flex items-center gap-3 mt-4">
//               <IconPlaceholder size={28} />
//               <IconPlaceholder size={28} />
//               <IconPlaceholder size={28} />
//             </div>
//           </div>

//           <div>
//             <h3 className="font-semibold text-neutral-900 mb-3">Company</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:text-neutral-900">About</a></li>
//               <li><a href="#" className="hover:text-neutral-900">Careers</a></li>
//               <li><a href="#" className="hover:text-neutral-900">Press</a></li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-semibold text-neutral-900 mb-3">Resources</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:text-neutral-900">Blog</a></li>
//               <li><a href="#" className="hover:text-neutral-900">Help Center</a></li>
//               <li><a href="#" className="hover:text-neutral-900">FAQ</a></li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-semibold text-neutral-900 mb-3">Legal</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:text-neutral-900">Privacy</a></li>
//               <li><a href="#" className="hover:text-neutral-900">Terms</a></li>
//               <li><a href="#" className="hover:text-neutral-900">Cookies</a></li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-neutral-200 mt-12 pt-6 text-xs text-neutral-500">
//           <p>© {new Date().getFullYear()} Stuf Storage Clone. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;






import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#0d1d73] text-white ">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Left Logo + Contact */}
        <div>
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-white rounded-md"></div>
            <span className="text-2xl font-bold">stuf</span>
          </div>

          {/* Contact */}
          <h3 className="uppercase font-bold text-sm mb-3">Reach Out To Us</h3>
          <p className="mb-2">(833) 380-7883</p>
          <p className="mb-4">info@stufstorage.com</p>
          <div className="w-12 h-[2px] bg-[#e65c3a] mb-6"></div>

          {/* Social Icons */}
          <div className="flex gap-4 text-white">
            <a href="#" aria-label="Facebook">
              <Facebook className="w-6 h-6 hover:text-gray-300" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="w-6 h-6 hover:text-gray-300" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter className="w-6 h-6 hover:text-gray-300" />
            </a>
          </div>
        </div>

        {/* Middle Column 1 */}
        <div>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-gray-300">Locations</a></li>
            <li><a href="#" className="hover:text-gray-300">Sizing</a></li>
            <li><a href="#" className="hover:text-gray-300">FAQ</a></li>
            <li><a href="#" className="hover:text-gray-300">Self-storage near me</a></li>
            <li><a href="#" className="hover:text-gray-300">News</a></li>
            <li><a href="#" className="hover:text-gray-300">Refer a Friend</a></li>
          </ul>
        </div>

        {/* Middle Column 2 */}
        <div>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-gray-300">Landlord</a></li>
            <li><a href="#" className="hover:text-gray-300">Perks</a></li>
            <li><a href="#" className="hover:text-gray-300">Products</a></li>
            <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#e65c3a] w-24 mx-auto"></div>
      <div className="text-center text-sm py-6">
        Copyright © {new Date().getFullYear()} Stuf Inc. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;









// import React from "react";

// function Footer() {
//   return (
//     <footer className="bg-[#0d1a73] text-white py-12">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Grid wrapper */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-left justify-start">
          
//           {/* Left Section */}
//           <div>
//             <div className="flex justify-start items-center gap-2 mb-4">
//               <div className="w-8 h-8 bg-white rounded"></div>
//               <h2 className="font-bold text-xl">stuf</h2>
//             </div>
//             <h3 className="font-semibold mb-2">REACH OUT TO US</h3>
//             <p>(833) 380-7883</p>
//             <p className="mb-2">info@stufstorage.com</p>
//             <div className="w-8 h-[2px] bg-orange-500 mx-auto my-4"></div>
//             <div className="flex justify-start gap-4">
//               <span>🌐</span>
//               <span>📷</span>
//               <span>🐦</span>
//             </div>
//           </div>

//           {/* Middle Links */}
//           <div>
//             <ul className="space-y-2">
//               <li>Locations</li>
//               <li>Sizing</li>
//               <li>FAQ</li>
//               <li>Self-storage near me</li>
//               <li>News</li>
//               <li>Refer a Friend</li>
//             </ul>
//           </div>

//           {/* Right Links */}
//           <div>
//             <ul className="space-y-2">
//               <li>Landlord</li>
//               <li>Perks</li>
//               <li>Products</li>
//               <li>Privacy Policy</li>
//               <li>Terms of Service</li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-gray-300">
//           <p>Copyright © {new Date().getFullYear()} Stuf Inc. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
