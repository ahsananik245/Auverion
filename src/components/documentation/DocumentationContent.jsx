import React from 'react';
import ReactMarkdown from 'react-markdown';
import manual from '../../../docs/Revin-User-Manual.md?raw';
import './DocumentationContent.css';

const DocumentationContent = () => {
  return (
    <div className="docs-page">
      <div className="docs-layout container">
        <aside className="docs-sidebar">
          <nav className="docs-nav">
            <div className="docs-nav-group">
              <h4 className="docs-nav-title">Revin</h4>
              <ul className="docs-nav-links">
                <li><a href="#revin-user-manual" className="active">User Manual</a></li>
                <li><a href="#2-installation">Installation</a></li>
                <li><a href="#4-activating-pro">License Activation</a></li>
                <li><a href="#5-using-revin">Using Revin</a></li>
                <li><a href="#8-troubleshooting">Troubleshooting</a></li>
              </ul>
            </div>
            <div className="docs-nav-group">
              <h4 className="docs-nav-title">RebarX</h4>
              <ul className="docs-nav-links">
                <li><span className="disabled" style={{ opacity: 0.5 }}>Guide (Coming Soon)</span></li>
              </ul>
            </div>
          </nav>
        </aside>

        <main className="docs-main anim-fade-in">
          <div className="docs-breadcrumbs">
            <span>Docs</span> / <span className="active">Revin — User Manual</span>
          </div>
          <article className="docs-content">
            <ReactMarkdown>{manual}</ReactMarkdown>
          </article>
        </main>
      </div>
    </div>
  );
};

export default DocumentationContent;
