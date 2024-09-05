import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthProvider";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import Providers from "./providers";

export const metadata = {
  title: "SeetulaComments",
  description: "Playground for testing comment threads.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased">
        <Providers>
          <div className="container mx-auto flex flex-col h-screen">
            <Navbar />
            <main className="container mb-auto mx-auto max-w-7xl pt-8 flex-grow">
              {children}
            </main>
            <footer className="h-10 flex justify-center py-3">
              Copyright &copy; 2024 Seetula
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
