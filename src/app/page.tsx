"use client";
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
      <h1>作成した記事の一覧</h1>
      {articles.map((article, index) => (
        <div key={index} className="articleList">
          <h3 className="articleTitle">{article.title}</h3>
          <div className="articleContent">{article.content}</div>
        </div>
      ))}
    </div>
  );
}
