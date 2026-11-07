export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "AI/ML" | "Backend / Full Stack" | "Data Engineering";
  problem: string;
  approach: string;
  stack: string[];
  result: string;
  metrics?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  architectureDetails?: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  type: string;
  location: string;
  period: string;
  certificateRef?: string;
  certificateUrl?: string;
  summary: string;
  contributions: string[];
  stack: string[];
  highlights: { label: string; value: string }[];
  architectureSteps: { step: string; title: string; desc: string }[];
}

export interface TimelineMilestone {
  year: string;
  title: string;
  category: "Education" | "Internship" | "Leadership" | "Honors";
  institution: string;
  period: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface LeadershipItem {
  organization: string;
  role: string;
  period: string;
  description: string;
  metrics?: string;
  tags: string[];
}

export interface CertificationItem {
  issuer: "Cisco" | "Oracle" | "NPTEL" | "CodeChef";
  title: string;
  category: string;
}

export const portfolioData = {
  personal: {
    name: "Shubhangi Bhagat",
    role: "AI/ML & Full Stack Developer",
    education: {
      degree: "B.Tech in Computer Science and Engineering (AI & ML)",
      institution: "Manipal University Jaipur",
      location: "Jaipur, Rajasthan",
      period: "2023 – 2027",
      status: "Final Year Undergraduate (Graduating 2027)",
    },
    location: "Delhi, India",
    email: "shubhangibhagat004@gmail.com",
    github: "https://github.com/BhagatShubhangi",
    linkedin: "https://www.linkedin.com/in/shubhangi-bhagat-21501a2ab/",
    domain: "https://shubhangibhagat.dev",
    photoUrl: "/profile.jpg",
    resumeUrl: "/resume.pdf",
    shortBio:
      "Final-year Computer Science and Engineering undergraduate specializing in AI and ML, with hands-on experience building full-stack applications and ML systems. Experienced in SQL databases, automated testing, and software delivery.",
    pitch:
      "Crafting high-throughput FastAPI/Node.js backends, resilient async pipelines, and applied machine learning systems that transform complex data into reliable software.",
    stats: [
      { label: "SDE Internship", value: "TruAdaptiv Systems" },
      { label: "LeetCode Solved", value: "250+ Problems" },
      { label: "Regression Suite Pass Rate", value: "100% (256 Tests)" },
      { label: "Turnaround Cut", value: "40% via Celery" },
    ],
  },

  experience: [
    {
      company: "TruAdaptiv Systems Pvt. Ltd.",
      role: "Software Development Intern (SDE Intern)",
      type: "Full-Time Internship (Online / Remote)",
      location: "Thane, Mumbai (Remote)",
      period: "June 2026 – July 2026",
      certificateRef: "TAS/HR/INT/2026/002",
      certificateUrl: "/truadaptiv-certificate.pdf",
      summary:
        "Took end-to-end engineering ownership of VRAS (Voice-based Audit System / Shruti-Sakshi), an AI-driven audio-analysis platform for operational compliance, from initial requirement analysis through to live client production deployment.",
      contributions: [
        "Architected and implemented the core VRAS backend on Python 3.12, FastAPI, async SQLAlchemy, Celery/Redis, and PostgreSQL.",
        "Engineered the speech processing and analysis engine, including operational gate-operations analyzer, custom speech-to-text correction layers, and diarization-independent scoring.",
        "Constructed automated PDF audit report generation pipelines directly delivering scored compliance summaries to end-users.",
        "Maintained a 256-test automated regression suite preserving a 100% pass rate across active development sprints.",
        "Implemented secure JWT authentication with TOTP for administrative access, single-use refresh tokens, and fail-closed Redis session handling.",
        "Executed dual production deployments: on-premise VPS server (systemd service management and repeatable git-based redeploy workflows) and AWS trial environment driven by CloudFormation IaC templates.",
        "Conducted multiple live solution demonstrations directly to end-customers, capturing and resolving critical UAT feedback.",
      ],
      stack: [
        "Python 3.12",
        "FastAPI",
        "async SQLAlchemy",
        "PostgreSQL",
        "Redis",
        "Celery",
        "AWS CloudFormation",
        "Linux VPS",
        "React 18",
      ],
      highlights: [
        { label: "Automated Testing", value: "256 tests @ 100% pass rate" },
        { label: "Workflow Optimization", value: "40% faster turnaround" },
        { label: "Deployment Scope", value: "On-Premise VPS & AWS IaC" },
      ],
      architectureSteps: [
        {
          step: "01",
          title: "Audio Ingestion & Preprocessing",
          desc: "Raw multi-speaker audio streams are received via authenticated FastAPI endpoints, converted, and queued in Redis.",
        },
        {
          step: "02",
          title: "Async Celery Job Queue",
          desc: "Distributed worker processes decouple heavy acoustic analysis from the web server, slashing turnaround latency by 40%.",
        },
        {
          step: "03",
          title: "Speech Correction & DI Scoring",
          desc: "Custom phoneme-level corrections mitigate industrial background noise; diarization-independent algorithms score operational compliance.",
        },
        {
          step: "04",
          title: "Automated Reporting & PostgreSQL Persistence",
          desc: "Results are persisted in PostgreSQL with async SQLAlchemy and compiled into PDF compliance reports for client auditors.",
        },
      ],
    },
  ] as ExperienceItem[],

  timeline: [
    {
      year: "2023 – 2027",
      title: "B.Tech in Computer Science and Engineering (AI & ML)",
      category: "Education",
      institution: "Manipal University Jaipur",
      period: "2023 – 2027 (Final Year Standing)",
      description:
        "Specializing in Artificial Intelligence and Machine Learning. Rigorous coursework covering Data Structures & Algorithms, Operating Systems, DBMS, Machine Learning, Deep Learning, and Cloud Computing.",
      highlights: [
        "Two-time recipient of Student Excellence Award for academic consistency",
        "Final-year standing with active research in applied AI systems",
        "Solved 250+ algorithmic challenges on LeetCode",
      ],
      skills: ["Python", "C/C++", "DSA", "DBMS", "Deep Learning", "SQL"],
    },
    {
      year: "Summer 2026",
      title: "Software Development Intern (SDE Intern)",
      category: "Internship",
      institution: "TruAdaptiv Systems Pvt. Ltd.",
      period: "June 2026 – July 2026",
      description:
        "Led end-to-end engineering of the VRAS (Shruti-Sakshi) AI audio analysis platform. Built FastAPI async microservices, Celery job queues, speech correction pipelines, and orchestrated on-premise VPS and AWS CloudFormation deployments.",
      highlights: [
        "Ref: TAS/HR/INT/2026/002 verified certificate",
        "Maintained 256-test regression suite at 100% pass rate",
        "Slashed job turnaround time by 40%",
      ],
      skills: ["Python 3.12", "FastAPI", "async SQLAlchemy", "Celery", "Redis", "AWS CloudFormation"],
    },
    {
      year: "2025 – 2026",
      title: "Digital Register for International Students (SFU Russia)",
      category: "Honors",
      institution: "Southern Federal University & MUJ",
      period: "Sept 2025 – Apr 2026",
      description:
        "Directed an international cross-institutional software engineering team as Team Lead & Frontend Developer, creating a unified academic monitoring and tracking portal in React.",
      highlights: [
        "Cross-institution team leadership across India and Russia",
        "Engineered modular React state and document workflows",
      ],
      skills: ["React", "JavaScript", "Team Leadership", "Cross-Border Delivery"],
    },
    {
      year: "2025",
      title: "Student Placement Coordinator",
      category: "Leadership",
      institution: "Manipal University Jaipur",
      period: "Apr 2025 – Dec 2025",
      description:
        "Appointed to coordinate campus placement drives with multinational recruiters. Mentored junior and peer engineering cohorts on algorithmic interview strategy, system design basics, and technical resume formulation.",
      highlights: [
        "Coordinated placement drives across multiple engineering streams",
        "Conducted 1-on-1 technical interview prep and resume reviews",
      ],
      skills: ["Mentorship", "Technical Interview Prep", "Placement Coordination"],
    },
    {
      year: "2025",
      title: "Campus Ambassador & Open-Source Contributor",
      category: "Leadership",
      institution: "GirlScript Summer of Code (GSSoC)",
      period: "Jun 2025 – Aug 2025",
      description:
        "Contributed to public open-source repositories through structured Git pull requests, code reviews, and issue triage. Promoted open-source participation across university developer communities.",
      highlights: [
        "Structured Git/GitHub pull request and code review contributions",
        "Organized community open-source awareness sessions",
      ],
      skills: ["Git", "GitHub Workflow", "PR Reviews", "Community Outreach"],
    },
    {
      year: "2024 – 2025",
      title: "Head of Technical Projects",
      category: "Leadership",
      institution: "IEEE WIE (Women in Engineering), MUJ",
      period: "Sept 2024 – May 2025",
      description:
        "Directed technical initiatives and revamped the IEEE WIE online presence, scaling web traffic to 500+ monthly visitors. Spearheaded 20+ hands-on technical workshops for 200+ engineering students.",
      highlights: [
        "Grew website traffic to 500+ monthly visitors",
        "Organized 20+ workshops engaging 200+ students",
      ],
      skills: ["Project Management", "Web Traffic Growth", "Workshop Instruction"],
    },
    {
      year: "2024",
      title: "Hackathon Finalist & Special Mention",
      category: "Honors",
      institution: "MUJ HackX, Woodpecker & IEEE WIE",
      period: "2024",
      description:
        "National finalist at MUJ HackX 2024, Woodpecker Hackathon, and International Innovation Challenge. Awarded Special Mention at Apotheosis Hackathon hosted by IEEE WIE.",
      highlights: [
        "Finalist: MUJ HackX 2024 & Woodpecker Hackathon",
        "Finalist: International Innovation Challenge",
        "Special Mention: Apotheosis Hackathon (IEEE WIE)",
      ],
      skills: ["Rapid Prototyping", "Full-Stack AI", "Competitive Hackathons"],
    },
    {
      year: "2024",
      title: "Genesis Core Committee Member",
      category: "Leadership",
      institution: "IEEE Student Branch, MUJ",
      period: "Jul 2024 – Oct 2024",
      description:
        "Executed 10+ flagship technical events for over 2,000 attendees. Supervised a volunteer force of 60+ members, delivering 30% year-over-year participation growth.",
      highlights: [
        "2,000+ total event attendees across 10+ flagship events",
        "Managed 60+ volunteers with 30% YoY participation expansion",
      ],
      skills: ["Event Architecture", "Team Coordination", "Operations"],
    },
  ] as TimelineMilestone[],

  projects: [
    {
      id: "vras-audit-system",
      title: "VRAS / Shruti-Sakshi Audio Compliance Platform",
      subtitle: "AI-Driven Voice Audit & Diarization-Independent Scoring Engine",
      category: "AI/ML",
      featured: true,
      problem:
        "Operational gate audits required manual transcription of multi-speaker audio recordings, leading to high turnaround latency, human error, and compliance blind spots.",
      approach:
        "Architected an end-to-end async backend with FastAPI and Celery workers. Built diarization-independent acoustic scoring modules and custom phoneme/spelling correction layers to handle industrial noise.",
      stack: ["Python 3.12", "FastAPI", "PostgreSQL", "Celery", "Redis", "AWS CloudFormation", "async SQLAlchemy"],
      result:
        "Delivered production platform featuring automated scoring, PDF report export, and 40% reduction in job completion time. Maintained 100% pass rate across 256 regression tests.",
      metrics: "40% turnaround reduction • 256 regression tests",
      architectureDetails: [
        "FastAPI async endpoints with Redis-backed task queuing",
        "Celery worker pool decoupling heavy speech-to-text inference",
        "Custom acoustic noise reduction & phonetic correction algorithms",
        "Automated PDF compliance audit generation engine",
      ],
    },
    {
      id: "cognitive-load-analysis",
      title: "Cognitive Load Aware Analysis",
      subtitle: "Multimodal Mental Workload Classification & Telemetry",
      category: "AI/ML",
      featured: true,
      problem:
        "Accurately quantifying human cognitive strain during high-stress operational tasks without intrusive medical equipment is critical for safety-sensitive interfaces.",
      approach:
        "Engineered predictive machine learning pipelines processing physiological and behavioral telemetry. Implemented feature extraction, outlier detection, and classification models to detect cognitive overload states.",
      stack: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "NumPy", "Statistical Modeling"],
      result:
        "Created an end-to-end analytical framework capable of distinguishing baseline vs. overloaded cognitive states to inform adaptive UI and task rebalancing.",
      metrics: "Multimodal classification • Feature extraction",
      githubUrl: "https://github.com/BhagatShubhangi/Cognitive-Load-Aware-Analysis",
      architectureDetails: [
        "Raw behavioral telemetry stream extraction and data cleaning",
        "Multimodal statistical feature engineering (time & frequency domain)",
        "Trained supervised classifiers evaluating cognitive overload boundaries",
      ],
    },
    {
      id: "f1-telemetry-strategy",
      title: "Formula 1 Telemetry & Race Strategy Intelligence",
      subtitle: "High-Frequency Telemetry Analytics & Pit-Window Simulation",
      category: "Data Engineering",
      featured: true,
      problem:
        "Modern Formula 1 strategy requires processing gigabytes of raw sector times, throttle/brake telemetry, and tyre degradation curves to identify optimal pit windows in real time.",
      approach:
        "Extracted and synchronized multi-car telemetry streams using the FastF1 API. Modeled tyre wear decay rates, lap delta crossovers, and undercut efficacy using predictive regressors and statistical curves.",
      stack: ["Python", "FastF1 API", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
      result:
        "Built comprehensive race pace modeling and delta telemetry visualizers enabling comparative driver throttle traces and pit stop strategy simulations.",
      metrics: "Microsector telemetry sync • Tyre degradation modeling",
      githubUrl: "https://github.com/BhagatShubhangi",
      architectureDetails: [
        "FastF1 API streaming sector telemetry, speed traps, and gear shifts",
        "Non-linear regression modeling for soft/medium/hard tyre compound degradation",
        "Interactive lap delta delta plots simulating pit undercut windows",
      ],
    },
    {
      id: "digital-register-international",
      title: "Digital Register for International Students",
      subtitle: "Cross-Institutional Academic Monitoring Portal",
      category: "Backend / Full Stack",
      featured: true,
      problem:
        "Coordinating academic progress, visas, and university documentation across international academic partner institutions suffered from fragmented communication channels.",
      approach:
        "Directed a cross-border engineering team in partnership with Southern Federal University (Russia) as Team Lead & Frontend Developer. Designed a structured, responsive React interface and document verification flow.",
      stack: ["React", "JavaScript", "HTML5/CSS3", "REST APIs", "Git Collaboration"],
      result:
        "Shipped a unified portal enabling real-time international student status tracking and secure document accessibility across partner faculties.",
      metrics: "International collaboration • Cross-institution deployment",
      githubUrl: "https://github.com/BhagatShubhangi",
      architectureDetails: [
        "Modular React frontend with localized internationalization support",
        "RESTful API integration for secure student document transfer",
        "Cross-institution Git workflow with Russian faculty counterparts",
      ],
    },
    {
      id: "mentor-scheduling-platform",
      title: "Mentor Scheduling & Document Workflow System",
      subtitle: "High-Concurrency Booking & Relational Workflow Engine",
      category: "Backend / Full Stack",
      featured: false,
      problem:
        "Simultaneous student booking requests during peak advisory periods led to severe database query bottlenecks and scheduling conflicts.",
      approach:
        "Designed normalized MySQL relational schemas with composite indexing, query optimization, and transaction safeguards. Connected a Node.js REST API with an interactive React dashboard.",
      stack: ["React", "Node.js", "Express", "MySQL", "REST APIs", "Tailwind CSS"],
      result:
        "Reduced database query latency by 30% under simulated concurrent peak loads while guaranteeing zero double-booking occurrences.",
      metrics: "30% query latency cut • Zero booking collisions",
      githubUrl: "https://github.com/BhagatShubhangi",
    },
    {
      id: "fake-recruiter-detector",
      title: "Job Scam & Fake Recruiter Detector",
      subtitle: "Class-Balanced Fraud Classifier with Streamlit Dashboard",
      category: "AI/ML",
      featured: false,
      problem:
        "Online job portals face escalating fraud risks from synthetic recruiter profiles and scam postings, where positive fraud cases constitute less than 5% of postings.",
      approach:
        "Trained an XGBoost classification engine on the 18,000-sample EMSCAD dataset. Countered severe class imbalance using SMOTE synthetic oversampling and tailored text feature pipelines.",
      stack: ["Python", "XGBoost", "Scikit-learn", "SMOTE", "Streamlit", "Pandas"],
      result:
        "Achieved an 86% recall rate on fraudulent listings and deployed an accessible, real-time Streamlit web app for instant posting evaluation.",
      metrics: "86% recall on fraud • 18K EMSCAD dataset",
      githubUrl: "https://github.com/BhagatShubhangi",
    },
  ] as Project[],

  skills: {
    languages: ["Python", "C/C++", "JavaScript", "TypeScript", "SQL", "HTML5 / CSS3"],
    frameworks: [
      "FastAPI",
      "React 18",
      "Next.js",
      "Node.js",
      "Express.js",
      "async SQLAlchemy",
      "Celery",
      "REST APIs",
    ],
    aiml: [
      "TensorFlow",
      "LangChain",
      "Scikit-learn",
      "XGBoost",
      "SMOTE",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Audio Pipelines (ASR / Diarization)",
      "RAG Pipelines",
    ],
    databasesCloud: [
      "PostgreSQL",
      "Redis",
      "MySQL",
      "MongoDB",
      "AWS (CloudFormation, EC2, S3)",
      "GCP",
      "Linux / VPS",
      "Git / GitHub",
    ],
    concepts: [
      "Data Structures & Algorithms (250+ LC)",
      "System Architecture & API Design",
      "Database Optimization & Indexing",
      "Automated Testing (256 Tests @ 100%)",
      "Asynchronous Job Queues",
      "Client UAT Demos",
    ],
  },

  leadership: [
    {
      organization: "Manipal University Jaipur",
      role: "Student Placement Coordinator",
      period: "Apr 2025 – Dec 2025",
      description:
        "Facilitated campus placement drives across multinational recruiters. Mentored peers on technical resume crafting, algorithmic interview readiness, and mock technical screens.",
      metrics: "Facilitated placement drives • Mentored engineering cohorts",
      tags: ["Mentorship", "Placement Operations", "Mock Interviews"],
    },
    {
      organization: "GirlScript Summer of Code (GSSoC)",
      role: "Campus Ambassador & Open-Source Contributor",
      period: "Jun 2025 – Aug 2025",
      description:
        "Actively reviewed pull requests, resolved open issues across public repositories, and evangelized collaborative open-source practices within student communities.",
      metrics: "Issue triage, PR reviews & community outreach",
      tags: ["Git / GitHub", "PR Review", "Open Source Evangelism"],
    },
    {
      organization: "IEEE WIE (Women in Engineering), MUJ",
      role: "Head of Technical Projects",
      period: "Sept 2024 – May 2025",
      description:
        "Led engineering projects and modernized the IEEE WIE technical web presence, scaling monthly visitor traffic to 500+. Spearheaded 20+ hands-on technical workshops for over 200 students.",
      metrics: "500+ monthly visitors • 20+ workshops • 200+ students",
      tags: ["Technical Leadership", "Web Traffic (500+/mo)", "Workshops"],
    },
    {
      organization: "IEEE Student Branch, MUJ",
      role: "Genesis Core Committee Member",
      period: "Jul 2024 – Oct 2024",
      description:
        "Organized 10+ flagship technical events engaging 2,000+ participants. Coordinated a volunteer force of 60+ students, delivering 30% year-over-year participant growth.",
      metrics: "2,000+ attendees • 10+ flagship events • 30% YoY growth",
      tags: ["Large-Scale Operations", "2,000+ Attendees", "Event Management"],
    },
  ] as LeadershipItem[],

  achievements: [
    {
      title: "Student Excellence Award (Two-Time Recipient)",
      organization: "Manipal University Jaipur",
      description:
        "Conferred twice by university administration in recognition of outstanding academic consistency and high-impact extracurricular leadership.",
      badge: "Honors",
    },
    {
      title: "Hackathon Finalist (MUJ HackX 2024 & Woodpecker Hackathon)",
      organization: "MUJ & National Competitions",
      description:
        "Qualified as a national finalist across multiple high-stakes hackathons, prototyping full-stack and AI-driven client solutions within 24-hour sprints.",
      badge: "Finalist",
    },
    {
      title: "International Innovation Challenge Finalist",
      organization: "Global Innovation Conclave",
      description:
        "Selected as a global finalist for novel algorithmic and software design addressing cross-border workflow automation.",
      badge: "Finalist",
    },
    {
      title: "Special Mention — Apotheosis Hackathon",
      organization: "IEEE WIE",
      description:
        "Recognized by IEEE Women in Engineering for architectural excellence and technical ingenuity in prototype engineering.",
      badge: "Special Mention",
    },
    {
      title: "250+ Algorithmic Problems Solved on LeetCode",
      organization: "LeetCode",
      description:
        "Demonstrated rigorous proficiency across dynamic programming, graph traversal, trees, and algorithmic optimization.",
      badge: "Competitive Coding",
    },
  ],

  certifications: [
    { issuer: "Cisco", title: "CCNA (Cisco Certified Network Associate)", category: "Networking" },
    { issuer: "Cisco", title: "Python Essentials", category: "Programming" },
    { issuer: "Cisco", title: "Networking Essentials", category: "Infrastructure" },
    { issuer: "Oracle", title: "Database Foundations", category: "Database Systems" },
    { issuer: "Oracle", title: "Database Design", category: "Relational Modeling" },
    { issuer: "Oracle", title: "SQL Programming", category: "Data Manipulation" },
    { issuer: "NPTEL", title: "Deep Learning", category: "Machine Learning" },
    { issuer: "NPTEL", title: "Machine Learning", category: "Applied AI" },
    { issuer: "NPTEL", title: "Data Structures & Algorithms", category: "Computer Science Core" },
    { issuer: "CodeChef", title: "DSA Lab Certification", category: "Algorithmic Efficiency" },
  ] as CertificationItem[],
};
