import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export type ProjectType = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
};

type ProjectCardProps = {
  project: ProjectType;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, description, imageSrc, tags, liveUrl, repoUrl } = project;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48 w-full" style={{ position: 'relative' }}>
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              View Live
            </Link>
          )}
          {repoUrl && (
            <Link
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              View Code
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 