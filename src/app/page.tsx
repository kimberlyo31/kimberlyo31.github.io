'use client'

import { useState } from 'react'
import { useEffect } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";

export default function Home() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const workHistory = [
    {
      title: "Salesforce Developer/Analyst Sr.",
      company: "Reliance Matrix",
      period: "June 2025 - Present",
      description: "Leading development of full-stack applications using React and Node.js",
      highlights: [
        "Led the full transition from Salesforce Change Sets to a CI/CD pipeline, designing and implementing custom YAML-based Azure DevOps workflows that automated deployments across dev, QA, UAT, and production environments",
        "Built and maintained Git-based branching and release strategies, training and supporting developers to adopt modern version control practices, significantly reducing deployment errors and manual effort",
        "Engineered a major performance improvement for a document download application, reducing runtime from several hours to ~40 minutes through optimized SOQL queries, batch processing, and efficient API utilization",
        "Collaborated on the Salesforce–Ushur integration, contributing to data model alignment, API integration, and automation design to streamline customer communications and case management",
        "Championed DevOps best practices within the Salesforce team, establishing deployment governance standards and reusable pipeline templates for scalable future development"
      ],
      techstack: [
        "Salesforce","Python","Postman","REST API","YAML","Azure DevOps", "Git"
      ]
    },
    {
      title: "Senior Associate (Salesforce Developer)",
      company: "Macquarie",
      period: "Aug 2021 - June 2025",
      description: "Salesforce Developer and Admin",
      highlights: [
        "Designed and implemented a Python-based data integration pipeline to import product data directly into Salesforce, eliminating over 30 hours of manual work monthly and improving data consistency across environments",
        "Developed robust Apex classes, triggers, and Lightning Web Components (LWC) to deliver scalable, high-performance solutions across Sales and Service functions, enhancing user experience and platform efficiency",
        "Directed production support for six Salesforce instances, diagnosing and resolving high-priority issues within a six-hour turnaround, minimizing downtime and maintaining business continuity",
        "Managed and optimized CI/CD processes, overseeing sprint-end releases and ensuring smooth deployments through automated pipelines and Git-based version control practices",
        "Administered multiple Salesforce orgs, including user management, permission sets, security configuration, validation rules, and Flow automation, ensuring system integrity and compliance with internal controls.",
        "Maintained comprehensive documentation for all custom written code, common production support issues, and new joiner information ensuring knowledge transfer and effective collaboration within the team"
      ],
      techstack: [
        "Salesforce","Python","LWC","Apex","Bamboo"
      ]
    },
    {
      title: "Apprentice Developer",
      company: "Shippensburg University",
      period: "Oct 2017 - May 2018",
      description: "Built responsive web interfaces and contributed to backend services",
      highlights: [
        "Showcased ability to work effectively as part of a development team and contribute to a collaborative work environment",
        "Engaged in code reviews with senior developers, providing and incorporating feedback for code improvements",
        "Contributed to the development of new features and functionality, ensuring they met project requirements and were delivered on schedule"
      ],
      techstack: [
        "Ruby on Rails","Git"
      ]
    },
  ]

  const projects = [
    {
      title: "",
      description: "",
      repo: "",
      techstack: []
    }
  ]
  return (
    <main className="flex flex-col min-h-screen px-4">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold leading-normal bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
            Hi, I'm Kimberly
          </h1>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Software Engineer, Admin, Tech Lover
          </p>

          <div className="flex gap-4 justify-center flex-wrap pt-8">
            <button className="px-8 py-3 bg-pink-400 hover:bg-pink-400 rounded-lg font-semibold transition-colors">
              View My Projects
            </button>
            <button className="px-8 py-3 border-2 border-rose-400 hover:bg-rose-400 hover:text-slate-900 rounded-lg font-semibold transition-colors">
              Contact Me
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="space-y-8">
          <p className="text-xl text-slate-300 max-w-4xl mx-auto">
            Hi, I'm Kimberly. I’m a Salesforce Developer with a software engineering background and a focus on building reliable, scalable systems. I love working at the intersection of backend engineering, automation, and user experience—whether that’s designing clean data pipelines, improving development workflows, or building apps that feel intuitive and fast. 
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/kimberlyo31"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-pink-400 transition-colors text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/kimberly-o-b91625114/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-pink-400 transition-colors text-2xl"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="/Resume_KO.pdf"
              download
              className="text-slate-300 hover:text-pink-400 transition-colors text-2xl"
            >
              <FaFileDownload />
            </a>
          </div>
        </div>
      </section>

      {/* Work History Section */}
      <section className="py-20 max-w-4xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
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
                    <span className="text-white text-lg">{expandedIndex === index ? '▼' : '▶'}</span>
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
                    <p className="text-md font-bold text-slate-300">Stack:</p>
                    {job.techstack.map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/20 text-slate-300 backdrop-blur-sm"
                      >
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

      <section className="py-20 max-w-4xl mx-auto w-full">
        <h2 className="text-4xl font-bold leading-normal mb-12 text-center bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
          Projects
        </h2>
      </section>

      <footer className="py-8 text-center text-slate-400 border-t border-slate-700 mt-12">
        <p>&copy; 2025 Kimberly O'Neill. All rights reserved.</p>
      </footer>
    </main>
  )
}

