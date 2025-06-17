import React from 'react';
import RegisterButton from './RegisterButton';
import AboutStatistics from '../assets/About.svg';

const AboutSection: React.FC = () => {
    return (
        <section className="text-white py-16 px-4 text-center">
            <h1 className="text-3xl font-bold mb-6">What is Ignition Hacks?</h1>
            <p className="max-w-2xl mx-auto text-lg leading-relaxed mb-6">
                Ignition Hacks is a student-led hackathon built to empower the next generation of innovative minds.</p>
            <p className="max-w-2xl mx-auto text-lg leading-relaxed mb-6">   This year, we are creating more than just a hackathon, we want to use our platform to build an organization supporting education and opportunities for students to help. </p>
            <p className="max-w-2xl mx-auto text-lg leading-relaxed">   Last year, we supported 600+ participants internationally offering 15+ workshops, 1-on-1 mentorship opportunities, and co-op fairs all while fostering a career-forward environment.</p>
            <div className="mt-8">
                <RegisterButton href="https://docs.google.com/forms/d/e/1FAIpQLSf3kNu2WlKENNfGuWwK9oLLSzKz31RFqZ-Qv_JbxU_unmjCPg/viewform" />
            </div>
            <img src="/About.svg" alt="About Statistics" className="w-full h-auto mt-8" />
        </section>
    );
};

export default AboutSection; 