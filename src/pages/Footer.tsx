import { Box, Typography } from "@mui/material";

 function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        textAlign: "center",
        backgroundColor: "#ffab91",
        color: "#000",
        mt: "auto",

      }}
    >
      <Typography variant="body2">© Lucy Wanjiru 2025</Typography>
    </Box>
  );
}

export default Footer