"use client";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";

// TODO: export const だとエラーになる再現して原因を理解する
const HamburgerMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    // TODO: <>でない方が良いかな
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>管理者メニュー</MenuItem>
        <MenuItem onClick={handleClose}>XXXX</MenuItem>
        <MenuItem onClick={handleClose}>YYYY</MenuItem>
        <MenuItem onClick={handleClose}>ZZZZ</MenuItem>
        <MenuItem onClick={handleClose}>ログアウト</MenuItem>
      </Menu>
    </>
  );
};

export default HamburgerMenu;
