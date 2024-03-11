import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { NextAuthProvider } from "./Providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "TNRB | Hlavní stránka",
  description:
    "web for starting musci group named Taková normální rodinka band",
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body className={poppins.className}>
        <NextAuthProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </NextAuthProvider>
      </body>
    </html>
  );
}
