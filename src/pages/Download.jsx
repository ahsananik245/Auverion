import React from 'react';
import DownloadHero from '../components/download/DownloadHero';
import Button from '../components/ui/Button';
import LatestRelease from '../components/download/LatestRelease';
import DownloadOptions from '../components/download/DownloadOptions';
import SystemRequirements from '../components/download/SystemRequirements';
import InstallationGuide from '../components/download/InstallationGuide';
import ReleaseNotes from '../components/download/ReleaseNotes';
import PreviousVersions from '../components/download/PreviousVersions';
import UpdateChannels from '../components/download/UpdateChannels';
import IntegrityVerification from '../components/download/IntegrityVerification';
import KnownIssues from '../components/download/KnownIssues';
import DownloadFAQ from '../components/download/DownloadFAQ';
import DownloadHelp from '../components/download/DownloadHelp';

const Download = () => {
  return (
    <main>
      <DownloadHero />
      <LatestRelease />
      <DownloadOptions />
      <SystemRequirements />
      <InstallationGuide />
      <ReleaseNotes />
      <PreviousVersions />
      <UpdateChannels />
      <IntegrityVerification />
      <KnownIssues />
      <DownloadFAQ />
      <DownloadHelp />
    </main>
  );
};

export default Download;

