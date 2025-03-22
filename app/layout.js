import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Muhammad Rehan Ali | Full-Stack Developer",
  description:
    "Experienced Full-Stack Developer specializing in MERN stack, Next.js, and SaaS applications. Passionate about building scalable web solutions.",
  keywords: [
    "Full-Stack Developer",
    "MERN Stack",
    "Next.js",
    "React",
    "Node.js",
    "Firebase",
    "SaaS",
    "Web Development",
  ],
  author: "Muhammad Rehan Ali",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
