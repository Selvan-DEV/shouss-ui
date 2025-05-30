import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/layout/HeaderComponent";
import FooterComponent from "@/components/layout/FooterComponent";
import { Box, Typography } from "@mui/material";
import SubHeaderComponent from "@/components/layout/SubHeaderComponent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "sHouss",
  description: "sHouss Building Design & Construction ",
};

export default function RootLayout({ children }) {

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
          {children}
        </Box>
        <FooterComponent />
      </body>
    </html>
  );
}
