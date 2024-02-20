"use client";
import { Button, useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

type ArticleCardProps = {
  title: string;
  content: string;
  created_time: string;
};

export const ArticleCard = ({
  title,
  content,
  created_time,
}: ArticleCardProps) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        mb: 3,
        boxShadow: "0 3px 5px rgba(0,0,0,0.2)",
        backgroundColor: theme.palette.secondary.light,
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          fontWeight={theme.typography.fontWeightBold}
          color={theme.palette.secondary.main}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          color={theme.palette.secondary.contrastText}
        >
          {created_time}
        </Typography>
        <Button
          variant="contained"
          onClick={() => alert(content)}
          color="primary"
          size="small"
        >
          詳細
        </Button>
      </CardContent>
    </Card>
  );
};
