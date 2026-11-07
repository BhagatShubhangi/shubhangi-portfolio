import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Shubhangi Bhagat | AI/ML & Full Stack Developer",
  description:
    "Personal portfolio of Shubhangi Bhagat. Final-year Computer Science (AI/ML) undergraduate with software engineering experience across Python, FastAPI, React, PostgreSQL, Celery, and applied machine learning.",
  keywords: [
    "Shubhangi Bhagat",
    "AI/ML Developer",
    "Full Stack Developer",
    "Software Development Intern",
    "FastAPI",
    "React",
    "Python",
    "Machine Learning",
    "Manipal University Jaipur",
  ],
  authors: [{ name: "Shubhangi Bhagat", url: "https://shubhangibhagat.dev" }],
  creator: "Shubhangi Bhagat",
  metadataBase: new URL("https://shubhangibhagat.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shubhangibhagat.dev",
    title: "Shubhangi Bhagat | AI/ML & Full Stack Developer",
    description:
      "Final-year CS (AI/ML) student with backend and machine learning production experience at TruAdaptiv Systems.",
    siteName: "Shubhangi Bhagat Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 1000,
        alt: "Shubhangi Bhagat - AI/ML & Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubhangi Bhagat | AI/ML & Full Stack Developer",
    description:
      "Final-year CS (AI/ML) student with backend and machine learning production experience at TruAdaptiv Systems.",
    images: ["/profile.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f17" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen font-sans bg-[#fcfcfd] dark:bg-[#0b0f17] text-slate-900 dark:text-slate-100 antialiased transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
