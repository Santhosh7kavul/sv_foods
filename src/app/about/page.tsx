
// 'use client';
// import Image from "next/image";
// import missionImg from "../../resources/mission.png";
// import visionImg from "../../resources/vision.png";
// import valuesImg from "../../resources/values.png";

// export default function About() {
//   return (
//     <div className="flex flex-col items-center text-center px-4 py-8 space-y-8 bg-gray-100 md:px-8">
//       {/* Title */}
//       <h1 className="text-4xl md:text-5xl font-bold font-inria tracking-widest text-black underline decoration-[#DA9100] mb-4">
//         ABOUT US
//       </h1>

//       {/* Quote Section */}
//       <div className="w-full max-w-4xl text-left text-lg italic text-black space-y-2 px-4 md:px-0">
//         <p>
//           "The greatness of a nation and its moral progress can be judged by the way its animals are treated."
//         </p>
//         <p className="text-[#DA9100] font-semibold text-2xl md:text-2xl text-right">- Mahatma Gandhi</p>
//       </div>

//       {/* Description */}
//       <p className="max-w-3xl text-gray-800 text-lg px-4 md:px-0">
//         Corn Rich Silage specializes in producing high-quality, nutrient-rich fermented feed from carefully selected crops like corn and corn fodder, ensuring optimal livestock health and performance.
//       </p>

//       {/* Mission & Vision Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl px-4 md:px-0">
//         <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
//           <Image src={missionImg} alt="Mission" className="w-20 h-20 mb-4 object-contain" />
//           <h2 className="text-2xl md:text-3xl font-bold text-[#DA9100]">MISSION</h2>
//           <p className="text-black text-sm mt-2 text-center">
//             Our mission is to provide farmers with high-quality, nutritious silage solutions that support the health and productivity of livestock.
//           </p>
//         </div>

//         <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
//           <Image src={visionImg} alt="Vision" className="w-20 h-20 mb-4 object-contain" />
//           <h2 className="text-2xl md:text-3xl font-bold text-[#DA9100]">VISION</h2>
//           <p className="text-black text-sm mt-2 text-center">
//             To be the leading provider of premium silage products, recognized for innovation, sustainability, and excellence in animal nutrition.
//           </p>
//         </div>
//       </div>

//       {/* Values Section */}
//       <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full max-w-5xl px-4 md:px-0">
//         <Image src={valuesImg} alt="Values" className="w-20 h-20 mb-4 object-contain" />
//         <h2 className="text-2xl md:text-3xl font-bold text-[#DA9100]">VALUES</h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-1 gap-4 w-full mt-4 ml-4">
//           <div>
//             <h3 className="text-2xl  text-[#DA9100] text-left">1. Quality:</h3>
//             <p className="text-black text-sm text-left">We are committed to delivering high-quality silage that meets the nutritional needs of livestock.</p>
//           </div>
//           <div>
//             <h3 className="text-2xl text-[#DA9100]  text-left">2. Sustainability:</h3>
//             <p className="text-black text-sm  text-left">We prioritize environmentally friendly practices, ensuring our silage production contributes to sustainability.</p>
//           </div>
//           <div>
//             <h3 className="text-2xl text-[#DA9100]  text-left">3. Innovation:</h3>
//             <p className="text-black text-sm  text-left">We embrace innovation, continuously improving our products to meet the evolving needs of farmers.</p>
//           </div>
//           <div>
//             <h3 className="text-2xl text-[#DA9100]  text-left">4. Customer-Centricity:</h3>
//             <p className="text-black text-sm  text-left">We put our customers at the center, offering personalized solutions to help them succeed.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


'use client';
import Image from "next/image";
import missionImg from "../../resources/mission.png";
import visionImg from "../../resources/vision.png";
import valuesImg from "../../resources/values.png";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center text-center py-16 bg-gradient-to-b from-gray-50 to-gray-200">
      {/* Header Section with parallax-like effect */}
      <div className="w-full max-w-6xl px-4 mb-16">
        <h1 className="text-3xl md:text-5xl font-bold font-inria tracking-widest text-black relative inline-block">
          ABOUT US
          <span className="absolute bottom-0 left-0 w-full h-1 bg-[#DA9100] transform translate-y-2" />
        </h1>
      </div>

      {/* Quote Section with styled blockquote */}
      <div className="w-full max-w-4xl mb-16 px-6">
        <blockquote className="relative p-8 bg-white rounded-lg shadow-lg">
          <span className="absolute top-0 left-0 text-8xl text-[#DA9100] opacity-20">"</span>
          <p className="text-xl md:text-2xl italic text-gray-800 pt-6 px-6">
            The greatness of a nation and its moral progress can be judged by the way its animals are treated.
          </p>
          <footer className="text-right mt-4">
            <cite className="text-[#DA9100] font-semibold text-xl md:text-2xl">- Mahatma Gandhi</cite>
          </footer>
        </blockquote>
      </div>

      {/* Description with subtle animation on scroll */}
      <div className="w-full max-w-3xl mb-16 px-6">
        <p className="text-gray-800 text-xl leading-relaxed bg-white p-6 rounded-lg shadow-md border-l-4 border-[#DA9100]">
          Corn Rich Silage specializes in producing high-quality, nutrient-rich fermented feed from carefully selected crops like corn and corn fodder, ensuring optimal livestock health and performance.
        </p>
      </div>

      {/* Mission & Vision Cards with hover effects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-16 px-6">
        <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
          <div className="bg-[#FFF8E8] p-4 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <Image src={missionImg} alt="Mission" className="w-16 h-16 object-contain" />
          </div>
          <h2 className="text-3xl font-bold text-[#DA9100] mb-4">MISSION</h2>
          <p className="text-gray-700 text-lg">
            Our mission is to provide farmers with high-quality, nutritious silage solutions that support the health and productivity of livestock.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
          <div className="bg-[#FFF8E8] p-4 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <Image src={visionImg} alt="Vision" className="w-16 h-16 object-contain" />
          </div>
          <h2 className="text-3xl font-bold text-[#DA9100] mb-4">VISION</h2>
          <p className="text-gray-700 text-lg">
            To be the leading provider of premium silage products, recognized for innovation, sustainability, and excellence in animal nutrition.
          </p>
        </div>
      </div>

      {/* Values Section with interactive card design */}
      <div className="w-full max-w-5xl px-6 mb-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="bg-[#FFF8E8] p-4 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <Image src={valuesImg} alt="Values" className="w-16 h-16 object-contain" />
          </div>
          <h2 className="text-3xl font-bold text-[#DA9100] mb-8">OUR VALUES</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Quality",
                description: "We are committed to delivering high-quality silage that meets the nutritional needs of livestock."
              },
              {
                title: "Sustainability",
                description: "We prioritize environmentally friendly practices, ensuring our silage production contributes to sustainability."
              },
              {
                title: "Innovation",
                description: "We embrace innovation, continuously improving our products to meet the evolving needs of farmers."
              },
              {
                title: "Customer-Centricity",
                description: "We put our customers at the center, offering personalized solutions to help them succeed."
              }
            ].map((value, index) => (
              <div key={index} className="p-4 border-l-4 border-[#DA9100] bg-gray-50 rounded transition-all duration-300 hover:shadow-md">
                <h3 className="text-xl text-[#DA9100] font-bold mb-2">{index + 1}. {value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}