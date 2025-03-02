//   // "use client"; // Ensure this component runs on the client side

//   // import Link from "next/link";
//   // import Image from "next/image";
//   // import { usePathname } from "next/navigation"; // Correct way to get the current route in Next.js App Router

//   // const Header = () => {
//   //   const pathname = usePathname(); // Get current path

//   //   return (
//   //     <header className="bg-white text-black p-4 shadow-md">
//   //       <div className=" mx-auto flex justify-between items-center">
//   //         {/* Logo */}
//   //         <Link href="/">
//   //           <Image 
//   //             src="/logo.png"  
//   //             alt="Logo"
//   //             width={95} 
//   //             height={95} 
//   //             priority
//   //           />
//   //         </Link>

//   //         {/* Navigation */}
//   //         <nav className="font-bold">
//   //           <ul className="flex space-x-4">
//   //             {[
//   //               { name: "HOME", path: "/" },
//   //               { name: "ABOUT US", path: "/about" },
//   //               { name: "PRODUCT", path: "/product" },
//   //               { name: "GALLERY", path: "/gallery" },
//   //               { name: "BLOG", path: "/blog" },
//   //               { name: "CONTACT US", path: "/contact" },
//   //             ].map(({ name, path }) => (
//   //               <li key={name}>
//   //                 <Link
//   //                   href={path}
//   //                   className={`px-3 py-2 transition-all duration-300 
//   //                     ${
//   //                       pathname === path 
//   //                         ? "text-gold bg-primary rounded-md" // Active Page
//   //                         : "hover:text-gold hover:underline"
//   //                     }`
//   //                   }
//   //                 >
//   //                   {name}
//   //                 </Link>
//   //               </li>
//   //             ))}
//   //           </ul>
//   //         </nav>
//   //       </div>
//   //     </header>
//   //   );
//   // };

//   // export default Header;

// "use client"; // Ensure this component runs on the client side

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { Menu, X } from "lucide-react";

// const Header = () => {
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);

//   const handleLinkClick = () => {
//     setIsOpen(false);
//   };

//   return (
//     <header className="bg-white text-black font-inika tracking-widest font-bold p-4 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/">
//           <Image src="/logo.png" alt="Logo" width={95} height={95} priority />
//         </Link>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden p-2"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle Menu"
//         >
//           {isOpen ? <X size={30} /> : <Menu size={30} />}
//         </button>

//         {/* Navigation */}
//         <nav
//           className={`fixed top-0 left-0 h-full w-3/4 bg-white shadow-lg transform transition-transform duration-200 z-50 md:static md:w-auto md:bg-transparent md:shadow-none md:flex md:items-center md:space-x-6 ${
//             isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
//           }`}
//         >
//           <ul className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
//             {[ 
//               { name: "HOME", path: "/" },
//               { name: "ABOUT US", path: "/about" },
//               { name: "PRODUCT", path: "/product" },
//               { name: "GALLERY", path: "/gallery" },
//               { name: "BLOG", path: "/blog" },
//               { name: "CONTACT US", path: "/contact" },
//             ].map(({ name, path }) => (
//               <li key={name}>
//                 <Link
//                   href={path}
//                   className={`block px-3 py-2 transition-all duration-300 md:inline-block 
//                     ${pathname === path ? "text-gold bg-primary rounded-md" : "hover:text-gold hover:underline"}`}
//                   onClick={handleLinkClick}
//                 >
//                   {name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;


"use client"; // Ensure this component runs on the client side

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white text-black font-inika tracking-wider font-bold py-2 px-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={70} height={70} priority />
            <h1 className="text-xl md:text-2xl font-bold ml-2 hidden sm:block">Corn Rich Silage</h1>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation */}
        <nav
          className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg transform transition-transform duration-200 z-50 lg:static lg:w-auto lg:bg-transparent lg:shadow-none lg:flex lg:items-center ${
            isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
          }`}
        >
          {/* Close button inside mobile menu */}
          <button
            className="lg:hidden absolute top-4 right-4 p-2"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
          
          <ul className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4 p-4 pt-12 lg:p-0">
            {[ 
              { name: "HOME", path: "/" },
              { name: "ABOUT US", path: "/about" },
              { name: "PRODUCT", path: "/product" },
              { name: "GALLERY", path: "/gallery" },
              { name: "BLOG", path: "/blog" },
              { name: "CONTACT US", path: "/contact" },
            ].map(({ name, path }) => (
              <li key={name}>
                <Link
                  href={path}
                  className={`block px-3 py-1 text-sm transition-all duration-300 lg:inline-block 
                    ${pathname === path ? "text-gold bg-primary rounded-md" : "hover:text-gold hover:underline"}`}
                  onClick={handleLinkClick}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;