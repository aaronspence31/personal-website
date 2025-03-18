import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const ResumePage = () => {
  const workExperience = [
    {
      id: '1',
      title: 'Software Developer',
      company: 'Technology Company',
      location: 'Remote',
      period: 'Recent - Present',
      responsibilities: [
        'Develop and maintain web applications using modern JavaScript frameworks',
        'Collaborate with cross-functional teams to implement new features',
        'Write clean, efficient, and maintainable code',
        'Participate in code reviews and implement feedback',
        'Stay current with emerging technologies and trends',
      ],
    },
    {
      id: '2',
      title: 'Web Developer',
      company: 'Digital Agency',
      location: 'United States',
      period: 'Previous Position',
      responsibilities: [
        'Created responsive websites for various clients',
        'Implemented front-end designs using HTML, CSS, and JavaScript',
        'Worked with CMS platforms to develop content-managed websites',
        'Collaborated with designers to ensure proper implementation',
        'Optimized websites for performance and SEO',
      ],
    },
  ];

  const education = [
    {
      id: '1',
      degree: 'Computer Science',
      institution: 'University',
      location: 'United States',
      period: 'Graduation Year',
      highlights: [
        'Focused on software development and programming principles',
        'Completed coursework in web development, algorithms, and data structures',
        'Participated in coding competitions and hackathons',
        'Developed strong problem-solving and analytical skills',
      ],
    },
  ];

  const skills = {
    technical: [
      'JavaScript/TypeScript', 'React', 'Node.js', 'Next.js', 'HTML/CSS',
      'Git', 'REST APIs', 'Python', 'C#', '.NET',
      'Responsive Design', 'SQL/NoSQL', 'Docker',
    ],
    soft: [
      'Problem-Solving', 'Communication', 'Teamwork',
      'Time Management', 'Attention to Detail', 'Adaptability',
    ],
  };

  return (
    <Layout>
      <div className="py-12">
        <div className="flex justify-between items-start mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Resume</h1>
          <Link 
            href="/resume.pdf" 
            target="_blank"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors flex items-center"
            download="Aaron_Spence_Resume.pdf"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
              />
            </svg>
            Download PDF
          </Link>
        </div>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Work Experience</h2>
          <div className="space-y-8">
            {workExperience.map((job) => (
              <div key={job.id}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-medium">{job.title}</h3>
                  <span className="text-gray-600">{job.period}</span>
                </div>
                <p className="text-gray-800 mb-2">
                  {job.company} | {job.location}
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Education</h2>
          <div className="space-y-8">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-medium">{edu.degree}</h3>
                  <span className="text-gray-600">{edu.period}</span>
                </div>
                <p className="text-gray-800 mb-2">
                  {edu.institution} | {edu.location}
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {edu.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-3">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-gray-100 rounded-full text-gray-800 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-gray-100 rounded-full text-gray-800 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ResumePage; 