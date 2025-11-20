import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kimberly - Portfolio',
  description: 'Welcome to my portfolio',
}
 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-white min-h-screen">
        
        {/* FIXED BACKGROUND */}
        <div className="background-fixed fixed inset-0 -z-20" />

        {/* FIXED SHAPES (CAN use perspective) */}
        <div className="geometric-overlay fixed inset-0 -z-10 pointer-events-none">
          <div className="geometric-shape shape-1"></div>
          <div className="geometric-shape shape-2"></div>
          <div className="geometric-shape shape-3"></div>
          <div className="geometric-shape shape-4"></div>
          <div className="geometric-shape shape-5"></div>
          <div className="geometric-shape shape-6"></div>
        </div>

        {children}
      </body>
    </html>
  )
}
