'use client'

import { useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi"
import ProjectsCarousel from '../../components/ProjectsCarousel'

export default function PythonJavaPortfolio() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const workHistory = [
    {
      title: "Senior Software Engineer",
      company: "Reliance Matrix",
      period: "June 2025 - Present",
      description: "Backend Developer",
      highlights: [
        "Designed and built object-oriented backend services (Java, Python) and REST integrations for a national insurance provider's claims, member services, and payments systems.",
        "Built a Member Hub service (Java, REST, React) to unify identity, deduplicate records, and securely transmit payment data to a downstream banking partner.",
        "Developed integration logic to process and classify documents via REST, applying structured metadata and business rules.",
        "Architected an LLM-powered analytics platform natively within Salesforce, integrating AWS Bedrock to perform real-time sentiment, risk, and category classification.",
        "Maintained and extended enterprise applications (TypeScript, Java, Python) through feature development, bug fixes, refactoring, and technology upgrades.",
        "Directed a development team delivering an automation initiative end-to-end, including code review and release standards.",
        "Implemented CI/CD pipeline using GitHub workflows to automate releases across dev, QA, UAT, and Production.",
        "Leveraged Claude and GitHub Copilot to accelerate development velocity, using AI pair-programming for code generation, debugging, and refactoring across Python and Salesforce codebases."
      ],
      techstack: [
        "Java", "Python", "TypeScript", "React", "REST API", "AWS Bedrock", "CI/CD", "GitHub", "Git"
      ]
    },
    {
      title: "Senior Software Developer",
      company: "Macquarie",
      period: "Aug 2021 - June 2025",
      description: "Backend Developer",
      highlights: [
        "Wrote object-oriented backend logic (Java, Python) and components across six enterprise systems supporting public and private markets.",
        "Built a data integration pipeline (Python, AWS, Docker) to import and reconcile product data across environments, eliminating 30+ hours of manual work monthly.",
        "Developed visual reporting components using JavaScript and HTML.",
        "Led modernization of a legacy platform, replacing manual workflows with modular, reusable backend components and creating interactive UIs with React.",
        "Upgraded locally run processes to AWS workflows to transition to horizontally scaling cloud architecture."
      ],
      techstack: [
        "Java", "Python", "AWS", "Docker", "JavaScript", "React"
      ]
    },
    {
      title: "Apprentice Developer",
      company: "Shippensburg University",
      period: "Oct 2017 - May 2018",
      description: "Built responsive web interfaces and contributed to backend services",
      highlights: [
        "Demonstrated strong collaboration skills by actively contributing to a dynamic development team and fostering a productive, cooperative work environment",
        "Participated in rigorous code reviews with senior developers, integrating feedback to enhance code quality, maintainability, and performance",
        "Delivered impactful features and functionality, ensuring alignment with project requirements and timely delivery of high-quality solutions"
      ],
      techstack: [
        "Ruby on Rails", "Git"
      ]
    }
  ]

  const projects = [
    {
      title: "AI Issue Triage",
      description: "Classifies inbound issues with an LLM, flags likely duplicates, routes them to the right team, and escalates the ones that have blown past their SLA",
      repo: "https://github.com/kimberlyo31/ai-issue-triage",
      techstack: ["Python", "AI/LLM", "Anthropic"]
    },
    {
      title: "SpaceTraders",
      description: "Built an app using the Space Traders API to explore the game mechanics, mastering API requests, and practice handling data",
      repo: "https://github.com/kimberlyo31/SpaceTraders",
      techstack: ["Python", "REST API", "Next.js"]
    },
    {
      title: "Salesforce Document Exporter",
      description: "Developed an attachment exporter that processes a list of Salesforce account IDs, retrieves all employee documents, stores in database, and downloads them into a structured ZIP archive",
      repo: "https://github.com/kimberlyo31/salesforce-document-exporter",
      techstack: ["Python", "sqlite", "Salesforce API"]
    },
    {
      title: "sf toolkit",
      description: "A personal Salesforce dev toolkit CLI. Wraps the Salesforce CLI (sf) with three quality-of-life commands",
      repo: "https://github.com/kimberlyo31/ai-issue-triage",
      techstack: ["Python"]
    },
    {
      title: "Shippensburg University Media Archive",
      description: "Built an online university media archive and digital yearbook using Ruby on Rails, featuring secure authentication, role-based permissions, and file upload and download capabilities for managing student content.",
      repo: "",
      techstack: ["Ruby on Rails"]
    }
  ]

  return (
    <main className="flex flex-col min-h-screen px-4">
      <div>
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/10 border-b border-white/20">
          <div className="max-w-5xl mx-auto px-6 py-4 flex justify-center">
            <div className="flex gap-8 text-lg font-medium">
              <a href="#home" className="text-slate-200 hover:text-pink-300 transition-colors">Home</a>
              <a href="#about" className="text-slate-200 hover:text-pink-300 transition-colors">About</a>
              <a href="#work" className="text-slate-200 hover:text-pink-300 transition-colors">Experience</a>
              <a href="#projects" className="text-slate-200 hover:text-pink-300 transition-colors">Projects</a>
              <a href="#mystack" className="text-slate-200 hover:text-pink-300 transition-colors">My Stack</a>
              <a href="#contact" className="text-slate-200 hover:text-pink-300 transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </div>
      <section id="home" className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold leading-normal bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
            Hi, I&apos;m Kimberly
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Python & Java Developer | Backend & Full-Stack Engineer
          </p>
        </div>
      </section>
      <section className="py-20 max-w-4xl mx-auto w-full">
        <h2 id="about" className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="space-y-8">
          <p className="text-xl text-slate-300 max-w-4xl text-center mx-auto">
            I&apos;m a backend-leaning software engineer who loves working on finance-driven problems and building systems people can actually trust. I have spent my career in financial services building Python services that move, validate, and process financial and payment data at scale, alongside API integrations and automation that connect enterprise systems together. I enjoy the challenge of regulated environments, making complex workflows feel simple, ensuring data accuracy, and automating the parts that shouldn&apos;t be manual. Whether I&apos;m building APIs, integrating systems, or improving CI/CD and reliability, I&apos;m motivated by the real-world impact of finance and the satisfaction of turning messy requirements into clean, dependable software.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/kimberlyo31" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-pink-400 transition-colors text-2xl">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/kimberly-o-b91625114/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-pink-400 transition-colors text-2xl">
              <FaLinkedinIn />
            </a>
            <a href="/Kimberly_ONeill_Resume_dev.pdf" download className="text-slate-300 hover:text-pink-400 transition-colors text-2xl">
              <FaFileDownload />
            </a>
          </div>
        </div>
      </section>
      <section className="py-20 max-w-4xl mx-auto w-full">
        <h2 id="work" className="text-4xl font-bold leading-normal mb-12 text-center bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
          Work History
        </h2>

        <div className="space-y-8">
          {workHistory.map((job, index) => (
            <div key={index} className="parallax-card rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 hover:border-pink-400/50 transition-colors overflow-hidden shadow-lg ">
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full p-6 text-left hover:bg-white/5 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-pink-400">{job.title}</h3>
                    <p className="text-lg text-slate-400">{job.company}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-2 sm:mt-0">
                    <p className="text-slate-400">{job.period}</p>
                    <HiChevronDown
                      className={`text-white text-xl transition-transform duration-300 ${expandedIndex === index ? "rotate-180" : ""}`}
                    />
                  </div>
                </div>
              </button>

              {expandedIndex === index && (
                <div className="px-6 pb-6 border-t border-white/20">
                  <p className="text-lg font-bold text-slate-300">Job Description</p>
                  <ul className="space-y-3">
                    {job.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300">
                        <span className="text-pink-400 mt-1 flex-shrink-0">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <p className="text-md font-bold text-slate-300">Skills:</p>
                    {job.techstack.map((tool, i) => (
                      <span key={i} className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/20 text-slate-300 backdrop-blur-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="py-4 max-w-4xl mx-auto w-full">
        <h2 id="education" className="text-4xl font-bold leading-normal mb-12 text-center bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
          Education & Certifications
        </h2>

        <div className="space-y-8">
          <div className="parallax-card rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 hover:border-pink-400/50 transition-colors overflow-hidden shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-pink-400 mb-3">Shippensburg University</h3>
            <p className="text-lg text-slate-300 mb-1">Bachelor of Science in Software Engineering, Minor in Criminal Justice</p>
            <p className="text-slate-400 mb-4">Aug 2017 - May 2021</p>
          </div>
        </div>
      </section>

      <ProjectsCarousel projects={projects} />

      <section className="py-20 max-w-6xl mx-auto w-full">
        <h2 id="mystack" className="text-4xl font-bold leading-normal mb-12 text-center bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
          My Stack
        </h2>

        <div className="space-y-8">
          {[
            { name: "Languages", tools: ["Python", "Java", "Ruby", "JavaScript", "TypeScript"] },
            { name: "Frameworks", tools: ["Node.js", "Express", "React", "Next.js", "Ruby on Rails"] },
            { name: "Data", tools: ["PostgreSQL", "MySQL", "MongoDB", "sqlite"] },
            { name: "Tools", tools: ["Git", "Docker", "REST API", "GraphQL", "Postman", "VS Code"] },
          ].map((section, index) => (
            <div key={index} className="flex flex-wrap justify-center items-center gap-4">
              <h3 className="text-2xl font-semibold text-slate-300 whitespace-nowrap">{section.name}:</h3>
              {section.tools.map((tool, i) => (
                <span key={i} className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/20 text-slate-300 backdrop-blur-sm">
                  {tool}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section id="contact" className="py-20 max-w-4xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
          Contact Me
        </h2>

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-lg max-w-xl mx-auto text-center">
          <p className="text-slate-300 text-lg mb-6">
            Want to connect or work together? You can reach me here:
          </p>

          <div className="text-center space-y-4">
            <div>
              <a href="mailto:kimberlyo3113@gmail.com" className="text-pink-400 hover:text-pink-300 transition-colors text-lg">
                kimberlyo3113@gmail.com
              </a>
            </div>
            <div className="flex justify-center gap-6 text-lg flex-wrap">
              <a href="https://www.linkedin.com/in/kimberly-o-b91625114/" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors">
                LinkedIn
              </a>

              <span className="text-pink-400">|</span>

              <a href="https://github.com/kimberlyo31" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors">
                GitHub
              </a>

              <span className="text-pink-400">|</span>

              <a href="/Kimberly_ONeill_Resume_dev.pdf" download className="text-pink-400 hover:text-pink-300 transition-colors">
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-slate-400 border-t border-slate-700 mt-12">
        <p>&copy; 2025 Kimberly O&apos;Neill</p>
      </footer>
    </main>
  )
}
