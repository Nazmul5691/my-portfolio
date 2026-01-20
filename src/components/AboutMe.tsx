


import { Code, Database, Zap } from 'lucide-react';

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
                src="https://res.cloudinary.com/dh3ej57qw/image/upload/v1768907020/nazmul_4_wxndbe.png"
                alt="Nazmul Islam"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex-1 max-w-2xl space-y-6 text-center lg:text-left">
            <h3 className="text-3xl md:text-4xl font-bold text-purple-400">
              I'm Md Nazmul Islam
            </h3>

            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Computer Science graduate from SMUCT and passionate
                full-stack developer specializing in modern web technologies.
              </p>
              <p>
                I specialize in building responsive web applications using React, Next.js,
                Node.js, and databases like MongoDB and PostgreSQL to deliver tailored solutions.
              </p>
            </div>

            {/* Feature List (Custom Styled Cards) */}
            <div className="grid gap-4 pt-4">
              {[
                { icon: <Code size={22} />, title: "Full-Stack Web Development" },
                { icon: <Database size={22} />, title: "Database Design & Management" },
                { icon: <Zap size={22} />, title: "API Development & Integration" }
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