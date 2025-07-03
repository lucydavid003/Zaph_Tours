import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

 function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => () => {
    setDrawerOpen(!drawerOpen);
  };

  const navItems = [
    { label: "HOME", path: "/" },
    { label: "DESTINATIONS", path: "/destinations" },
    { label: "TRIP TYPES", path: "/trip-types" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <Box>
      
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box display="flex" alignItems="center" gap={1}>
            <img src="/zaph-logo.jpg" alt="Zaph Tours Logo" style={{ height: 40 }} />
          </Box>
          <Button component={Link} to="/contact" variant="contained" color="inherit">
            Contact Us
          </Button>
        </Toolbar>
      </AppBar>

      
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography
            variant="h6"
            fontWeight={900}
            fontFamily={"cursive"}
            fontSize={50}
            sx={{ flexGrow: 1, color: "#333" }}
          >
            ZAPH TOURS
          </Typography>

          
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Stack direction="row" spacing={2}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  sx={{ color: "black" }}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>
          </Box>

        
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton edge="end" color="inherit" onClick={toggleDrawer()}>
              <IoMdMenu size={30} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer()}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer()}
          onKeyDown={toggleDrawer()}
        >
          <List>
            {navItems.map((item) => (
              <ListItem  key={item.label} component={Link} to={item.path}>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Navbar