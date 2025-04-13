import type { Metadata } from "next";
import "./globals.css";
import { CounterClockwiseClockIcon, GearIcon, PersonIcon } from "@radix-ui/react-icons";

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
        <div className="w-screen h-screen max-w-screen max-h-screen min-w-screen min-h-screen">
          <div className="w-full h-full flex flex-row p-3">
            <div className="h-full w-16 flex flex-col justify-between p-3">
              <div>
                <CounterClockwiseClockIcon className="w-5 h-5 hover:cursor-pointer hover:text-gray-500" />
              </div>
              <div className="flex flex-col gap-6 mt-auto">
                <GearIcon className="w-5 h-5 hover:cursor-pointer hover:text-gray-500" />
                <PersonIcon className="w-5 h-5 hover:cursor-pointer hover:text-gray-500" />
              </div>
            </div>
            <div className="flex p-1 w-full h-full">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
