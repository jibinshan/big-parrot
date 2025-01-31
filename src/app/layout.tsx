import "@/styles/globals.css";
import "@/styles/ham.css";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import { Inter, Playfair_Display, Cormorant } from "next/font/google";
import Providers from "@/app/Providers";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "BigParrot",
  description: "WELCOME TO CHORLTON TAPAS RESTURANT",
  icons: [{ rel: "icon", url: "/images/logo.png" }],
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400"],
});

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  console.log("layout");
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "theme-custom flex min-h-screen font-inter text-[#FBEAD2] antialiased",
          cormorant.variable,
          playfair.variable,
          inter.variable,
        )}
      >
        <Providers>
          <Navbar position="absolute" />
          {children}
        </Providers>
      </body>
    </html>
  );
}
