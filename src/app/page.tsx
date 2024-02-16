"use client";
import ArticleCard from "@/components/article-card";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

type Article = {
  title: string;
  content: string;
};

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    const loadRecords = async () => {
      try {
        const response = await fetch("/api/records");
        if (!response.ok) {
          throw new Error(`API call failed with status: ${response.status}`);
        }
        const records = await response.json();
        setArticles(records);
      } catch (error) {
        console.error("Failed to fetch records:", error);
      }
    };

    loadRecords();
  }, []);

  return (
    <div className="container">
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", margin: "2rem 0", color: "#3F3D56" }}
      >
        記事一覧
      </Typography>
      <div className="cards-container">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            content={article.content}
          />
        ))}
      </div>
    </div>
  );
}
