import React from 'react';
import './DocumentationContent.css';

const navItems = [
  { title: 'Getting Started', links: ['Installation', 'Quick Start Guide', 'License Activation'] },
  { title: 'Core Concepts', links: ['Project Setup', 'Importing from ETABS', 'Meshing & Analysis'] },
  { title: 'Detailing Rules', links: ['Rule Editor', 'Standard Libraries', 'Custom Templates'] },
  { title: 'Export & Output', links: ['Revit Integration', 'BBS Generation', 'Export Formats'] },
];

const DocumentationContent = () => {
  return (
    <div className="docs-page">
      <div className="docs-layout container">
        <aside className="docs-sidebar">
          <div className="docs-search">
            <input type="text" placeholder="Search docs..." />
          </div>
          <nav className="docs-nav">
            {navItems.map((section, idx) => (
              <div className="docs-nav-group" key={idx}>
                <h4 className="docs-nav-title">{section.title}</h4>
                <ul className="docs-nav-links">
                  {/* Placeholder navigation for future documentation pages */}
                  {section.links.map((link, lIdx) => {
                    const slug = '#' + link.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                    if (link === 'Quick Start Guide') {
                      return <li key={lIdx}><a href={slug} className="active">{link}</a></li>;
                    }
                    return (
                      <li key={lIdx}>
                        <span className="disabled" style={{ opacity: 0.5, cursor: 'not-allowed' }}>
                          {link} (Coming Soon)
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </aside>
        
        <main className="docs-main anim-fade-in">
          <div className="docs-breadcrumbs">
            <span>Docs</span> / <span>Getting Started</span> / <span className="active">Quick Start Guide</span>
          </div>
          
          <article className="docs-content">
            <h1 id="quick-start-guide">Quick Start Guide</h1>
            <p className="docs-lead">Get up and running with RebarX in under 10 minutes. This guide walks you through your first structural model import and reinforcement generation.</p>
            
            <hr className="docs-divider" />
            
            <h2>1. Importing Your Model</h2>
            <p>Start by opening RebarX and selecting <strong>New Project</strong>. Choose the EXR file generated from your ETABS export. RebarX will automatically read the structural elements and internal forces.</p>
            <div className="docs-code-block">
              <code>File &gt; Import &gt; ETABS Model (.exr)</code>
            </div>

            <h2>2. Assigning Detailing Rules</h2>
            <p>Once the model is loaded, navigate to the <strong>Rule Manager</strong>. Select a pre-defined standard (e.g., ACI 318 or Eurocode 2) or apply a custom template.</p>
            <div className="docs-tip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              <span><strong>Pro Tip:</strong> You can bulk-assign rules to similar elements by selecting them in the 3D viewport.</span>
            </div>

            <h2>3. Generating Reinforcement</h2>
            <p>Click the <strong>Generate</strong> button on the top toolbar. RebarX will process the forces and rules to create 3D rebar cages for the entire structure. This process takes advantage of multi-core processing and is usually completed in seconds.</p>

            <div className="docs-nav-bottom">
              <span className="docs-prev disabled" style={{opacity: 0.5, cursor: 'not-allowed'}}>
                <span className="label">Previous</span>
                <span className="title">Installation (Coming Soon)</span>
              </span>
              <span className="docs-next disabled" style={{opacity: 0.5, cursor: 'not-allowed'}}>
                <span className="label">Next</span>
                <span className="title">License Activation (Coming Soon)</span>
              </span>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
};

export default DocumentationContent;
