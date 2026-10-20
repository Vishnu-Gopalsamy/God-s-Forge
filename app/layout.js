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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800&family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var userExplicit = localStorage.getItem('theme-user-set');
                  var saved = localStorage.getItem('theme');
                  var isMobile = window.matchMedia('(max-width: 767px)').matches;
                  var activeTheme;

                  if (userExplicit && saved) {
                    activeTheme = saved;
                  } else {
                    activeTheme = isMobile ? 'dark' : 'light';
                    localStorage.setItem('theme', activeTheme);
                  }

                  var root = document.documentElement;
                  root.classList.remove('light', 'dark');
                  root.classList.add(activeTheme);
                  root.style.colorScheme = activeTheme;
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased bg-white dark:bg-[#060911] text-slate-900 dark:text-slate-100 selection:bg-orange-200 selection:text-orange-900">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
