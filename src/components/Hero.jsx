import React from 'react';
import { Shield, Terminal, Lock, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ marginBottom: '1rem' }}>
        <span className="mono text-accent" style={{ fontSize: '1rem', letterSpacing: '0.1em' }}>
          &gt; init_user_profile
        </span>
      </div>
      
      <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
        Hello, I'm <br />
        <span className="text-gradient">Ethan Williams</span>
      </h1>
      
      <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--text-dim)', marginBottom: '2rem', fontWeight: '500' }}>
        Cybersecurity &amp; <span style={{ color: 'var(--text-main)' }}>IAM Engineer</span>
      </h2>
      
      <p style={{ maxWidth: '600px', fontSize: '1.1rem', color: 'var(--text-dim)', marginBottom: '3rem', lineHeight: '1.8' }}>
        Senior majoring in <strong style={{ color: 'var(--text-main)' }}>Management Information Systems</strong> with a minor in <strong style={{ color: 'var(--text-main)' }}>Computer Science</strong>. Passionate about identity access management, threat modeling, and securing modern digital ecosystems.
      </p>
      
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        <a href="#projects" className="btn-glow">
          <Terminal size={18} /> View Projects
        </a>
        <a href="#contact" className="btn-glow" style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'var(--text-main)' }}>
          <Shield size={18} /> Resume
        </a>
      </div>

      <div style={{ marginTop: '5rem', display: 'flex', gap: '2rem', opacity: '0.5' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
          <Lock size={16} className="text-accent" /> Secure By Design
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
          <Terminal size={16} className="text-accent" /> Script-Ready
        </div>
      </div>
    </section>
  );
};

export default Hero;
