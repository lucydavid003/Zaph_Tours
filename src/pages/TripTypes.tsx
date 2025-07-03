
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const packages = [
  {
    title: "Honeymoon vacation",
    image: "/honeymoon.jpg",
    description:
      "Romantic escapes tailored for newlyweds. Private villas, candlelit dinners, and unforgettable sunsets",
    pricing: "Starting from Ksh 80,000 per couple",
  },
  {
    title: "Adventure Trip",
    image: "/adventure trip.jpg",
    description: "Fun-filled packages for the whole family",
    pricing: "Starting from Ksh 50,000 per family",
  },
  {
    title: "Beach Holidays",
    image: "/beach holiday.jpg",
    description: "Enjoy cool winds and view at magnificent beaches",
    pricing: "Starting from Ksh 180,000 per family",
  },
  {
    title: "Culinary Trips",
    image: "/culinary events.jpg",
    description: "Enjoy different cuisines from all over the world",
    pricing: "Starting from Ksh 8000 per person",
  },
  {
    title: "Cultural Trips",
    image: "/cultral trip.jpg",
    description: "Get a chance to interact with different cultures.",
    pricing: "Starting from Ksh 100,000 per group",
  },
  {
    title: "Eco Tours",
    image: "/eco tours.jpg",
    description: "Enjoy the chance of our Eco tours every 4 times a year",
    pricing: "Starting from Ksh 10,000 per person",
  },
  {
    title: "Family Trip",
    image: "/family trip.jpg",
    description: "Take your family out for a holiday with our services",
    pricing: "Starting from Ksh 85,000 per family",
  },
  {
    title: "Luxury Vacations",
    image: "/luxury vacation.jpg",
    description: "Five star hotels for high-class experiences",
    pricing: "Starting from Ksh 150,000 per person",
  },
  {
    title: "Wellness Retreat",
    image: "/wellness retreat.jpg",
    description: "Cool and relax your mind with a holiday",
    pricing: "Starting from Ksh 30,000 per person",
  },
  {
    title: "Wildlife safaris",
    image: "/wildlife safari.jpg",
    description: "Amazing wildlife views and tours by Zaph Tours",
    pricing: "Starting from Ksh 90,000 per group of 5",
  },
];

 function TripTypes() {
  return (
    <Box sx={{ px: 4, py: 6, bgcolor: "#fff3e0" }}>
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
      >
        Our Trip Packages
      </Typography>

      <Grid container spacing={4}>
        {packages.map((pkg, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }} key={index}>
            <Card sx={{ boxShadow: 3, borderRadius: 4, height: "100%" }}>
              <CardMedia
                component="img"
                height="180"
                image={pkg.image}
                alt={pkg.title}
              />
              <CardContent>
                <Typography variant="h5" fontWeight="bold">
                  {pkg.title}
                </Typography>
                <Typography variant="body1" mt={2}>
                  {pkg.description}
                </Typography>
                <Typography variant="subtitle1" color="primary" mt={2}>
                  {pkg.pricing}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}


export default TripTypes
