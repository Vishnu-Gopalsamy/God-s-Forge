import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'

export const metadata = {
  title: "God's Forge — Practical Technology for Everyday Businesses & Farms",
  description: "God's Forge builds high-utility tools for everyday businesses today, funding autonomous robotics and sustainability technology for tomorrow.",
  openGraph: {
    title: "God's Forge — Practical Technology for Everyday Businesses & Farms",
    description: "Building practical software for local businesses and autonomous robotics for the farms that feed them.",
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
