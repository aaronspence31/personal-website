import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

const AboutPage = () => {
  const skills = [
    { category: 'Programming', items: ['JavaScript', 'TypeScript', 'Python', 'C#', 'HTML/CSS'] },
    { category: 'Frameworks', items: ['React', 'Next.js', 'Node.js', 'Express', '.NET'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'VS Code', 'GitHub'] },
  ];

  return (
    <Layout>
      <div className="py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">About Me</h1>
        
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/3">
            <div className="relative w-full h-80 rounded-lg overflow-hidden" style={{ position: 'relative' }}>
              <Image
                src="/images/about.jpg"
                alt="Aaron Spence"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold mb-4">My Story</h2>
            <p className="text-gray-700 mb-4">
              Hello! I&apos;m Aaron Spence, a passionate software developer with a strong focus on creating 
              clean, efficient, and maintainable code. I enjoy tackling complex problems and turning them 
              into simple, elegant solutions.
            </p>
            <p className="text-gray-700 mb-4">
              My journey in tech began during my studies, where I developed a deep interest in 
              software development. Since then, I&apos;ve worked on various projects that have helped me 
              grow both technically and professionally.
            </p>
            <p className="text-gray-700">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or expanding my knowledge through continuous learning. I believe 
              in writing code that is not only functional but also readable and scalable.
            </p>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-6">Education & Experience</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-2">Software Developer</h3>
              <p className="text-gray-600 mb-2">Technology Company • Recent - Present</p>
              <p className="text-gray-700">
                Developing and maintaining web applications using modern JavaScript frameworks.
                Collaborating with cross-functional teams to deliver high-quality software solutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-2">Computer Science Graduate</h3>
              <p className="text-gray-600 mb-2">University • Previous Years</p>
              <p className="text-gray-700">
                Graduated with a focus on software development and computer science principles.
                Participated in numerous projects and gained a strong foundation in programming concepts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage; 