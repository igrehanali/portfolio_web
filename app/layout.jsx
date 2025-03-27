import { Inter } from "next/font/google";
import "./globals.css";
import AnimatedCursor from "react-animated-cursor";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
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
  author: "John Doe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
      <script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "61ca9397f8a54816b4d7c48875d85ea3"}'
      ></script>
    </html>
  );
}
