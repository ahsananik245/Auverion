import React from 'react';
import './TeamContent.css';

const teamMembers = [
  {
    name: "Eleanor Vance",
    role: "Chief Executive Officer",
    bio: "Eleanor brings 15 years of leadership experience in SaaS scaling and product strategy. She previously led a unicorn startup to IPO.",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Marcus Chen",
    role: "Chief Technology Officer",
    bio: "A pioneer in distributed systems, Marcus holds 12 patents in AI and cloud computing. He leads our engineering teams globally.",
    photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Design",
    bio: "Sarah ensures that every pixel at Auverion is purposeful. Her background spans top creative agencies and enterprise tech.",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "David Nkosi",
    role: "VP of Engineering",
    bio: "David is the architectural backbone of our core products. He is passionate about open-source and developer advocacy.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
  }
];

const TeamContent = () => {
  return (
    <div className="team-content container">
      <div className="team-header text-center anim-fade-in" style={{ marginBottom: '64px' }}>
        <h2>Meet the Minds Behind Auverion</h2>
        <p className="text-secondary" style={{ maxWidth: '600px', margin: '16px auto 0' }}>Our diverse team of experts is united by a shared passion for building exceptional software and pushing technological boundaries.</p>
      </div>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-member anim-slide-up" key={member.name} style={{ animationDelay: `${index * 100}ms` }}>
            <img src={member.photo} alt={member.name} className="team-photo" />
            <div className="team-info">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamContent;
