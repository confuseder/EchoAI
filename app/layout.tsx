import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EchoAI",
  description: "Begin your learning journey with EchoAI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
