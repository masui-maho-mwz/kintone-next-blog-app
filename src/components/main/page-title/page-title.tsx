"use client";

import { Typography, useTheme } from "@mui/material";

export const PageTitle = () => {
  const theme = useTheme();
  return (
    <Typography
      variant="h4"
      sx={{
        fontWeight: "bold",
        color: theme.palette.text.primary,
        m: theme.spacing(4, 0),
      }}
    >
      記事一覧
    </Typography>
  );
};
