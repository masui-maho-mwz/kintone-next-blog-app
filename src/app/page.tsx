"use client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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
        作成した記事の一覧
      </Typography>
      {articles.map((article, index) => (
        <Card
          key={index}
          sx={{ marginBottom: 3, boxShadow: "0 3px 5px rgba(0,0,0,0.2)" }}
        >
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              sx={{ marginBottom: 1, fontWeight: "bold", color: "#044D40" }}
            >
              {article.title}
            </Typography>
            <Typography variant="body1" sx={{ color: "#666" }}>
              {article.content}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
