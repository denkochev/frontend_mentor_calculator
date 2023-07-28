import "./globals.css";
import type { Metadata } from "next";
import Providers from "./providers";
import Main from "./containers/Main";

export const metadata: Metadata = {
  title: "Calculator",
  description: "Frontend Mentor Challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&display=swap"
        />
      </head>
      <body
        style={{ fontFamily: "'League Spartan', sans-serif" }}
        className="flex h-screen flex-col items-center justify-center bg-lightBg purple:bg-purpleBg dark:bg-darkBg "
      >
        <Providers>
          <Main />
          {children}
        </Providers>
      </body>
    </html>
  );
}
