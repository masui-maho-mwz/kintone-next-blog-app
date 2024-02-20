"use client";
import { ArticlesBox } from "@/components/main/articles-box/articles-box";
import { PageTitle } from "@/components/main/page-title/page-title";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";

export const Main = () => {
  const theme = useTheme();
  return (
    <Box component="main" mt={3} px={8} width={1} maxWidth={1200}>
      <PageTitle />
      <ArticlesBox />
    </Box>
  );
};
