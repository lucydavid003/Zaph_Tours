import {
  Box,
  Typography,
  Stack,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { MdOutlineUnsubscribe } from "react-icons/md";

const destinations = [
  {
    title: "Mt. Longonot",
    image: "/destination 1.jpg",
    description: "Hike the dramatic crater rim and enjoy panoramic views",
    price: "Ksh.10000",
  },
  {
    title: "Malindi",
    image: "/destination 2.jpg",
    description: "Relax on white sandy beaches with Swahili charm.",
    price: " Ksh.45000",
  },
  {
    title: "Lake Nakuru",
    image: "/destination 3.jpg",
    description: "Discover flamingos, rhinos, and beautiful lake views.",
    price: "Ksh.15000",
  },
  {
    title: "Tsavo East",
    image: "destination 4.jpg",
    description: "Explore vast savannahs and see elephants in the wild.",
    price: "Ksh.35000",
  },
  {
    title: "Maasai Mara",
    image: "destination 5.jpg",
    description: "Witness the Big Five and the Great Migration in style.",
    price: "Ksh.30000",
  },
  {
    title: "Amboseli",
    image: "/about us image.jpg",
    description: "Iconic views of Mt. Kilimanjaro and large elephant herds.",
    price: "Ksh.18000",
  },
];

const testimonies = [
  {
    name: "Dr. Wanjiru : KU Referral Hospital",
    testimony:
      "Zaph Tours planned our medical retreat perfectly. Efficient and reliable.",
    image: "/testimony 1.jpg",
  },
  {
    name: "James Mwangi : CEO, Equity Bank",
    testimony:
      "Their service and coordination were world-class. Highly recommended.",
    image: "/testimony 2.jpg",
  },
];

 function Home() {
  return (
    <>
      {/* Hero Section */}
      <Box position="relative" height="90vh" width="100%" overflow="hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(1.2)"
          }}
        >
          <source src="/home page video.mp4" type="video/mp4"  />
        </video>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "#00000066",
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            px: 2,
          }}
        >
          <Typography
            variant="h2"
            fontFamily="monospace"
            fontWeight="bold"
            color="#f48fb1"
          >
            BEST * SAFARIS * ADVENTURES
          </Typography>
        </Box>
      </Box>

      {/* About Us */}
      <Box maxHeight={500} sx={{ bgcolor: "#efebe9", py: 6 }}>
        <Typography
          variant="h2"
          fontFamily={"serif"}
          fontWeight="bold"
          color="pink"
          align="center"
        >
          About Us
        </Typography>
        <Typography variant="body1" align="center" sx={{ px: 4, mb: 4 }}>
          At Zaph Tours, we create more than holidays  we craft memories that
          linger. From wild safaris to serene retreats, every journey is
          designed with care, heart, and a touch of magic. Whether you're
          seeking adventure, rest, or connection, we make travel feel personal,
          beautiful, and unforgettable. Let your next chapter begin with us.
        </Typography>
        <Box display="flex" justifyContent="center">
          <Stack
            height={500}
            width={500}
            borderRadius={"20%"}
            overflow="hidden"
          >
            <img
              src="/home page image.jpg"
              alt="About us"
              style={{ width: "100%" }}
            />
          </Stack>
        </Box>
      </Box>

      {/* Featured Destinations */}
      <Box sx={{ backgroundColor: "#ffebee", py: 6 }}>
        <Typography
          variant="h2"
          fontFamily={"serif"}
          textAlign={"center"}
          color="brown"
        >
          Featured Destinations
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {destinations.map((place, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }} key={index}>
              <Card sx={{ height: "100%", bgcolor: "#e0f2f1",}}>
                <CardMedia
                  component="img"
                  height="200"
                  image={place.image}
                  alt={place.title}
                />
                <CardContent>
                  <Typography variant="h5" fontWeight="bold">
                    {place.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    {place.description}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" mt={2}>
                    {place.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained" color="secondary">
                    Book Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Testimonials */}
      <Box sx={{ bgcolor: "#f1f8e9", py: 6 }}>
        <Typography
          variant="h2"
          textAlign={"center"}
          fontFamily={"serif"}
          color="#8d6e63"
          fontWeight={"bold"}
        >
          Testimonials
        </Typography>
        <Typography
          variant="body1"
          textAlign={"center"}
          fontFamily={"sans-serif"}
          mb={4}
        >
          Zaph tours has been able to satisfy more than 200+ individuals and
          more than 30 companies...
        </Typography>
        <Grid container spacing={4} justifyContent={"center"}>
          {testimonies.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }} key={index}>
              <Card sx={{ borderRadius: 3, boxShadow: 3, bgcolor: "bisque" }}>
                <Box
                  component="img"
                  src={item.image}
                  alt={item.name}
                  sx={{ width: "100%", height: 250, objectFit: "cover" }}
                />
                <CardContent>
                  <Typography fontWeight="bold" gutterBottom>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" fontStyle="italic">
                    “{item.testimony}”
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Newsletter */}
      <Box sx={{ bgcolor: "#d7ccc8", py: 6 }}>
        <Typography
          variant="h3"
          textAlign={"center"}
          fontFamily={"serif"}
          color="#00695c"
          fontWeight={"bold"}
        >
          Weekly Updates
        </Typography>
        <Typography variant="h4" textAlign={"center"} mt={2} mb={4}>
          Subscribe to our NewsLetter using your email.
        </Typography>
        <Stack direction="row" justifyContent="center" spacing={4} mb={5}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<MdOutlineUnsubscribe />}
          >
            Subscribe
          </Button>
          <Box
            component="input"
            type="email"
            placeholder="Enter your email"
            style={{
              padding: "10px",
              width: "300px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </Stack>
      </Box>
    </>
  );
}

export default Home