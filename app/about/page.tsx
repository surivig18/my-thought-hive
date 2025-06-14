import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Twitter, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python',
  'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Git', 'Tailwind CSS'
];

const experience = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    period: '2022 - Present',
    description: 'Leading development of scalable web applications using React, Next.js, and Node.js. Mentoring junior developers and architecting system solutions.'
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to implement pixel-perfect interfaces.'
  },
  {
    title: 'Frontend Developer',
    company: 'StartupXYZ',
    period: '2019 - 2020',
    description: 'Built responsive web applications and contributed to the company\'s design system. Improved application performance and user experience.'
  }
];

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration, admin dashboard, and real-time analytics.',
    tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    link: '#'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates and team features.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    link: '#'
  },
  {
    title: 'Blog CMS',
    description: 'Content management system for bloggers with markdown support and SEO optimization.',
    tech: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS'],
    link: '#'
  }
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <section className="text-center py-16 mb-16">
        <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center mx-auto mb-8">
          <span className="text-4xl font-bold text-white">JD</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Hi, I'm John Doe
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Full Stack Developer passionate about creating exceptional web experiences. 
          I love building scalable applications, sharing knowledge, and exploring new technologies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" className="px-8">
            <Download className="h-4 w-4 mr-2" />
            Download Resume
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            <Mail className="h-4 w-4 mr-2" />
            Contact Me
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-4">
          {[
            { icon: Github, href: 'https://github.com', label: 'GitHub' },
            { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
            { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
          ].map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors group"
                aria-label={social.label}
              >
                <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            );
          })}
        </div>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              With over 5 years of experience in web development, I specialize in building 
              modern, scalable applications using the latest technologies. My journey started 
              with a curiosity about how websites work, and it has evolved into a passion for 
              creating digital experiences that make a difference.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              I believe in clean code, user-centered design, and continuous learning. 
              When I'm not coding, you can find me writing technical articles, contributing 
              to open source projects, or exploring new technologies.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Through this blog, I share my experiences, insights, and learnings with the 
              developer community. I hope my articles help others on their coding journey!
            </p>
          </div>
          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Quick Facts</h3>
            <div className="space-y-4">
              <div>
                <span className="font-medium text-gray-900">Location:</span>
                <span className="text-gray-600 ml-2">San Francisco, CA</span>
              </div>
              <div>
                <span className="font-medium text-gray-900">Experience:</span>
                <span className="text-gray-600 ml-2">5+ years</span>
              </div>
              <div>
                <span className="font-medium text-gray-900">Focus:</span>
                <span className="text-gray-600 ml-2">Full Stack Development</span>
              </div>
              <div>
                <span className="font-medium text-gray-900">Interests:</span>
                <span className="text-gray-600 ml-2">Web3, AI, Open Source</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Skills & Technologies</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Experience</h2>
        <div className="space-y-6">
          {experience.map((job, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription className="font-medium text-blue-600">
                      {job.company}
                    </CardDescription>
                  </div>
                  <Badge variant="outline">{job.period}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{job.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
          Interested in collaborating on a project or just want to say hello? 
          I'd love to hear from you!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg" className="px-8">
            <Mail className="h-4 w-4 mr-2" />
            Send Message
          </Button>
          <Button variant="outline" size="lg" className="px-8 text-white border-white hover:bg-white hover:text-blue-600">
            <Link href="/posts" className="flex items-center">
              View My Articles
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}