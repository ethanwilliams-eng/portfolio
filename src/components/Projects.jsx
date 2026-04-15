import React from 'react';
import { ExternalLink, Github, MailWarning } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Phishing Identifier Module",
      description: "Developed a comprehensive framework indicating identifying advanced phishing techniques in email communications. Analyzed headers, payload structures, and social engineering patterns to detect spoofing.",
      techStack: ["Python", "Email Protocols", "Threat Analysis", "Security Awareness"],
      icon: <MailWarning size={40} className="text-accent" />,
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "IAM Role Provisioning Simulation",
      description: "Designed a mock environment simulating the automation of user onboarding and role-based access control leveraging an Active Directory-like structure.",
      techStack: ["Powershell", "Directory Services", "RBAC", "Access Governance"],
      icon: <ExternalLink size={40} className="text-accent" />,
      links: {
        github: "#",
      }
    }
  ];

  return (
    <section id="projects">
      <h2 className="section-title">
        <span className="mono text-accent" style={{ fontSize: '1.5rem', marginRight: '1rem' }}>02.</span>
        Featured Projects
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        {projects.map((project, idx) => (
          <div key={idx} className="glass-card" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            
            <div style={{ flex: '1', minWidth: '300px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)' }}>{project.title}</h3>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {project.links.github && (
                    <a href={project.links.github} aria-label="GitHub Link" style={{ color: 'var(--text-dim)' }} className="hover-white">
                      <Github size={22} />
                    </a>
                  )}
                  {project.links.live && (
                    <a href={project.links.live} aria-label="Live Link" style={{ color: 'var(--accent-primary)' }}>
                      <ExternalLink size={22} />
                    </a>
                  )}
                </div>
              </div>
              
              <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                {project.description}
              </p>
              
              <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', flexWrap: 'wrap', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--accent-secondary)' }}>
                {project.techStack.map((tech, tIdx) => (
                  <li key={tIdx}>{tech}</li>
                ))}
              </ul>
            </div>
            
          </div>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hover-white:hover { color: white !important; transition: 0.3s; }
      `}} />
    </section>
  );
};

export default Projects;
