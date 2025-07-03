
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";

const explore = [
  {
    name: "Great Dubai Mall",
    image: "/explore 1.jpg",
    description: "Experience luxury and futuristic architecture in Dubai,with a view of our newest cruiseship",
    priceGroup: "2500$",
    priceIndividual: "500$",
  },
  {
    name: "Beijing, China",
    image: "/explore 2.jpg",
    description:
      "Explore the Great Wall, cultural temples, and bustling city life.",
    priceGroup: "2800$",
    priceIndividual: "650$",
  },
  {
    name: "Kuala Lumpur, Malaysia",
    image: "/explore 3.jpg",
    description:
      "Enjoy vibrant city life, tropical islands, and rich culture.",
    priceGroup: "1800$",
    priceIndividual: "475$",
  },
  {
    name: "Santorini, Greece",
    image: "/explore 3.jpg",
    description:
      "Romantic sunsets, white-washed buildings, and Aegean views.",
    priceGroup: "2000$",
    priceIndividual: "750$",
  },
  {
    name: "Cape Town, South Africa",
    image: "/explore 4.jpg",
    description:
      "Hike Table Mountain, visit wineries, and explore coastal charm.",
    priceGroup: "1400$",
    priceIndividual: "400$",
  },
  {
    name: "Kigali, Rwanda",
    image: "/explore 6.jpg",
    description:
      "Visit the land of a thousand hills, experience gorilla trekking and hot air balloons.",
    priceGroup: "900$",
    priceIndividual: "150$",
  },
];
 function Destinations() {
  return (
    <Box sx={{ px: 4, py: 6, bgcolor: "#f1f8e9" }}>
      <Typography
        variant="h3"
        textAlign="center"
        fontWeight="bold"
        fontFamily="inherit"
        gutterBottom
      >
        Explore Our Destinations
      </Typography>

      <Typography
        variant="h5"
        textAlign="center"
        color="text.secondary"
        mb={5}
      >
        Discover top travel experiences curated by Zaph Tours.
      </Typography>

      <Grid container spacing={4}>
        {explore.map((item, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }} key={index}>
            <Card sx={{ borderRadius: 4, boxShadow: 4, height: "100%" }}>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.name}
              />
              <CardContent sx={{ bgcolor: "#f3e5f5" }}>
                <Typography variant="h6" fontWeight="bold">
                  {item.name}
                </Typography>
                <Typography variant="body2" mb={1}>
                  {item.description}
                </Typography>
                <Typography variant="body2">
                  <strong>Group Price:</strong> {item.priceGroup}
                </Typography>
                <Typography variant="body2" mb={2}>
                  <strong>Individual Price:</strong> {item.priceIndividual}
                </Typography>
                <Button variant="contained" color="secondary">
                  View More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Destinations