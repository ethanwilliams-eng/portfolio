import React from 'react';
import { KeyRound, ShieldAlert, Code2, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Identity & Access Management",
      icon: <KeyRound className="text-accent" size={24} />,
      skills: ["OAuth 2.0 / OIDC", "SAML", "Active Directory", "Role-Based Access Control (RBAC)", "Okta / SailPoint (Concepts)"]
    },
    {
      title: "Cybersecurity",
      icon: <ShieldAlert className="text-accent" size={24} />,
      skills: ["Threat Modeling", "Phishing Mitigation", "Network Security", "Risk Assessment", "OSINT"]
    },
    {
      title: "Programming & Scripting",
      icon: <Code2 className="text-accent" size={24} />,
      skills: ["Python", "JavaScript / React", "Bash / Shell", "Powershell", "Java"]
    },
    {
      title: "Systems & Data",
      icon: <Database className="text-accent" size={24} />,
      skills: ["SQL / Databases", "Linux / Unix", "Windows Server", "Cloud Basics (AWS/Azure)", "MIS Governance"]
    }
  ];

  return (
    <section id="skills">
      <h2 className="section-title">
        <span className="mono text-accent" style={{ fontSize: '1.5rem', marginRight: '1rem' }}>01.</span>
        Core Competencies
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {skillCategories.map((category, idx) => (
          <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ padding: '0.75rem', background: 'rgba(0, 240, 255, 0.1)', borderRadius: '8px' }}>
                {category.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{category.title}</h3>
            </div>
            
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {category.skills.map((skill, sIdx) => (
                <li key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-dim)' }}>
                  <span style={{ color: 'var(--accent-secondary)' }}>▹</span> {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
