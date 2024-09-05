"use client";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import AuthProvider from "./context/AuthProvider";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <Toaster />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </AuthProvider>
  );
}
export default Providers;
