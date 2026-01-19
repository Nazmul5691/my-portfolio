
// import { Code2, Smartphone, Lightbulb } from 'lucide-react';

// const About = () => {
//   return (
//     <section id="about" className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 relative overflow-hidden py-20">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-40 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-40 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        
//         {/* Background Grid Lines */}
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `
//               linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px),
//               linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px)
//             `,
//             backgroundSize: '80px 80px'
//           }}></div>
//         </div>
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         {/* Section Title */}
//         <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
//           About Me
//         </h2>

//         <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 max-w-6xl mx-auto">
//           {/* Left Side - Profile Image */}
//           <div className="flex-shrink-0">
//             <div className="relative w-72 h-72 md:w-80 md:h-80">
//               {/* Glow effect */}
//               <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-2xl"></div>
              
//               {/* Image container */}
//               <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
//                 <img 
//                   src="/api/placeholder/400/400" 
//                   alt="Meriem Benfekhadou"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Content */}
//           <div className="flex-1 max-w-2xl">
//             <h3 className="text-3xl md:text-4xl font-bold text-purple-400 mb-6">
//               I'm Meriem Benfekhadou
//             </h3>
            
//             <p className="text-gray-300 text-lg mb-4">
//               Software Engineering Master's student at USTHB and freelance web/mobile developer in Algiers.
//             </p>
            
//             <p className="text-gray-300 text-lg mb-8">
//               I create tailored solutions using Laravel, React, Flutter, and more for startups and businesses.
//             </p>

//             {/* Feature Cards */}
//             <div className="space-y-4">
//               <div className="flex items-center gap-4 p-4 rounded-xl border-2 border-purple-500/30 bg-purple-950/20 backdrop-blur-sm hover:border-purple-500/50 transition-all">
//                 <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
//                   <Code2 size={24} className="text-purple-400" />
//                 </div>
//                 <span className="text-purple-300 text-lg font-medium">Web Application Development</span>
//               </div>

//               <div className="flex items-center gap-4 p-4 rounded-xl border-2 border-purple-500/30 bg-purple-950/20 backdrop-blur-sm hover:border-purple-500/50 transition-all">
//                 <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
//                   <Smartphone size={24} className="text-purple-400" />
//                 </div>
//                 <span className="text-purple-300 text-lg font-medium">Mobile Application Development</span>
//               </div>

//               <div className="flex items-center gap-4 p-4 rounded-xl border-2 border-purple-500/30 bg-purple-950/20 backdrop-blur-sm hover:border-purple-500/50 transition-all">
//                 <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
//                   <Lightbulb size={24} className="text-purple-400" />
//                 </div>
//                 <span className="text-purple-300 text-lg font-medium">Problem Solving</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;








// import { Monitor, Smartphone, BrainCircuit } from 'lucide-react';

// const About = () => {
//   return (
//     <section id="about" className="py-20 bg-slate-950 text-white overflow-hidden">
//       <div className="container mx-auto px-6">
//         {/* Section Heading */}
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
//           About Me
//         </h2>

//         <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
          
//           {/* Left Side: Circular Image with Glow */}
//           <div className="relative group">
//             {/* The Glow Effect */}
//             <div className="absolute inset-0 rounded-full bg-purple-500/50 blur-3xl group-hover:bg-purple-500/70 transition-all duration-500"></div>
            
//             <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-purple-500/30 ring-8 ring-purple-500/10">
//               <img 
//                 src="/your-photo.jpg" // Replace with your actual image path
//                 alt="Meriem Benfekhadou" 
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>

//           {/* Right Side: Content */}
//           <div className="flex-1 max-w-2xl space-y-6 text-center lg:text-left">
//             <h3 className="text-3xl md:text-4xl font-bold text-purple-400">
//               I'm Meriem Benfekhadou
//             </h3>
            
//             <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
//               <p>
//                 Software Engineering Master's student at USTHB and 
//                 freelance web/mobile developer in Algiers.
//               </p>
//               <p>
//                 I create tailored solutions using Laravel, React, Flutter, 
//                 and more for startups and businesses.
//               </p>
//             </div>

//             {/* Feature List (Custom Styled Buttons) */}
//             <div className="space-y-4 pt-4">
//               <div className="flex items-center gap-4 p-4 rounded-xl border border-purple-500/20 bg-purple-950/20 hover:bg-purple-900/30 transition-colors">
//                 <Monitor className="text-purple-400" size={24} />
//                 <span className="text-lg font-medium">Web Application Development</span>
//               </div>

//               <div className="flex items-center gap-4 p-4 rounded-xl border border-purple-500/20 bg-purple-950/20 hover:bg-purple-900/30 transition-colors">
//                 <Smartphone className="text-purple-400" size={24} />
//                 <span className="text-lg font-medium">Mobile Application Development</span>
//               </div>

//               <div className="flex items-center gap-4 p-4 rounded-xl border border-purple-500/20 bg-purple-950/20 hover:bg-purple-900/30 transition-colors">
//                 <BrainCircuit className="text-purple-400" size={24} />
//                 <span className="text-lg font-medium">Problem Solving</span>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;





import { Monitor, Smartphone, BrainCircuit } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      
      {/* 1. ডান কোণার গ্রিড লাইন এবং হোয়াইট গ্লো ইফেক্ট */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-30">
        {/* হালকা সাদা গ্লো (Spotlight) */}
        <div className="absolute top-[-10%] right-[-10%] w-125 h-125 bg-white/5 rounded-full blur-[120px]"></div>
        
        {/* গ্রিড লাইনস (Grid Lines) */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff0a 1px, transparent 1px), 
                              linear-gradient(to bottom, #ffffff0a 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(circle at 90% 10%, black, transparent 70%)'
          }}>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About Me
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
          
          {/* Left Side: Circular Image with Glow */}
          <div className="relative group">
            {/* Image Glow */}
            <div className="absolute inset-0 rounded-full bg-purple-500/40 blur-3xl group-hover:bg-purple-500/60 transition-all duration-500"></div>
            
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-purple-500/30 ring-8 ring-purple-500/10">
              <img 
                src="/your-photo.jpg" 
                alt="Meriem Benfekhadou" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex-1 max-w-2xl space-y-6 text-center lg:text-left">
            <h3 className="text-3xl md:text-4xl font-bold text-purple-400">
              I'm Meriem Benfekhadou
            </h3>
            
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Software Engineering Master's student at USTHB and 
                freelance web/mobile developer in Algiers.
              </p>
              <p>
                I create tailored solutions using Laravel, React, Flutter, 
                and more for startups and businesses.
              </p>
            </div>

            {/* Feature List (Custom Styled Cards) */}
            <div className="grid gap-4 pt-4">
              {[
                { icon: <Monitor size={22} />, title: "Web Application Development" },
                { icon: <Smartphone size={22} />, title: "Mobile Application Development" },
                { icon: <BrainCircuit size={22} />, title: "Problem Solving" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl border border-purple-500/20 bg-purple-950/20 hover:bg-purple-900/30 transition-all cursor-default">
                  <span className="text-purple-400">{item.icon}</span>
                  <span className="text-lg font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;