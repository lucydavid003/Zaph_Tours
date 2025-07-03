import { Email, LocationOn, Phone, WhatsApp } from "@mui/icons-material";
import { colors, Paper, Typography } from "@mui/material";
import ContactBox from "./ContactBox";

const ContactInfo = () => {
  return (
    // <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }}>
    <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom
        color={colors.grey["900"]}
        mb={6}
      >
        Contact Information
      </Typography>
      <ContactBox subtitle="info@zaphtours.com" title="Email">
        <Email sx={{ height: 24, width: 24 }} />
      </ContactBox>
      <ContactBox subtitle="+254 700 123456" title="Phone">
        <Phone sx={{ height: 24, width: 24 }} />
      </ContactBox>
      <ContactBox subtitle="+254 790500769" title="Whatsapp Business">
        <WhatsApp sx={{ height: 24, width: 24 }} />
      </ContactBox>
      <ContactBox subtitle="Zaph Tours Office, Nairobi, Kenya" title="Location">
        <LocationOn sx={{ height: 24, width: 24 }} />
      </ContactBox>
    </Paper>
    // </Grid>
  );
};

export default ContactInfo;
