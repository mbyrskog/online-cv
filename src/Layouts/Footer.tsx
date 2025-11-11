import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";

export const Footer = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 5,
        }}
      >
        <Box>
          <Box sx={{ display: "flex", gap: 5 }}>
            <IconButton
              href="https://www.linkedin.com/in/michaelbyrskog/"
              target="_blank"
              color="inherit"
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              href="https://github.com/mbyrskog"
              target="_blank"
              color="inherit"
            >
              <GitHub />
            </IconButton>
            <IconButton href="mailto:mbyrskog@hotmail.com" color="inherit">
              <Mail />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
