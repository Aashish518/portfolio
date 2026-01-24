import React from 'react';
import Section from './ui/Section';
import Card from './ui/Card';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: 'MERN Stack Developer',
            company: 'Antinoob Solutions',
            location: 'Ahmedabad - 380054',
            period: 'Oct 2025 – Present',
            responsibilities: [
                'Built full-stack web applications using MongoDB, Express.js, React.js, and Node.js',
                'Designed and developed RESTful APIs',
                'Implemented authentication & authorization (JWT-based)',
                'Worked with MongoDB schemas, aggregation, and optimization',
                'Deployed and tested applications in real-world environments'
            ]
        },
        {
            title: 'React.js Intern - ( 3 Month )',
            company: 'Antinoob Solutions',
            location: 'Ahmedabad - 380054',
            period: 'Jul 2025 – Sep 2025',
            responsibilities: [
                'Developed responsive UI components using React.js, JavaScript and Tailwind CSS',
                'Integrated REST APIs and handled dynamic data rendering',
                'Implemented reusable components and followed clean folder structure',
                'Improved application performance and fixed UI/logic bugs',
                'Collaborated with backend developers and designers'
            ]
        }
    ];

    return (
        <Section id="experience" className="bg-white">
            <div className="max-w-4xl mx-auto">

                <div className="text-center mb-16 space-y-4">
                    <h2 className="font-bold text-slate-900 text-2xl sm:text-3xl md:text-4xl">
                        Experience
                    </h2>
                    <div className="w-20 h-1 bg-slate-900 mx-auto"></div>
                    <p className="text-slate-600 text-sm sm:text-base md:text-lg">
                        My professional track record
                    </p>
                </div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <Card
                            key={index}
                            className="group relative overflow-hidden border-l-4 border-l-slate-800"
                        >

                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                                <div>
                                    <h3 className="font-bold text-slate-900 group-hover:underline transition-colors
                                                   decoration-slate-400 underline-offset-4
                                                   text-base sm:text-lg md:text-xl">
                                        {exp.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-slate-600 font-medium mt-1
                                                    text-sm sm:text-base">
                                        <Briefcase size={16} />
                                        <span>{exp.company}</span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 text-slate-500 md:text-right
                                                text-xs sm:text-sm">
                                    <div className="flex items-center md:justify-end gap-2">
                                        <Calendar size={14} />
                                        <span>{exp.period}</span>
                                    </div>
                                    <div className="flex items-center md:justify-end gap-2">
                                        <MapPin size={14} />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>
                            </div>

                            <h4 className="font-semibold text-slate-800 uppercase tracking-wide mb-3
                                           text-xs sm:text-sm">
                                Key Responsibilities:
                            </h4>

                            <ul className="grid gap-2">
                                {exp.responsibilities.map((resp, rIdx) => (
                                    <li
                                        key={rIdx}
                                        className="flex items-start gap-3 text-slate-600
                                                   text-xs sm:text-sm"
                                    >
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                                        <span className="leading-relaxed">
                                            {resp}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                        </Card>
                    ))}
                </div>

            </div>
        </Section>
    );
};

export default Experience;
