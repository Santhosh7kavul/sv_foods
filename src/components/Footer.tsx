// import Link from "next/link";
// import Image from "next/image";
// import { Mail, MapPin, Phone } from "lucide-react";
// const Footer = () => {
//   return (
//     <footer className="inset-x-0 bottom-0 bg-primary text-black p-4 mt-8">


//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {/* div 1 */}
//         <div className="flex flex-col items-center ml-2 gap-6">
//           <Link href="/" className="mr-6">
//             <Image
//               src="/logo.png"
//               alt="Logo"
//               width={95}
//               height={95}
//               priority
//             />
//           </Link>
//           <div className="text-gold font-bold ">
//             <p>Corn Rich Silage, we are passionate
//               about providing innovative and
//               sustainable cattle feeding solutions
//               that support the health, growth, and
//               productivity of livestock.</p>
//           </div>
//         </div>
//         {/* div 2 */}
//         <div className="flex flex-col gap-2">
//           <div className="text-white font-bold text-2xl font-inria tracking-wide">Quick Links</div>
//           <div className="text-gold font-bold ">About us</div>
//           <div className="text-gold font-bold ">Contact us</div>
//           <div className="text-gold font-bold ">Blog</div>
//         </div>

//         {/* div 3 */}
//         <div className="flex flex-col gap-2">
//           <div className="text-white font-bold text-2xl font-inria tracking-wide">Get in Touch</div>
//           <div className="text-gold font-bold flex items-center ">
//             <MapPin className="w-12 h-12 text-white p-2 shadow-md mb-3 overflow-visible" />
//             Kellode, Hosadurga
//           </div>
//           <div className="text-gold font-bold flex items-center ">
//             <Mail className="w-12 h-12 text-white p-2 shadow-md mb-3 overflow-visible" />
//             info@cornrichsilage.in</div>
//           <div className="text-gold font-bold flex items-center ">
//             <Phone className="w-12 h-12 text-white p-2 shadow-md mb-3 overflow-visible" />
//             +91-8105643121</div>
//         </div>
//       </div>




//       <div className="container mx-auto text-center font-bold text-white mt-6">
//         <p>&copy; {new Date().getFullYear()} Cornrich Silage. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="inset-x-0 bottom-0 bg-primary text-black p-6 mt-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link href="/" className="transition-transform duration-300 hover:scale-105">
              <div className="shadow-md rounded-lg p-2">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={95}
                  height={95}
                  className="rounded"
                  priority
                />
              </div>
            </Link>
            <div className="text-gold font-bold mt-4 max-w-sm">
              <p className="leading-relaxed">
                Corn Rich Silage, we are passionate
                about providing innovative and
                sustainable cattle feeding solutions
                that support the health, growth, and
                productivity of livestock.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col md:items-start items-center">
            <div className="text-white font-bold text-2xl font-inria tracking-wide mb-4 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gold rounded"></span>
            </div>
            <nav className="flex flex-col space-y-3">
              <Link href="#" className="text-gold font-bold hover:underline transition-all duration-300">
                About us
              </Link>
              <Link href="#" className="text-gold font-bold hover:underline transition-all duration-300">
                Contact us
              </Link>
              <Link href="#" className="text-gold font-bold hover:underline transition-all duration-300">
                Blog
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:items-start items-center">
            <div className="text-white font-bold text-2xl font-inria tracking-wide mb-4 relative">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gold rounded"></span>
            </div>
            <div className="space-y-4">
              <div className="text-gold font-bold flex items-center">
                <div className="mr-3">
                  <MapPin className="w-10 h-10 text-white p-2 shadow-md rounded-full" />
                </div>
                <span>Kellode, Hosadurga</span>
              </div>
              
              <div className="text-gold font-bold flex items-center">
                <div className="mr-3">
                  <Mail className="w-10 h-10 text-white p-2 shadow-md rounded-full" />
                </div>
                <span>info@cornrichsilage.in</span>
              </div>
              
              <div className="text-gold font-bold flex items-center">
                <div className="mr-3">
                  <Phone className="w-10 h-10 text-white p-2 shadow-md rounded-full" />
                </div>
                <span>+91-8105643121</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/30 my-6"></div>
        
        <div className="text-center font-bold text-white">
          <p>&copy; {new Date().getFullYear()} Cornrich Silage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;