import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";

const Footer = () => {
  const { palette } = useTheme();
  return (
    <>
      <Box
        sx={{
          height: "70px",
          bgcolor: palette.secondary.midNightBlue,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="span"
          sx={{ color: palette.text.primary, fontWeight: "500" }}
        >
          Jobify Inc. @ 2024
        </Box>
      </Box>
    </>
  );
};

export default Footer;
