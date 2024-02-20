import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const app = process.env.NEXT_PUBLIC_KINTONE_APP_ID;
  const apiToken = process.env.NEXT_PUBLIC_KINTONE_API_TOKEN;
  const baseUrl = process.env.NEXT_PUBLIC_KINTONE_API_BASE_URL;

  if (!apiToken)
    return res.status(500).json({ message: "APIトークンが設定されていません" });
  try {
    const kintoneResponse = await fetch(
      `${baseUrl}/k/v1/records.json?app=${app}`,
      {
        headers: {
          "X-Cybozu-API-Token": apiToken,
        },
      }
    );

    if (!kintoneResponse.ok) {
      throw new Error(`API call failed with status: ${kintoneResponse.status}`);
    }

    const data = await kintoneResponse.json();

    type KintoneRecord = {
      title: { value: string };
      content: { value: string };
      作成日時: { value: string };
    };

    const articles = data.records.map((record: KintoneRecord) => ({
      title: record.title.value,
      content: record.content.value,
      created_time: record["作成日時"].value.split("T")[0],
    }));
    res.status(200).json(articles);
  } catch (error) {
    console.error("Error fetching Kintone records:", error);
    res.status(500).json({ message: "Kintoneレコードの取得に失敗しました" });
  }
}
