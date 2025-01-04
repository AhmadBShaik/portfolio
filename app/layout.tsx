import Header from "@/components/header"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Footer from "@/components/footer"
import { SectionContextProvider } from "@/context/sectionContext"
import { RotationMultiplierContextProvider } from "@/context/rotationContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ahmad Basha Shaik | Full-Stack Developer & Front-End Specialist",
  description:
    "Skilled Full-Stack Developer with a strong focus on creating seamless and engaging front-end user experiences. Passionate about crafting responsive, high-performance web applications using modern technologies.",
  keywords: [
    "IT Professional",
    "Frontend Developer",
    "Frontend Engineer",
    "Backend Developer",
    "Backend Engineer",
    "Fullstack Developer",
    "Fullstack Engineer",
    "Software Developer",
    "Software Engineer",
    "Remote Developer",
    "Remote",
    "Professional Software Developer",
    "Web Development Expert",
    "JavaScript Specialist",
    "TypeScript Specialist",
    "UI/UX Developer",
    "Responsive Web Design",
    "Web Application Developer",
    "Ahmad",
    "Ahmad Shaik",
    "Ahmad Basha",
    "Ahmad Basha Shaik",
    "AhmadBShaik"
  ],
  authors: [{ name: "Ahmad Basha Shaik (AKA AhmadBShaik)", url: "https://ahmadbshaik.com" }],
  openGraph: {
    title: "Ahmad Basha Shaik | IT Professional",
    description:
      "Skilled Full-Stack Developer with a strong focus on creating seamless and engaging front-end user experiences. Passionate about crafting responsive, high-performance web applications using modern technologies.",
    url: "https://ahmadbshaik.com",
    siteName: "AhmadBShaik | Portfolio",
    images: [
      {
        url: "/website-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "AhmadBShaik | Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <SectionContextProvider>
        <RotationMultiplierContextProvider>
          <body className={`min-h-screen flex flex-col ${inter.className}`}>
            <Header />
            <main className="flex-1 mt-16 sm:mt-20">{children}</main>
            <Footer />
          </body>
        </RotationMultiplierContextProvider>
      </SectionContextProvider>
    </html>
  )
}
