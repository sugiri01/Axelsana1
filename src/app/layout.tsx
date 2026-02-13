import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "The future of enterprise learning | AI-Powered LMS | Sana Learn",
  description: "Say goodbye to fragmented learning tools. Sana Learn is the only platform designed to move you beyond one-size-fits-all content to a truly dynamic, personalized learning experience at scale.",
  icons: {
    icon: "https://ext.same-assets.com/2498465380/248431436.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://ext.same-assets.com" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
