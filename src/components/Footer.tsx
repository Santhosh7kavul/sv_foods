import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
const Footer = () => {
  return (
    <footer className="inset-x-0 bottom-0 bg-primary text-black p-4 mt-8">


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* div 1 */}
        <div className="flex flex-col items-center ml-2 gap-6">
          <Link href="/" className="mr-6">
            <Image
              src="/logo.png"
              alt="Logo"
              width={95}
              height={95}
              priority
            />
          </Link>
          <div className="text-gold font-bold ">
            <p>Corn Rich Silage, we are passionate
              about providing innovative and
              sustainable cattle feeding solutions
              that support the health, growth, and
              productivity of livestock.</p>
          </div>
        </div>
        {/* div 2 */}
        <div className="flex flex-col gap-2">
          <div className="text-white font-bold text-2xl font-inria tracking-wide">Quick Links</div>
          <div className="text-gold font-bold ">About us</div>
          <div className="text-gold font-bold ">Contact us</div>
          <div className="text-gold font-bold ">Blog</div>
        </div>

        {/* div 3 */}
        <div className="flex flex-col gap-2">
          <div className="text-white font-bold text-2xl font-inria tracking-wide">Get in Touch</div>
          <div className="text-gold font-bold flex items-center ">
            <MapPin className="w-12 h-12 text-white p-2 shadow-md mb-3 overflow-visible" />
            Kellode, Hosadurga
          </div>
          <div className="text-gold font-bold flex items-center ">
            <Mail className="w-12 h-12 text-white p-2 shadow-md mb-3 overflow-visible" />
            info@cornrichsilage.in</div>
          <div className="text-gold font-bold flex items-center ">
            <Phone className="w-12 h-12 text-white p-2 shadow-md mb-3 overflow-visible" />
            +91-8105643121</div>
        </div>
      </div>




      <div className="container mx-auto text-center font-bold text-white mt-6">
        <p>&copy; {new Date().getFullYear()} S.V Foods. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
