import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MediMeet - Doctors Appointment App",
  description: "Connect with doctors anytime, anywhere",
};


export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark, }}>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange>
            {/* Header */}
            <Header />

            <main className="min-h-screen">{children}</main>

            <Toaster richColors />

            {/* Footer  */}
            <footer className="bg-muted/50 py-12 backdrop-blur-sm">
              <div className="container mx-auto px-4 text-center text-gray-200">
                {/* Brand */}
                <a href="#" aria-label="Brand" className="text-xl font-semibold text-white">
                  Akash M
                </a>
                {/* Description */}
                <p className="mb-2 text-gray-300">© Copyright reserved by Akash M.</p>

                {/* Social Links */}
                <div className="space-x-4 flex justify-center">
                  <a href="https://github.com/akash7807" target="_blank" className="text-gray-400 hover:bg-emerald-600/30 p-2 rounded-full focus:outline-none">
                    Github
                  </a>
                  <a href="https://akash--dev.web.app/" target="_blank" className="text-gray-400 hover:bg-emerald-600/30 p-2 rounded-full focus:outline-none">
                    Portfolio
                  </a>
                  <a href="https://www.linkedin.com/in/akash7807/" target="_blank" className="text-gray-400 hover:bg-emerald-600/30 p-2 rounded-full focus:outline-none">
                    Linkedin
                  </a>
                </div>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
