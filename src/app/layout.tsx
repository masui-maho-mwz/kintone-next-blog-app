import HamburgerMenu from "@/components/hamburger-menu";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import * as React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#04AA5A",
            boxShadow: "none",
            color: "#FFFFFF",
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "#FFFFFF", fontSize: "35px" }}
            >
              TQブログ
            </Typography>
            <HamburgerMenu />
          </Toolbar>
        </AppBar>
        <main
          className={`${inter.className} main-content`}
          style={{ width: "100%", maxWidth: "1200px", padding: "0 120px" }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
