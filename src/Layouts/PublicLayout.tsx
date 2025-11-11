import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

type PublicLayoutProps = {
  toggleTheme: () => void;
  isDarkMode: boolean;
};

export const PublicLayout = ({
  toggleTheme,
  isDarkMode,
}: PublicLayoutProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Box
        sx={{
          flex: 1,
          maxWidth: "1100px",
          width: "100%",
          padding: 5,
          margin: "auto",
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};
