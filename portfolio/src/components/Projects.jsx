import React from 'react';
import Section from './ui/Section';
import Card from './ui/Card';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Find-Books',
            description: 'PlatformFINDBOOKS lets users register, browse, and buy books, while resellers list and sell them. Payments are handled via Razorpay, emails via Nodemailer, and images via Cloudinary. Admins manage users, books, orders, and deliveries through a central dashboard.',
            technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'CSS'],
            link: 'https://find-books-q05m.onrender.com',
            github: 'https://github.com/Aashish518/Find-Books---Online-Web-Site',
            thumbnail: '/findbook.png'
        },
        {
            title: 'Hostel Management System',
            description: 'A MERN stack Hostel Management System where the admin can manage student applications, admissions, complaints, room availability, and allocations through a secure Admin Panel. It features role-based access, JWT authentication, bcrypt password protection, and file uploads using Multer—all within a responsive interface.',
            technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'CSS'],
            link: 'https://hms-wshy.onrender.com',
            github: 'https://github.com/Aashish518/Medium-HMS',
            thumbnail: '/hms.png'
        },
        {
            title: 'Map-Integration',
            description: 'A full-stack property listing platform where the Admin Dashboard allows admins to add properties with location using an interactive map, perform full CRUD operations, and manage listings. Users can view all properties on the map, click on a location marker, and instantly see property details in a popup.',
            technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'CSS'],
            link: 'https://map-integration-1.onrender.com',
            github: 'https://github.com/Aashish518/Map-integration',
            thumbnail: '/map.png'
        }
    ];

    return (
        <Section id="projects" className="bg-slate-50">

            <div className="text-center mb-16 space-y-4">
                <h2 className="font-bold text-slate-900 text-2xl sm:text-3xl md:text-4xl">
                    Featured Projects
                </h2>
                <div className="w-20 h-1 bg-slate-900 mx-auto"></div>
                <p className="text-slate-600 text-sm sm:text-base md:text-lg">
                    Showcase of my latest work
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        className="flex flex-col h-full group overflow-hidden border border-slate-200 bg-white hover:border-slate-400 transition-all duration-300"
                    >

                        {/* Project Thumbnail */}
                        <div className="h-48 overflow-hidden border-b border-slate-100">
                            <img
                                src={project.thumbnail}
                                alt={project.title}
                                className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        <div className="flex-1 flex flex-col px-2">

                            <h3 className="font-bold text-slate-900 mb-3 group-hover:underline decoration-slate-400 underline-offset-4 transition-all text-base sm:text-lg md:text-xl">
                                {project.title}
                            </h3>

                            <p className="text-slate-600 mb-6 flex-1 leading-relaxed text-xs sm:text-sm md:text-base">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-2.5 py-1 bg-slate-100 text-slate-700 border border-slate-200 font-medium rounded-md text-xs sm:text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-100">
                                <a
                                    href={project.link}
                                    className="flex items-center gap-2 font-semibold text-slate-600 hover:text-slate-900 transition-colors text-xs sm:text-sm"
                                >
                                    Live Demo <ExternalLink size={16} />
                                </a>
                                <a
                                    href={project.github}
                                    className="flex items-center gap-2 font-semibold text-slate-600 hover:text-slate-900 transition-colors text-xs sm:text-sm"
                                >
                                    Code <Github size={16} />
                                </a>
                            </div>

                        </div>
                    </Card>
                ))}
            </div>

        </Section>
    );
};

export default Projects;
