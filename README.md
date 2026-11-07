# Shubhangi Bhagat — Developer Portfolio

A developer portfolio for **Shubhangi Bhagat**, designed for recruiters, engineering managers, and technical founders. Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🌟 Architecture & Key Features

- **Tabbed Architecture**:
  - **Overview (`/`)**: High-signal landing page with basic intro, headshot, pitch, interactive dev terminal, and 4 summarizing bento cards.
  - **Internship (`/internship`)**: Dedicated deep-dive into TruAdaptiv Systems SDE Internship, official completion certificate viewer, VRAS architecture pipeline, and interactive audio waveform simulation.
  - **Projects (`/projects`)**: Full case studies with category filtering (All, AI/ML, Full Stack, Data Engineering), problem-approach-result breakdowns, and GitHub links.
  - **Journey & Timeline (`/journey`)**: Interactive chronological timeline (2023 – 2027) covering Manipal University Jaipur education standing, leadership roles (Placement Coordinator, IEEE WIE, GSSoC), and hackathon honors.
  - **Skills & Stack (`/skills`)**: Categorized technical competencies and verified certifications (Cisco, Oracle, NPTEL, CodeChef).
  - **Contact (`/contact`)**: Direct contact hub with 1-click email copy & celebratory confetti, direct mailto, and social links.
- **Glassmorphism Aesthetic**: True frosted glass panels (`.glass-panel`, `.glass-card`), subtle ambient glow spheres, and floating dock navigation.
- **Fun Interactive Features**:
  - **Interactive Developer Terminal**: Allows typing commands (`whoami`, `internship`, `projects`, `stack`, `contact`, `clear`) or clicking interactive chips.
  - **Audio Waveform Simulation Widget**: Live acoustic compliance visualizer modeling the VRAS / Shruti-Sakshi speech pipeline.
  - **Interactive Timeline**: Expandable milestone cards with tags and details.
- **Visual Tone**: Strictly soothing palette of white, black, slate greys, and deep navy blue. Zero neon or bright colors.
- **Light First with Dark Toggle**: Default light mode with instant theme switching.
- **Single Source of Truth**: All data and content configured in [`data/portfolioData.ts`](file:///C:/Users/SHUBHANGI/.gemini/antigravity/scratch/shubhangi-portfolio/data/portfolioData.ts).

---

## 🚀 Local Development

1. Open a terminal in the project directory:
   ```powershell
   cd "C:\Users\SHUBHANGI\.gemini\antigravity\scratch\shubhangi-portfolio"
   ```
2. Run the development server:
   ```powershell
   npm run dev
   ```
3. Open in browser: **[http://localhost:3000](http://localhost:3000)**

---

## 🚢 Deploying to Vercel (When Ready)

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Shubhangi Bhagat portfolio v2"
   git branch -M main
   git remote add origin https://github.com/BhagatShubhangi/<portfolio-repo>.git
   git push -u origin main
   ```
2. Import repository in [Vercel](https://vercel.com).
3. Connect your custom domain `shubhangibhagat.dev`.
