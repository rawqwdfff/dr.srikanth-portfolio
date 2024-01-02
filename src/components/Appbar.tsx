// TransparentNavbar.tsx

import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const TransparentNavbar: React.FC = () => {
  const appBarStyle: React.CSSProperties = {
    backgroundColor: "transparent", // Set the background color to transparent
    boxShadow: "none", // Remove the box shadow
  };

  return (
    <AppBar position="static" style={appBarStyle}>
      <Toolbar>
        <Typography
          className="font-sans"
          variant="h6"
          component="div"
          sx={{
            mx: "auto",
            p: 1,
          }}
        >
          Experience
        </Typography>
        <Typography
          className="font-sans"
          variant="h6"
          component="div"
          sx={{
            mx: "auto",
            p: 1,
          }}
        >
          Research
        </Typography>
        <Typography
          className="font-sans"
          variant="h6"
          component="div"
          sx={{
            mx: "auto",
            p: 1,
          }}
        >
          Projects
        </Typography>
        <Typography
          className="font-sans"
          variant="h6"
          component="div"
          sx={{
            mx: "auto",
            p: 1,
          }}
        >
          Publications
        </Typography>
        <Typography
          className="font-sans"
          variant="h6"
          component="div"
          sx={{
            mx: "auto",
            p: 1,
          }}
        >
          People
        </Typography>
        <Typography
          className="font-sans"
          variant="h6"
          component="div"
          sx={{
            mx: "auto",
            p: 1,
          }}
        >
          Collaborations
        </Typography>
        <Typography
          className="font-sans"
          variant="h6"
          component="div"
          sx={{
            mx: "auto",
            p: 1,
          }}
        >
          Lab Tours
        </Typography>
        <Typography
          className="font-sans"
          variant="h6"
          component="div"
          sx={{
            mx: "auto",
            p: 1,
          }}
        >
          Hobbies
        </Typography>
        <Typography
          className="font-sans"
          variant="h6"
          component="div"
          sx={{
            mx: "auto",
            p: 1,
          }}
        >
          Blog
        </Typography>
        <Typography
          className="font-sans"
          variant="h6"
          component="div"
          sx={{
            mx: "auto",
            p: 1,
          }}
        >
          Contact
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TransparentNavbar;
