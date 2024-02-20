"use client";
import { HamburgerMenu } from "@/components/hamburger-menu";
import { AppBar, Toolbar, Typography, useTheme } from "@mui/material";

export const Header = () => {
  const theme = useTheme();
  return (
    // TODO：AppBar を画面幅いっぱいにしたい
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.primary.dark,
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          color={theme.palette.primary.contrastText}
          flexGrow={1}
          sx={{
            fontSize: theme.typography.h3,
            fontWeight: theme.typography.fontWeightBold,
          }}
        >
          TQブログ
        </Typography>
        <HamburgerMenu />
      </Toolbar>
    </AppBar>
  );
};
