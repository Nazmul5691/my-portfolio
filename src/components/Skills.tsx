import {
    Github,
    Flame,
    CheckCircle2
} from 'lucide-react';
import { useState } from 'react';


const Skills = () => {

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);


    const techStack = [
        { name: "JavaScript", icon: "JS", color: "text-yellow-400" },
        { name: "TypeScript", icon: "TS", color: "text-blue-400" },
        { name: "React", icon: "RE", color: "text-cyan-400" },
        { name: "Next.js", icon: "NX", color: "text-white" },
        { name: "Node.js", icon: "ND", color: "text-green-400" },
        { name: "Express", icon: "EX", color: "text-gray-400" },
        { name: "MongoDB", icon: "MG", color: "text-green-500" },
        { name: "PostgreSQL", icon: "PG", color: "text-blue-500" },
        { name: "Prisma", icon: "PR", color: "text-white" },
        { name: "Firebase", icon: <Flame size={20} />, color: "text-orange-500" },
        { name: "Redux", icon: "RX", color: "text-purple-500" },
        { name: "Git", icon: <Github size={20} />, color: "text-orange-600" },
    ];

    const skillGroups = [
        {
            title: "Frontend Developer",
            skills: [
                { name: "HTML/CSS", level: "Expert" },
                { name: "JavaScript", level: "Expert" },
                { name: "TypeScript", level: "Expert" },
                { name: "React JS", level: "Expert" },
                { name: "Next JS", level: "Expert" },
                { name: "Tailwind CSS", level: "Expert" },
            ]
        },
        {
            title: "Backend Developer",
            skills: [
                { name: "Node JS", level: "Expert" },
                { name: "Express JS", level: "Expert" },
                { name: "MongoDB", level: "Expert" },
                { name: "PostgreSQL", level: "Intermediate" },
                { name: "Prisma", level: "Intermediate" },
                { name: "Mongoose", level: "Expert" },
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-slate-950 text-white relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, #ffffff0a 1px, transparent 1px), 
                            linear-gradient(to bottom, #ffffff0a 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }}>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
                    <p className="text-gray-400">My Technical Level</p>
                </div>

                {/* Tech Stack Icons */}
                <div className="flex flex-wrap justify-center gap-6 mb-20">
                    {techStack.map((tech, index) => (
                        <div key={index} className="flex flex-col items-center group">
                            <div className={`w-14 h-14 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-lg font-bold shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:border-purple-500/50 ${tech.color}`}>
                                {tech.icon}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Skill Cards Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {skillGroups.map((group, idx) => (
                        <div
                            key={idx}
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(0)} // মাউস সরিয়ে নিলে ১ম কার্ডে ফিরে যাবে
                            className="relative bg-slate-900/40 backdrop-blur-md border border-slate-800 p-8 rounded-3xl transition-all duration-500 group overflow-hidden hover:border-purple-500/30"
                        >
                            {/* White Glow Effect - উজ্জ্বলতা আরও বাড়ানো হয়েছে (bg-white/40) */}
                            <div className={`absolute -bottom-10 -left-10 w-48 h-48 bg-white/40 rounded-full blur-[70px] transition-opacity duration-500 pointer-events-none
                ${hoveredIndex === idx ? 'opacity-100' : 'opacity-0'}`}>
                            </div>

                            <h3 className="text-2xl font-semibold text-center mb-8 relative z-10 transition-colors group-hover:text-purple-400">
                                {group.title}
                            </h3>

                            <div className="grid grid-cols-2 gap-y-6 relative z-10">
                                {group.skills.map((skill, sIdx) => (
                                    <div key={sIdx} className="flex items-start gap-3">
                                        <CheckCircle2 className="text-purple-500 mt-1 shrink-0" size={18} />
                                        <div>
                                            <h4 className="font-medium text-gray-200">{skill.name}</h4>
                                            <p className="text-xs text-gray-400">{skill.level}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;