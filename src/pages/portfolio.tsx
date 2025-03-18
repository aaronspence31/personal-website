import React from 'react';
import Layout from '../components/Layout';
import ProjectCard, { ProjectType } from '../components/ProjectCard';

const PortfolioPage = () => {
  const projects: ProjectType[] = [
    {
      id: '1',
      title: 'Personal Website',
      description: 'My personal portfolio website built with Next.js and Tailwind CSS, showcasing my projects and skills.',
      imageSrc: '/images/project1.jpg',
      tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      liveUrl: 'https://aaronspence.dev',
      repoUrl: 'https://github.com/aaronspence31/personal-website',
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'A productivity application that helps users organize and track their daily tasks and projects.',
      imageSrc: '/images/project2.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: 'https://task-app.example.com',
      repoUrl: 'https://github.com/aaronspence31/task-manager',
    },
    {
      id: '3',
      title: 'Weather Dashboard',
      description: 'A weather application that shows current and forecasted weather conditions for any location.',
      imageSrc: '/images/project3.jpg',
      tags: ['JavaScript', 'API Integration', 'CSS'],
      liveUrl: 'https://weather.example.com',
      repoUrl: 'https://github.com/aaronspence31/weather-app',
    },
    {
      id: '4',
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with product listings, shopping cart, and checkout functionality.',
      imageSrc: '/images/project4.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://shop.example.com',
      repoUrl: 'https://github.com/aaronspence31/ecommerce',
    },
    {
      id: '5',
      title: 'Developer Blog',
      description: 'A blog platform where I share technical articles, tutorials and insights about software development.',
      imageSrc: '/images/project5.jpg',
      tags: ['Next.js', 'Markdown', 'Vercel'],
      liveUrl: 'https://blog.example.com',
      repoUrl: 'https://github.com/aaronspence31/dev-blog',
    },
    {
      id: '6',
      title: 'Social Media Dashboard',
      description: 'A dashboard application that aggregates and displays social media analytics from multiple platforms.',
      imageSrc: '/images/project6.jpg',
      tags: ['React', 'API Integration', 'Chart.js'],
      liveUrl: 'https://social.example.com',
      repoUrl: 'https://github.com/aaronspence31/social-dashboard',
    },
  ];

  return (
    <Layout>
      <div className="py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-gray-600 mb-8">
          Here are some of the projects I&apos;ve worked on. Each project represents a unique
          challenge and demonstrates my skills and approach to development.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PortfolioPage; 