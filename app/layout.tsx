import "./globals.css";
import { Ubuntu } from "next/font/google";

import GlassLayout from "./components/GlassLayout";

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-ubuntu',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${ubuntu.variable}`}
    >
      <body className="min-h-full flex flex-col justify-center p-4 bg-blue-900 bg-[url('/cloudy.jpg')] bg-cover bg-center">
        <GlassLayout>
          <div className="w-full min-h-[500px] flex items-center justify-center rounded-sm glass text-blue-800">
            {children}
          </div>
        </GlassLayout>
      </body>
    </html>
  );
}
