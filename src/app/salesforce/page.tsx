'use client'

import { useState } from 'react'
import { FaCloud, FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi"
import ProjectsCarousel from '../../components/ProjectsCarousel'

export default function SalesforcePortfolio() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const workHistory = [
    {
      title: "Developer/Analyst Sr.",
      company: "Reliance Matrix",
      period: "June 2025 - Present",
      description: "Salesforce Developer",
      highlights: [
        "Led the move from traditional Salesforce Change Sets to a full CI/CD pipeline by designing custom Azure DevOps YAML workflows that automated deployments across dev, QA, UAT, and production, making releases faster, safer, and far more reliable.",
        "Built a Salesforce Member Hub to ensure accurate claimant identification, prevent duplicate payments, and support secure end-to-end payment processing with Citi.",
        "Provided technical leadership on an Email-to-Case automation initiative by reviewing Apex logic, guiding architectural decisions, and overseeing production deployment to ensure stability and maintainability.",
        "Partnered with stakeholders to translate business requirements into robust Salesforce solutions, emphasizing observability, error handling, and long-term scalability."
      ],
      techstack: [
        "Salesforce", "Apex", "Azure DevOps", "YAML", "Git", "REST API"
      ]
    },
    {
      title: "Senior Associate (Salesforce Developer)",
      company: "Macquarie",
      period: "Aug 2021 - June 2025",
      description: "Salesforce Developer and Admin",
      highlights: [
        "Built production-grade Apex services and Lightning Web Components using JavaScript to deliver scalable, high-performance features to support Sales and Service teams within a large-scale financial services platform.",
        "Managed and streamlined CI/CD processes by overseeing sprint-end releases, enhancing automated pipelines, and maintaining Git-based version control practices.",
        "Administered multiple Salesforce orgs supporting asset management and capital markets functions to maintain strong governance and internal controls.",
        "Led the modernization of a legacy Salesforce org to OmniStudio, migrating existing automation and implementing OmniScripts, DataRaptors, and Integration Procedures to support scalable, compliant financial workflows."
      ],
      techstack: [
        "Salesforce", "Apex", "LWC", "OmniStudio", "Bamboo", "Git"
      ]
    },
    {
      title: "Resident Assistant",
      company: "Shippensburg University",
      period: "Aug 2019 - May 2021",
      description: "Leadership and administration",
      highlights: [
        "Advocated for resident needs and implemented improvements, developing leadership, communication, and conflict resolution skills",
        "Performed administrative duties such as budgeting, maintenance requests and incident reports",
        "Acted as a first responder during emergency situations to support students"
      ],
      techstack: [
        "Leadership", "Communication", "Administrative Functions"
      ]
    },
  ]

  const projects = [
    {
      title: "Salesforce Member Hub",
      description: "A Salesforce platform with REST API integrations to ensure accurate claimant identification, prevent duplicate payments, and support secure end-to-end payment processing.",
      repo: "",
      techstack: ["Salesforce", "Apex", "REST API"]
    },
    {
      title: "OmniStudio Org Modernization",
      description: "Led the migration of a legacy Salesforce org to OmniStudio, implementing OmniScripts, DataRaptors, and Integration Procedures to support scalable, compliant financial workflows.",
      repo: "",
      techstack: ["Salesforce", "OmniStudio", "Apex"]
    },
    {
      title: "Attachment Exporter",
      description: "Developed an attachment exporter that processes a list of Salesforce account IDs, retrieves all employee documents, stores in database, and downloads them into a structured ZIP archive",
      repo: "",
      techstack: ["Salesforce API", "Python", "sqlite"]
    },
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
            Salesforce Developer | Certified Platform Developer I
          </p>
        </div>
      </section>
      <section className="py-20 max-w-4xl mx-auto w-full">
        <h2 id="about" className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="space-y-8">
          <p className="text-xl text-slate-300 max-w-4xl text-center mx-auto">
            I&apos;m a Salesforce Developer with a background in financial services, specializing in building and maintaining scalable Salesforce platforms &mdash; from custom Apex services and Lightning Web Components to OmniStudio implementations and CI/CD-driven release processes. I care about strong governance, clean architecture, and turning complex business requirements into reliable, compliant automation. I&apos;m a Salesforce Certified Platform Developer I and an active Trailblazer.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/kimberlyo31" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-pink-400 transition-colors text-2xl">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/kimberly-o-b91625114/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-pink-400 transition-colors text-2xl">
              <FaLinkedinIn />
            </a>
            <a href="/Kimberly_ONeill_Resume_sf.pdf" download className="text-slate-300 hover:text-pink-400 transition-colors text-2xl">
              <FaFileDownload />
            </a>
            <a href="https://www.salesforce.com/trailblazer/kimberlyo31" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-pink-400 transition-colors text-2xl">
              <FaCloud />
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

            <h3 className="text-2xl font-semibold text-pink-400 mb-3">Certifications</h3>
            <p className="text-slate-300 text-lg">
              Salesforce Platform Developer I
            </p>
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
            { name: "Salesforce Platform", tools: ["Apex", "LWC", "OmniStudio", "Flow", "SOQL/SOSL"] },
            { name: "DevOps & Release", tools: ["Azure DevOps", "Bamboo", "CI/CD", "Change Sets", "Git"] },
            { name: "Integration", tools: ["REST API", "Postman"] },
            { name: "Tools", tools: ["Data Loader", "VS Code"] },
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

              <a href="/Kimberly_ONeill_Resume_sf.pdf" download className="text-pink-400 hover:text-pink-300 transition-colors">
                Resume
              </a>
              <a href="https://www.salesforce.com/trailblazer/kimberlyo31" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors">
                Trailhead
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
