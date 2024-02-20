"use client";
import { ArticlesBox } from "@/components/main/articles-box/articles-box";
import { PageTitle } from "@/components/main/page-title/page-title";

export default function Home() {
  return (
    <div>
      <PageTitle />
      <ArticlesBox />
    </div>
  );
}
