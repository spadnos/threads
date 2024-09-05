import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Providers from "./providers";

export const metadata = {
  title: "SeetulaThreads",
  description: "Playground for testing comment threads.",
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="container mx-auto flex flex-col h-screen">
            <Navbar />
            <main className="container mb-auto mx-auto pt-8">{children}</main>
            <footer className="h-10 flex justify-center py-3">
              Copyright &copy; 2024 Seetula
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
