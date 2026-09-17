import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Kimberly O'Neill - Salesforce Developer",
  description: 'Salesforce Developer portfolio - Apex, LWC, OmniStudio, and CI/CD in financial services',
}

export default function SalesforceLayout({ children }: { children: React.ReactNode }) {
  return children
}
