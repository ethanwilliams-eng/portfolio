import React from 'react';
import { Linkedin, Github, Mail, Hexagon } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" style={{ borderTop: '1px solid var(--card-border)', paddingTop: '4rem', paddingBottom: '2rem', marginTop: '4rem' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Get In Touch</h2>
        <p style={{ maxWidth: '500px', color: 'var(--text-dim)', marginBottom: '3rem' }}>
          I'm currently open to new opportunities in Cybersecurity, IAM engineering, and related fields. Whether you have a question or just want to say hi, my inbox is always open!
        </p>

        <a href="mailto:hello@example.com" className="btn-glow" style={{ marginBottom: '4rem' }}>
          Say Hello
        </a>

        <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
          <a href="#" style={{ color: 'var(--text-dim)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-dim)'}>
            <Github size={24} />
          </a>
          <a href="#" style={{ color: 'var(--text-dim)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-dim)'}>
            <Linkedin size={24} />
          </a>
          <a href="#" style={{ color: 'var(--text-dim)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-dim)'}>
            <Mail size={24} />
          </a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
          <Hexagon size={14} className="text-accent" />
          <span>Designed & Built by Ethan</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
