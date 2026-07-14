// Single source of truth for the current downloadable release.
// Update these two lines when you publish a new installer to GitHub
// Releases -- every download button on the site reads from here, so
// there's exactly one place to change per release instead of hunting
// through components.
//
// GitHub Releases gives you a stable, versioned, directly-downloadable
// URL for free (no separate file hosting needed) in this exact shape:
//   https://github.com/<owner>/<repo>/releases/download/<tag>/<filename>
//
// Replace REPLACE_WITH_GITHUB_USERNAME and REPLACE_WITH_REPO_NAME below
// with your actual GitHub username/org and repository name once you've
// created the release (see the setup steps you were given alongside
// this file).

export const RELEASE_VERSION = "2.0.0";
export const RELEASE_TAG = "v2.0.0"; // the Git tag you create the GitHub Release from
export const RELEASE_DATE = "July 2026";

const GITHUB_OWNER = "ahsananik245";
const GITHUB_REPO = "Auverion";
const INSTALLER_FILENAME = "AuverionRebarX-Setup.exe";

// Real SHA256 of the published AuverionRebarX-Setup.exe (v2.0.0).
// IMPORTANT: this must be re-generated and updated here every time you
// publish a new installer build -- a stale hash is worse than no hash
// at all, since it would tell a visitor a genuine file is corrupted.
// Regenerate with (PowerShell, on the exact file you're about to upload
// to the GitHub Release): Get-FileHash .\AuverionRebarX-Setup.exe -Algorithm SHA256
export const INSTALLER_SHA256 =
  "9838707bc30cbc89a08474d88ba6d3aa0e7a003813181ea71c8bc35db4a1f035";

export const DOWNLOAD_URL =
  `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases/download/${RELEASE_TAG}/${INSTALLER_FILENAME}`;

// Points at the release page itself (shows all assets, release notes,
// and lets a visitor pick an older version) -- useful as a fallback
// link near the button.
export const RELEASE_PAGE_URL =
  `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases/tag/${RELEASE_TAG}`;
