import React, { useState } from 'react';
import { RELEASE_VERSION, INSTALLER_SHA256 } from '../../config/download';
import './IntegrityVerification.css';

// Honest, minimal alternative to IntegrityVerification.jsx -- that
// component claims code-signing and an "Extended Validation
// Certificate" that we have not set up. Do not swap this out for that
// one unless the installer is genuinely code-signed. This component
// only states what's actually true: a SHA256 checksum a visitor can
// verify for themselves.
const ChecksumVerification = () => {
  const [copied, setCopied] = useState(false);

  const copyHash = () => {
    navigator.clipboard.writeText(INSTALLER_SHA256);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="integrity-verification">
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="iv-card">
          <h3 className="iv-title">Verify your download</h3>
          <p className="iv-desc">
            You can confirm the installer you downloaded is byte-for-byte identical to the
            one we published, by checking its SHA256 checksum.
          </p>

          <div style={{ margin: '1rem 0', textAlign: 'left' }}>
            <div style={{ fontSize: '0.85rem', opacity: 0.7, marginBottom: '0.25rem' }}>
              AuverionRebarX-Setup.exe (v{RELEASE_VERSION}) &mdash; SHA256
            </div>
            <code
              style={{
                display: 'block',
                wordBreak: 'break-all',
                background: 'rgba(255,255,255,0.06)',
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                fontSize: '0.85rem',
              }}
            >
              {INSTALLER_SHA256}
            </code>
            <button
              onClick={copyHash}
              style={{
                marginTop: '0.5rem',
                background: 'none',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '6px',
                padding: '0.4rem 0.9rem',
                color: 'inherit',
                cursor: 'pointer',
                fontSize: '0.85rem',
              }}
            >
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>

          <p className="iv-desc" style={{ fontSize: '0.85rem', opacity: 0.7 }}>
            On Windows, open PowerShell where you saved the file and run:
          </p>
          <code
            style={{
              display: 'block',
              background: 'rgba(255,255,255,0.06)',
              padding: '0.6rem 1rem',
              borderRadius: '6px',
              fontSize: '0.8rem',
              textAlign: 'left',
            }}
          >
            Get-FileHash .\AuverionRebarX-Setup.exe -Algorithm SHA256
          </code>
        </div>
      </div>
    </section>
  );
};

export default ChecksumVerification;
