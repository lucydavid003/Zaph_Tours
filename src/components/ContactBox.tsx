import { Box, colors, Typography } from "@mui/material";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  subtitle: string;
}


const ContactBox = ({ children, title, subtitle }: Props) => {
  return (
    <Box display="flex" alignItems="start" mb={4}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        height={40}
        width={40}
        borderRadius={2}
        bgcolor={colors.blue["50"]}
        color={colors.blue["600"]}
      >
        <Box flexShrink={0}>

        {children}
        </Box>
      </Box>
      <Box ml={4}>
        <Typography fontWeight={"bold"}>
          {title}
        </Typography>
        <Typography mt={1} variant="body1" fontSize={"small"} color={colors.grey["900"]}>{subtitle}</Typography>
      </Box>
    </Box>
  );
};

export default ContactBox;
