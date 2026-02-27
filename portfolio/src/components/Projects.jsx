import React from 'react';
import Section from './ui/Section';
import Card from './ui/Card';
import { ExternalLink, Github } from 'lucide-react';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Projects = () => {
    const projects = [
        {
            title: 'Find-Books',
            description: 'PlatformFINDBOOKS lets users register, browse, and buy books, while resellers list and sell them. Payments are handled via Razorpay, emails via Nodemailer, and images via Cloudinary. Admins manage users, books, orders, and deliveries through a central dashboard.',
            technologies: ['React.js', 'CSS'],
            link: 'https://online-book-store-eosin-eta.vercel.app',
            thumbnail: '/bookstore.png'
        },
        {
            title: 'Bloomland',
            description: 'Event Management System: Developed a platform for managing both public and private events, where users can purchase tickets for public events directly and send requests for private events that require admin approval. Implemented admin controls to manage events and user requests, ensuring a smooth ticket booking process and a user-friendly experience.',
            technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'CSS', 'Redux'],
            link: 'https://bloomland.in',
            thumbnail: '/bloomland.png'
        },
        {
            title: 'Ea Labs',
            description: 'Developed a web application where users can view lab information and test details, and contact labs directly for inquiries. Implemented an admin panel to manage lab data, test details, and user interactions, ensuring efficient administration and a smooth user experience.',
            technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'CSS', 'Tanstack Query'],
            link: 'https://ealabs.co.in',
            thumbnail: '/labs.png'
        },
        {
            title: 'Chat App',
            description: 'A full-stack real-time chat application built using the MERN stack. Styled with Tailwind CSS to deliver a modern and responsive user interface. Socket.io enables instant, bi-directional messaging between users. Designed for smooth, fast, and scalable real-time communication.',
            technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'CSS', 'Socket.io'],
            link: 'https://socketchatapp-85zq.onrender.com',
            thumbnail: '/chatapp.png'
        }
    ];

    return (
        <Section id="projects" className="bg-slate-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-16 space-y-4">
                <h2 className="font-bold text-slate-900 text-2xl sm:text-3xl md:text-4xl">
                    Featured Projects
                </h2>
                <div className="w-20 h-1 bg-slate-900 mx-auto"></div>
                <p className="text-slate-600 text-sm sm:text-base md:text-lg">
                    Showcase of my latest work
                </p>
            </div>

            {/* Swiper Slider Added */}
            <Swiper
                navigation={true}
                modules={[Navigation]}
                spaceBetween={30}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="mySwiper"
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <Card
                            className="flex flex-col h-full group overflow-hidden border border-slate-200 bg-white hover:border-slate-400 transition-all duration-300"
                        >
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
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 font-semibold text-slate-600 hover:text-slate-900 transition-colors text-xs sm:text-sm"
                                    >
                                        Live Demo <ExternalLink size={16} />
                                    </a>
                                </div>

                            </div>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>

        </Section>
    );
};

export default Projects;