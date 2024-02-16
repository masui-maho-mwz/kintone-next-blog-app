import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";

type ArticleCardProps = {
  title: string;
  content: string;
};

const ArticleCard: React.FC<ArticleCardProps> = ({ title, content }) => {
  return (
    <Card sx={{ marginBottom: 3, boxShadow: "0 3px 5px rgba(0,0,0,0.2)" }}>
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{ marginBottom: 1, fontWeight: "bold", color: "#044D40" }}
        >
          {title}
        </Typography>
        <Typography variant="body1" sx={{ color: "#666" }}>
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
