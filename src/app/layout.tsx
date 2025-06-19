import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Website Portfolio - Maulana Zahiri",
  description:
    "AI Engineer | UI/UX Designer | iOS Developer - Personal portfolio showcasing projects and experience",
  keywords: [
    "AI Engineer",
    "UI/UX Designer",
    "iOS Developer",
    "Portfolio",
    "Web Development",
  ],
  authors: [{ name: "Maulana Ahmad Zahiri" }],
  creator: "Maulana Ahmad Zahiri",
  openGraph: {
    title: "Maulana Ahmad Zahiri - Portfolio",
    description:
      "AI Engineer | UI/UX Designer | iOS Developer - Personal portfolio showcasing projects and experience",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maulana Ahmad Zahiri - Portfolio",
    description:
      "AI Engineer | UI/UX Designer | iOS Developer - Personal portfolio showcasing projects and experience",
  },
  icons: { icon: "/img/yolooaster.png", apple: "/img/yolooaster.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className={geistSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
