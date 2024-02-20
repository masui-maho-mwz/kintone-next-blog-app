"use clent";
import { useEffect, useState } from "react";
import fetchArticles from "../api/fetch-articles";

export default function useArticles() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const loadRecords = async () => {
      try {
        const records = await fetchArticles();
        setArticles(records);
      } catch (error) {
        console.error("Failed to fetch records:", error);
      }
    };

    loadRecords();
  }, []);

  return articles;
}
