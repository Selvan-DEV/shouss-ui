"use client";

import "./globals.css";
import HeaderComponent from "@/components/layout/HeaderComponent";
import FooterComponent from "@/components/layout/FooterComponent";
import { Box, ThemeProvider } from "@mui/material";
import SubHeaderComponent from "@/components/layout/SubHeaderComponent";
import { AnimatePresence, motion } from "motion/react"
import { usePathname } from "next/navigation";
import { Inter, Inter_Tight } from 'next/font/google';
import theme from "@/utils/Theme";
import WhatsAppFloatButton from "@/components/whats-app-button/WhatsAppFloatButton";

const interRegular = Inter({
  subsets: ['latin'],
  weight: '400', // Regular
  variable: '--font-inter',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: '400', // You can also use '300', '500', etc.
  variable: '--font-inter-tight',
});

export default function RootLayout({ children }) {
  const pathName = usePathname();

  return (
    <html lang="en" className={`${interRegular.variable} ${interTight.variable}`}>
      <body>
        <ThemeProvider theme={theme}>
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
                <WhatsAppFloatButton />
              </motion.div>
            </AnimatePresence>
          </Box>
          <FooterComponent />
        </ThemeProvider>
      </body>
    </html>
  );
}
