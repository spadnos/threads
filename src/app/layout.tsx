import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthProvider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        <AuthProvider>
          <div className="container mx-auto flex flex-col h-screen">
            <Navbar />
            <main className="container mb-auto mx-auto max-w-7xl pt-8 px-6 flex-grow">
              {children}
            </main>
            <footer className="h-10 flex justify-center py-3">
              Copyright &copy; 2024 Seetula
            </footer>

            <Toaster />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
