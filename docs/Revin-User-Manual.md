# Revin — User Manual

**Revin — AI Assistant for Revit** · by [COMPANY LEGAL NAME]
Version [X.Y.Z] · [DATE] · Support: [CONTACT EMAIL]

Revin is a native Autodesk Revit plugin with a bundled, fine-tuned AI model that runs **fully offline**.
Describe what you want in plain language and Revin models and documents it inside Revit — no cloud, no
API key, and your project data never leaves your machine.

---

## 1. System requirements
- Windows 10 or 11 (64-bit)
- Autodesk Revit **2022, 2023, 2024, 2025, or 2026**
- ~4 GB free disk (the bundled AI model is ~2 GB)
- 16 GB RAM recommended for the local model

## 2. Installation
1. Download **AuverionRevin-Setup.exe** from [WEBSITE]/download.
2. Run it. The installer auto-detects your installed Revit versions (including custom install
   folders) and lets you tick which to install for. No admin rights or SDK required.
3. Start Revit. The first time, Revit asks about loading an unsigned add-in — click **"Always Load"**.
4. Open the **Revin** ribbon tab and click **Revin Chat** to open the panel.

## 3. Choosing your AI model (Settings)
Open **Revin → Settings → Provider**:
- **Bundled offline model (default):** runs locally, no key, no internet. Recommended.
- **Cloud model (Claude, GPT, OpenRouter):** paste your own API key for a larger cloud model.
Nothing about your model is sent anywhere when using the bundled offline model.

## 4. Activating Pro
1. Buy a plan at [WEBSITE]/pricing. Lemon Squeezy emails you a **license key**.
2. In Revin → **Settings → License**, paste the key and click **Activate purchase**.
3. Revin activates the key to this machine and unlocks Pro. It then works offline; it silently
   re-checks your subscription about once a week while you're online.
Leave the field blank to use the Free tier.

## 5. Using Revin
Type a request in plain English, for example:
- "Create floor plans for every level."
- "Tag all doors and windows in the active view."
- "Create a door schedule with Mark, Width and Level, then export it to CSV."
- "Audit the model against our QC rules and list the issues."
- "Estimate the embodied carbon of the structure."

Revin plans the steps, calls the right tools, and reports what it did. Every edit is confirmed and is
**undoable with Ctrl+Z** in Revit.

### The Tool Palette
Click **🧰 Tools** in the panel header to run any tool from a click-to-fill form instead of typing —
useful when you know exactly which action you want.

### Project memory
Revin remembers each project's conversation. Reopen a project and it continues where you left off; the
memory is also stored inside the `.rvt` file so it travels with the model.

## 6. Free vs Pro
- **Free:** the offline model, one step per request, core modeling and query tools, project memory.
- **Pro:** autonomous multi-step tasks, all 100+ automation tools, RebarX integration, priority support.

## 7. Updates
Revin checks for new releases and shows a banner when one is available. Small code updates do not
require re-downloading the AI model.

## 8. Troubleshooting
- **"Always Load" prompt each launch / add-in not loading:** click "Always Load" once; if it persists,
  reinstall and ensure your antivirus is not quarantining the add-in.
- **Revin only summarizes without acting (long session):** start a **New chat** — a very long
  conversation can fill the model's context. This resets it.
- **Activation fails:** confirm the license key is correct and that you have internet for the one-time
  activation. Contact [CONTACT EMAIL] if it persists.
- **Export "cannot open file":** Revin falls back to your Desktop; check there.

## 9. Privacy
With the bundled model, Revin sends no project data anywhere. Only a minimal license-activation and
update check are made online. See the Privacy Policy at [WEBSITE]/legal.

## 10. Support
Email [CONTACT EMAIL] or visit [WEBSITE]/support.
