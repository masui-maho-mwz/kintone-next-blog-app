"use client";

import { ArticleCard } from "@/components/article-card";
import useArticles from "@/hooks/use-articles";
import { Box, useTheme } from "@mui/material";

export const ArticlesBox = () => {
  const articles = useArticles();
  const theme = useTheme();
  return (
    <Box
      gap={theme.spacing(2)}
      m={theme.spacing(0, 3)}
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        },
      }}
    >
      {articles.map((article, index) => (
        <ArticleCard
          key={index}
          title={article.title}
          // contentは詳細画面に表示させる。
          content={article.content}
          created_time={article.created_time}
        />
      ))}
    </Box>
  );
};
