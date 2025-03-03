import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Portfolio",
  description: "UI/UX Designer Portfolio",
}

export default function RootLayout({
  children
}) {
  return (
    (<html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>)
  );
}

