import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Kimberly O'Neill - Python & Java Developer",
  description: 'Backend/full-stack portfolio - Python, Java, and API-driven engineering',
}

export default function PythonJavaLayout({ children }: { children: React.ReactNode }) {
  return children
}
