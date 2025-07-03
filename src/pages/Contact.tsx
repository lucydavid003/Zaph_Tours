import {
  
  Facebook,
  Instagram,
  LinkedIn,
  
  Twitter,
} from "@mui/icons-material";
import {
  Box,

  colors,
  Grid,
  IconButton,
  Link,
  Paper,

  Typography,
} from "@mui/material";

import OfficeHours from "../components/OfficeHours";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import {  FaRegMap } from "react-icons/fa6";

 function ContactPage() {
  return (
    <Box sx={{ px: 4, py: 6, bgcolor: "#f9f9f9" }}>
      <Box>

      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
        >
        Contact Us
      </Typography>
        </Box>

      <Grid container spacing={4} gap={4}>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
          <ContactForm />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>

          <ContactInfo />
        </Grid>
      </Grid>

      <OfficeHours />

      {/* Map */}
      <Box mt={16}>
      <Box display={"flex"} alignItems={"center"} mb={6}>
        <FaRegMap size={20} color={colors.blue["600"]} />
        <Typography variant="h6" fontWeight={"bold"} color={colors.grey["900"]} ml={2}>Find Us</Typography>
      </Box>
      <Paper elevation={3} sx={{ height: 400, borderRadius: 5,overflow:'hidden', border: 1, borderColor: colors.grey["200"]  }}>
        <iframe
          title="Zaph Tours Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8648507896234!2d36.821946414290595!3d-1.2920651359975634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10a309d4dfb3%3A0x7cbbc4123b1eae52!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1624567890123"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          ></iframe>
      </Paper>
          </Box>

      {/* Social Media */}
      <Box textAlign="center" mt={6}>
        <Typography variant="h6" gutterBottom>
          Follow Us
        </Typography>
        <Box display="flex" justifyContent="center" gap={2}>
          <IconButton
            component={Link}
            href="https://facebook.com"
            target="_blank"
          >
            <Facebook color="primary" />
          </IconButton>
          <IconButton
            component={Link}
            href="https://instagram.com"
            target="_blank"
          >
            <Instagram color="primary" />
          </IconButton>
          <IconButton
            component={Link}
            href="https://twitter.com"
            target="_blank"
          >
            <Twitter color="primary" />
          </IconButton>
          <IconButton
            component={Link}
            href="https://linkedin.com/company/zaphtours"
            target="_blank"
          >
            <LinkedIn color="primary" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactPage
