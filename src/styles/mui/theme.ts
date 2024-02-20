"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#15AA5A", // Headerの背景色
      contrastText: "#f4ffe5", // Headerの文字色
      dark: "#038948", //ホバーした時の色
    },
    secondary: {
      main: "#3c3c3c", // 記事のタイトルに使用
      contrastText: "#505050", // 作成日時の文字色
      light: "#F3F6F8", //カードの背景色
    },
    error: {
      main: "#E57373",
    },
    text: {
      primary: "#282828", // ページタイトルに使用
      secondary: "#ffffff", // 白
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 16,
    h1: {
      fontSize: "3rem",
    },
    h2: {
      fontSize: "2.5rem",
    },
    h3: {
      fontSize: "2rem",
    },
    h4: {
      fontSize: "1.75rem",
    },
    h5: {
      fontSize: "1.5rem",
    },
    h6: {
      fontSize: "1.25rem",
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.875rem",
    },
  },
});
export default theme;
