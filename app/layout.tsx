import Header from "@/components/header"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Footer from "@/components/footer"
import { SectionContextProvider } from "@/context/sectionContext"
import { RotationMultiplierContextProvider } from "@/context/rotationContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ahmad B Shaik | Portfolio",
  description: "Ahmad's personal portfolio website",
}

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
