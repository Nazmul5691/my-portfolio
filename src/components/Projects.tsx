// import { Github, PlayCircle } from 'lucide-react';

// const Projects = () => {
//   const projectData = [
//     {
//       id: 1,
//       name: "E-Commerce Dashboard",
//       image: "https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=2070&auto=format&fit=crop", // Replace with your project image
//       description: "A full-stack administrative dashboard to manage products, orders, and customer analytics with real-time updates.",
//       languages: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"],
//       github: "https://github.com",
//       demo: "https://demo.com"
//     },
//     {
//       id: 2,
//       name: "Real-time Chat App",
//       image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=2070&auto=format&fit=crop",
//       description: "Secure messaging application featuring instant delivery, media sharing, and group chat capabilities using WebSockets.",
//       languages: ["React", "Node.js", "Express", "Socket.io", "MongoDB"],
//       github: "https://github.com",
//       demo: "https://demo.com"
//     },
//     {
//       id: 3,
//       name: "Portfolio Website",
//       image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop",
//       description: "A modern, high-performance portfolio featuring smooth animations, glass-morphism, and fully responsive design.",
//       languages: ["React", "Tailwind v4", "Lucide Icons", "Framer Motion"],
//       github: "https://github.com",
//       demo: "https://demo.com"
//     }
//   ];

//   return (
//     <section id="projects" className="py-20 bg-slate-950 text-white relative overflow-hidden">
//       {/* Background Decorative Grid - Same as About/Skills */}
//       <div className="absolute inset-0 opacity-10 pointer-events-none"
//         style={{
//           backgroundImage: `linear-gradient(to right, #ffffff0a 1px, transparent 1px), 
//                             linear-gradient(to bottom, #ffffff0a 1px, transparent 1px)`,
//           backgroundSize: '40px 40px',
//         }}>
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
//           <p className="text-gray-400">Most Recent Work</p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projectData.map((project) => (

//             <div
//               key={project.id}
//               className="group relative bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-3xl overflow-hidden hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-2"
//             >
//               <div className='p-4'>
//                 {/* Project Image */}
//                 <div className="h-52 w-full overflow-hidden relative">
//                   <img
//                     src={project.image}
//                     alt={project.name}
//                     className="w-full h-full rounded-3xl object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors duration-500"></div>
//                 </div>

//                 {/* Project Content */}
//                 <div className=" pt-4 space-y-4">
//                   <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
//                     {project.name}
//                   </h3>

//                   <p className="text-gray-400 text-sm leading-relaxed">
//                     {project.description}
//                   </p>

//                   {/* Tech Stack/Languages */}
//                   <div className="flex flex-wrap gap-2 pt-2">
//                     {project.languages.map((lang, index) => (
//                       <span
//                         key={index}
//                         className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400"
//                       >
//                         {lang}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Links */}
//                   {/* Action Buttons (Exact style from your close-up image) */}
//                   <div className="flex items-center justify-between gap-3 mt-auto">
//                     {/* Repository Button (Outline) */}
//                     <a
//                       href={project.github}
//                       className="flex-1 border border-purple-500/40 rounded-full py-2.5 flex items-center justify-center gap-2 text-sm text-purple-300 hover:bg-purple-500/10 transition-all"
//                     >
//                       Repository <Github size={16} />
//                     </a>

//                     {/* Demo Button (Gradient) */}
//                     <a
//                       href={project.demo}
//                       className="flex-1 bg-linear-to-r from-purple-500 to-pink-500 rounded-full py-2.5 flex items-center justify-center gap-2 text-sm font-semibold shadow-md shadow-purple-500/20 hover:brightness-110 transition-all"
//                     >
//                       Demo <PlayCircle size={18} />
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               {/* Corner White Glow Effect (Subtle) */}
//               <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/30 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
//             </div>

//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;





import { Github, PlayCircle } from 'lucide-react';

const Projects = () => {
  const projectData = [
    {
      id: 1,
      name: "E-Commerce Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=2070&auto=format&fit=crop",
      description: "A full-stack administrative dashboard to manage products, orders, and customer analytics with real-time updates.",
      languages: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 2,
      name: "Real-time Chat App",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=2070&auto=format&fit=crop",
      description: "Secure messaging application featuring instant delivery, media sharing, and group chat capabilities using WebSockets.",
      languages: ["React", "Node.js", "Express", "Socket.io", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 3,
      name: "Portfolio Website",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop",
      description: "A modern, high-performance portfolio featuring smooth animations, glass-morphism, and fully responsive design.",
      languages: ["React", "Tailwind v4", "Lucide Icons", "Framer Motion"],
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      
      {/* --- Bottom Left: Large Grid & Visible White Glow --- */}
      <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none opacity-40">
        {/* বড় এবং স্পষ্ট সাদা গ্লো */}
        <div className="absolute bottom-[-10%] left-[-10%] w-150 h-150 bg-white/15 rounded-full blur-[100px]"></div>
        
        {/* বড় স্কয়ার গ্রিড লাইন (backgroundSize: 60px 60px) */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff15 1px, transparent 1px), 
                              linear-gradient(to bottom, #ffffff15 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(circle at 10% 90%, black, transparent 80%)'
          }}>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 italic">My Projects</h2>
          <p className="text-gray-400">Most Recent Work</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#0f111a]/80 backdrop-blur-md border border-slate-800/60 rounded-[2rem] overflow-hidden hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-2"
            >
              <div className='p-4 flex flex-col h-full'>
                {/* Project Image */}
                <div className="h-52 w-full overflow-hidden relative rounded-2xl border border-slate-800">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

                {/* Project Content */}
                <div className="pt-4 space-y-4 flex flex-col grow">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Languages Chips */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.languages.map((lang, index) => (
                      <span
                        key={index}
                        className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons styled like provided image */}
                  <div className="flex items-center justify-between gap-3 pt-4 mt-auto">
                    {/* Repository Button (Outline style) */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-purple-500/40 rounded-full py-2.5 flex items-center justify-center gap-2 text-sm text-purple-300 hover:bg-purple-500/10 transition-all"
                    >
                      Repository <Github size={16} />
                    </a>

                    {/* Demo Button (Gradient style) */}
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-linear-to-r from-purple-500 to-pink-500 rounded-full py-2.5 flex items-center justify-center gap-2 text-sm font-semibold shadow-md shadow-purple-500/20 hover:brightness-110 transition-all"
                    >
                      Demo <PlayCircle size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Hover effect inside card */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;