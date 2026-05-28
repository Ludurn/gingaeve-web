import "./globals.css";

import NavLayout from "./components/NavLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col justify-center p-4 bg-blue-900 bg-[url('/cloudy.jpg')] bg-cover bg-center">
        <NavLayout>
          <div className="min-w-full min-h-[500px] flex items-center justify-center rounded-sm glass text-blue-800">
            {children}
          </div>
        </NavLayout>
      </body>
    </html>
  );
}
