import React from 'react';
import SEO from '../components/seo/SEO';
import RevinHero from '../components/revin/RevinHero';
import RevinIntegration from '../components/revin/RevinIntegration';
import RevinCapabilities from '../components/revin/RevinCapabilities';
import RevinPricing from '../components/revin/RevinPricing';
import FAQ from '../components/home/FAQ';

const revinFaqs = [
  {
    q: 'Does Revin need an internet connection or an API key?',
    a: 'No. Revin ships with its own fine-tuned AI model that runs locally on your machine. It works completely offline with no API key. If you prefer, you can optionally point it at a cloud model (Claude, GPT) with your own key — but the offline model is the default.'
  },
  {
    q: 'Is my project data sent anywhere?',
    a: 'No. With the bundled offline model, nothing about your model or conversation ever leaves your computer. That makes Revin suitable for NDA, government, and air-gapped work where cloud AI tools are not allowed.'
  },
  {
    q: 'Which Revit versions are supported?',
    a: 'Revin installs into Revit 2022 through 2026, on Windows 10/11 (64-bit). The installer auto-detects your installed versions and lets you pick which to install for.'
  },
  {
    q: 'What can Revin actually do inside Revit?',
    a: 'It models (walls, floors, roofs, rooms, columns, beams, foundations), documents (floor plans, sheets, schedules, tags, view renaming), edits, exports (DWG/IFC/PDF/CSV), audits against QC rules, estimates embodied carbon, and can trigger RebarX — over 100 tools, driven by plain-language requests.'
  },
  {
    q: 'How is Revin different from Autodesk’s built-in AI?',
    a: 'Revin runs fully offline, comes as a turnkey install with the model bundled, integrates RebarX detailing, and keeps per-project memory inside the .rvt file — none of which the cloud-based alternatives offer.'
  }
];

const Revin = () => {
  return (
    <>
      <SEO title="Revin — Offline AI Assistant for Revit" description="Revin is a native Revit plugin with a bundled, fine-tuned AI model that runs fully offline. Automate modeling and documentation with plain-language requests — no cloud, no API key, your data never leaves your machine." />
      <main>
        <RevinHero />
        <RevinIntegration />
        <RevinCapabilities />
        <RevinPricing />
        <FAQ faqsData={revinFaqs} />
      </main>
    </>
  );
};

export default Revin;
