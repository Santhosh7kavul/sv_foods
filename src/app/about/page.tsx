// import Image from "next/image";
// // import img1 from "../../resources/aboutImg.png";
// import missionImg from "../../resources/mission.png";
// import visionImg from "../../resources/vision.png";
// import valuesImg from "../../resources/values.png";

// export default function About() {
//   return (
//     <div className="flex flex-col items-center text-center p-8 space-y-8 bg-gray-100">
//       {/* Title */}
//       <h1 className="text-5xl font-bold text-gray-900 underline decoration-[#DA9100] mb-4">
//         ABOUT US
//       </h1>

//       {/* Quote Section */}
//       <div className="w-full max-w-4xl text-left text-lg italic text-black space-y-2">
//         <p>
//           "The greatness of a nation and its moral progress can be judged by the way its animals are treated."
//         </p>
//         <p className="text-[#DA9100] font-semibold text-2xl text-right">- Mahatma Gandhi</p>
//       </div>

//       {/* Image Section */}
//       {/* <div className="w-full flex justify-center">
//         <Image src={img1} alt="Background Image" className="rounded-lg shadow-lg" width={944} height={679} />
//       </div> */}

//       {/* Description */}
//       <p className="max-w-3xl text-gray-800 text-lg">
//         Corn Rich Silage specializes in producing high-quality, nutrient-rich fermented feed from carefully selected crops like corn and corn fodder, ensuring optimal livestock health and performance. We are dedicated to providing reliable, year-round feed solutions that help farmers maximize productivity and efficiency.
//       </p>

//       {/* Mission, Vision */}
//       {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"> */}
//       <div className="flex gap-6 w-full max-w-5xl">
//         <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
//           <Image src={missionImg} alt="Mission Image" className="w-20 h-20 mb-4" />
//           <h2 className="text-3xl font-bold text-gold">MISSION</h2>
//           <p className="text-black text-sm mt-2">
//             Our mission is to provide farmers with high-quality, nutritious silage solutions that support the health and productivity of livestock, promoting sustainable farming practices and enhancing the efficiency of agricultural operations.
//           </p>
//         </div>

//         <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
//           <Image src={visionImg} alt="Vision Image" className="w-20 h-20 mb-4" />
//           <h2 className="text-3xl font-bold text-gold">VISION</h2>
//           <p className="text-black text-sm mt-2">
//             To be the leading provider of premium silage products, recognized for innovation, sustainability, and excellence in animal nutrition, contributing to the growth of a prosperous and responsible agricultural community.
//           </p>
//         </div>
//       </div>

//       <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full max-w-5xl">
//         <Image src={valuesImg} alt="Values Image" className="w-20 h-20 mb-4" />
//         <h2 className="text-3xl font-bold text-gold">VALUES</h2>

//        <div className="flex flex-col items-start bg-white p-6 rounded-lg shadow-md w-full max-w-5xl gap-2">
//        <div className="text-3xl text-gold">1. Quality:</div>
//         <div className="text-left">We are committed to delivering high-quality silage that meets the nutritional needs of livestock and supports farm productivity.</div>

//         <div className="text-3xl text-gold">2. Sustainability:</div>
//         <div className="text-left">
//           We prioritize environmentally friendly practices, ensuring our silage production contributes to long-term agricultural sustainability.
//         </div>

//         <div className="text-3xl text-gold">3. Innovation:</div>
//         <div className="text-left">
//           We embrace innovation, continuously improving our products and processes to meet the evolving needs of the farming community in an organic way.
//         </div>

//         <div className="text-3xl text-gold">4. Customer-Centricity:</div>
//         <div className="text-left">
//           We put our customers at the center of everything we do, offering personalized solutions that help them achieve success.
//         </div>
//        </div>
//       </div>




//     </div>
//   );
// }

import Image from "next/image";
import missionImg from "../../resources/mission.png";
import visionImg from "../../resources/vision.png";
import valuesImg from "../../resources/values.png";

export default function About() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-8 space-y-8 bg-gray-100 md:px-8">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold font-inria tracking-widest text-black underline decoration-[#DA9100] mb-4">
        About Us
      </h1>

      {/* Quote Section */}
      <div className="w-full max-w-4xl text-left text-lg italic text-black space-y-2 px-4 md:px-0">
        <p>
          "The greatness of a nation and its moral progress can be judged by the way its animals are treated."
        </p>
        <p className="text-[#DA9100] font-semibold text-2xl md:text-2xl text-right">- Mahatma Gandhi</p>
      </div>

      {/* Description */}
      <p className="max-w-3xl text-gray-800 text-lg px-4 md:px-0">
        Corn Rich Silage specializes in producing high-quality, nutrient-rich fermented feed from carefully selected crops like corn and corn fodder, ensuring optimal livestock health and performance.
      </p>

      {/* Mission & Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl px-4 md:px-0">
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
          <Image src={missionImg} alt="Mission" className="w-20 h-20 mb-4 object-contain" />
          <h2 className="text-2xl md:text-3xl font-bold text-[#DA9100]">MISSION</h2>
          <p className="text-black text-sm mt-2 text-center">
            Our mission is to provide farmers with high-quality, nutritious silage solutions that support the health and productivity of livestock.
          </p>
        </div>

        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
          <Image src={visionImg} alt="Vision" className="w-20 h-20 mb-4 object-contain" />
          <h2 className="text-2xl md:text-3xl font-bold text-[#DA9100]">VISION</h2>
          <p className="text-black text-sm mt-2 text-center">
            To be the leading provider of premium silage products, recognized for innovation, sustainability, and excellence in animal nutrition.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full max-w-5xl px-4 md:px-0">
        <Image src={valuesImg} alt="Values" className="w-20 h-20 mb-4 object-contain" />
        <h2 className="text-2xl md:text-3xl font-bold text-[#DA9100]">VALUES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4 ml-4">
          <div>
            <h3 className="text-2xl  text-[#DA9100] text-left">1. Quality:</h3>
            <p className="text-black text-sm text-left">We are committed to delivering high-quality silage that meets the nutritional needs of livestock.</p>
          </div>
          <div>
            <h3 className="text-2xl text-[#DA9100]  text-left">2. Sustainability:</h3>
            <p className="text-black text-sm  text-left">We prioritize environmentally friendly practices, ensuring our silage production contributes to sustainability.</p>
          </div>
          <div>
            <h3 className="text-2xl text-[#DA9100]  text-left">3. Innovation:</h3>
            <p className="text-black text-sm  text-left">We embrace innovation, continuously improving our products to meet the evolving needs of farmers.</p>
          </div>
          <div>
            <h3 className="text-2xl text-[#DA9100]  text-left">4. Customer-Centricity:</h3>
            <p className="text-black text-sm  text-left">We put our customers at the center, offering personalized solutions to help them succeed.</p>
          </div>
        </div>
      </div>
    </div>
  );
}