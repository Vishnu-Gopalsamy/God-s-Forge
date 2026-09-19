import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'

export const metadata = {
  title: "God's Forge — We Forge What's Next",
  description: "God's Forge is a product-focused technology company building intelligent systems for complex real-world problems. AI, cybersecurity, and predictive technologies.",
  openGraph: {
    title: "God's Forge — We Forge What's Next",
    description: "Intelligent products built to solve problems that matter.",
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-white text-slate-900 selection:bg-orange-200 selection:text-orange-900">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
