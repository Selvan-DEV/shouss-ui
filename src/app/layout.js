"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/layout/HeaderComponent";
import FooterComponent from "@/components/layout/FooterComponent";
import { Box } from "@mui/material";
import SubHeaderComponent from "@/components/layout/SubHeaderComponent";
import { AnimatePresence, motion } from "motion/react"
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathName = usePathname();

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Box>
          <HeaderComponent />
          <SubHeaderComponent />
        </Box>
        <Box
          sx={{
            minHeight: "100vh",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div key={pathName}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </Box>
        <FooterComponent />
      </body>
    </html>
  );
}
