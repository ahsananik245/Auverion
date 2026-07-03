import React from 'react';
import FAQ from '../home/FAQ';

const faqData = [
  {
    question: 'How do I update RebarX?',
    answer: 'You can update RebarX by downloading the latest installer from this page and running it. The installer will automatically detect and upgrade your existing installation while preserving your settings and custom rules.'
  },
  {
    question: 'Can I install over an existing version?',
    answer: 'Yes, the installer is designed to perform an in-place upgrade. You do not need to uninstall the previous version unless you are downgrading.'
  },
  {
    question: 'Can multiple versions coexist?',
    answer: 'No, RebarX is designed as a single-instance installation to prevent API conflicts with ETABS and Revit.'
  },
  {
    question: 'How do I verify the installer?',
    answer: 'You can verify the installer using the SHA-256 checksum provided in the Integrity Verification section below, or by checking the Digital Signature properties of the downloaded .exe file.'
  },
  {
    question: 'Does the installer require internet?',
    answer: 'The Standard Installer requires an active internet connection to download dependencies like the latest .NET runtimes. If you are on an air-gapped network, please download the Offline Installer.'
  },
  {
    question: 'Can I download previous releases?',
    answer: 'Yes, up to ten previous releases are available in the Previous Versions section below.'
  },
  {
    question: 'Where are release notes located?',
    answer: 'Release notes are available in the interactive Version History section above, and are also included as a PDF in the installation directory.'
  },
  {
    question: 'Is the installer digitally signed?',
    answer: 'Yes, every official Auverion installer is signed with an Extended Validation (EV) Code Signing Certificate from a trusted Certificate Authority.'
  }
];

const DownloadFAQ = () => {
  return (
    <div style={{ padding: '96px 0', backgroundColor: 'var(--surface-elevated)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)' }}>Frequently Asked Questions</h2>
        </div>
        <FAQ faqs={faqData} />
      </div>
    </div>
  );
};

export default DownloadFAQ;
