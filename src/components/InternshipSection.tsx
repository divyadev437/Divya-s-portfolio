'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';

export default function InternshipSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const internships = [
    {
      title: 'Virtual Intern – AWS Data Engineer',
      company: 'Amazon Web Services',
      location: 'Virtual',
      period: 'Jan 2024 – Mar 2024',
      description: 'Automated data pipelines using AWS Glue, Lambda, Redshift, and S3.',
      achievements: [
        'Designed and automated ETL pipelines with AWS Glue',
        'Integrated Lambda functions for data transformation',
        'Managed data storage and analytics in Redshift and S3'
      ]
    },
    {
      title: 'Virtual Intern – Process Mining Analyst',
      company: 'Celonis',
      location: 'Virtual',
      period: 'Apr 2024 – Jun 2024',
      description: 'Built dashboards and analyzed processes using Celonis EMS.',
      achievements: [
        'Created process mining dashboards in Celonis EMS',
        'Analyzed business processes for optimization',
        'Presented findings to stakeholders'
      ]
    },
    {
      title: 'Virtual Intern – Data Analytics and Automation',
      company: 'Alteryx',
      location: 'Virtual',
      period: 'Jul 2024 – Sep 2024',
      description: 'Automated data workflows with Alteryx Designer.',
      achievements: [
        'Developed automated workflows in Alteryx Designer',
        'Improved data processing efficiency',
        'Documented automation solutions'
      ]
    },
    {
      title: 'Virtual Intern – Java Full Stack Developer',
      company: 'EduSkills Academy',
      location: 'Virtual',
      period: 'Jan 2025 – Mar 2025',
      description: 'Implemented RESTful services and frontend features using Spring Boot and web technologies.',
      achievements: [
        'Built RESTful APIs with Spring Boot',
        'Developed frontend features with HTML, CSS, and JavaScript',
        'Collaborated on full stack development projects'
      ]
    },
    {
      title: 'Virtual Intern – AI ML',
      company: 'AICTE | EduSkills',
      location: 'Virtual',
      period: 'Apr 2025 – Jun 2025',
      description: 'Conducted experiments with ML models using Python and classification algorithms.',
      achievements: [
        'Implemented ML models for classification tasks',
        'Analyzed results and improved model accuracy',
        'Documented experiment findings'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="internships" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Internships
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              My internship journey and learning highlights
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

            <div className="space-y-12">
              {internships.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-20"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-950"></div>

                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-lg text-blue-400 font-semibold">{exp.company}</p>
                      </div>
                      <div className="text-sm text-gray-400 mt-2 md:mt-0">
                        <div className="flex items-center mb-1">
                          <Calendar size={14} className="mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                        Key Learnings
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-300 flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}