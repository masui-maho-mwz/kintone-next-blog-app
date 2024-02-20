const fetchArticles = async (): Promise<Article[]> => {
  try {
    const response = await fetch("/api/records");
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const records: Article[] = await response.json();
    return records;
  } catch (error) {
    console.error("Failed to fetch records:", error);
    throw error;
  }
};

export default fetchArticles;
