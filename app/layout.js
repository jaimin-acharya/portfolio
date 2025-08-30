import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsmono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["500"], // pick the weights you need
  display: "swap",
});

export const metadata = {
  title: "Jaimin Acharya – Portfolio",
  description: "Minimal portfolio built with Next.js",
  openGraph: {
    title: "Jaimin Acharya – Portfolio",
    description: "Minimal portfolio built with Next.js",
    url: "https://jaiminacharya.vercel.app",
    siteName: "Jaimin Acharya",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaimin Acharya – Portfolio",
    description: "Minimal portfolio built with Next.js",
    image: "https://jaiminacharya.vercel.app/og.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsmono.variable} antialiased`}
      >
        <div className="relative">
          {/* Grid Background */}
          <div className="pointer-events-none fixed inset-0 -z-10 bg-grid" />

          {/* Radial Overlay */}
          <div className="pointer-events-none fixed inset-0 -z-10 [background:radial-gradient(600px_200px_at_50%_0%,color-mix(in_oklab,theme(colors.foreground)_15%,transparent),transparent_60%)]" />

          {/* Central Content Area */}
          <div
            className="
          pointer-events-none fixed inset-y-0 left-1/2 -translate-x-1/2 -z-10 
          w-full max-w-4xl px-4 sm:px-6 md:px-8 
          bg-background
        "
          />
     
          {/* Main content */}
          <main className="relative z-10 px-2">
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
            </ThemeProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
