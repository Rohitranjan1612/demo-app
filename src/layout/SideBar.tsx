import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuIcon from "@mui/icons-material/Menu";

import { useNavigate, useLocation } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideBar() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawer = () => {
    setOpen(!open);
  };
  console.log({ location: location });

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer variant="permanent" open={open}>
        <button
          style={{
            backgroundColor: "#2D2638",
            border: 0,
            height: "80px",
            fontSize: open ? "29px" : "19px",
            color: "#fff",
          }}
          onClick={handleDrawer}
        >
          <MenuIcon />
        </button>
        <List style={{ backgroundColor: "#1c1b20", height: "100%" }}>
          {/* <ListItem
            key={"All Posts"}
            disablePadding
            sx={{ display: "block" }}
            style={
              location.pathname === "/"
                ? {
                    backgroundColor: "#9747FF",
                    color: "#fff",
                    marginTop: "50px",
                  }
                : {
                    color: "#fff",
                    marginTop: "50px",
                  }
            }
          >
            <ListItemButton
              onClick={() => {
                navigate("/");
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <DashboardIcon
                  style={{
                    color: "#fff",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={"All Posts"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem> */}
          <ListItem
            key={"All FPO Details"}
            disablePadding
            sx={{ display: "block" }}
            style={
              location.pathname === "/"
                ? {
                    backgroundColor: "#9747FF",
                    color: "#fff",
                  }
                : {
                    color: "#fff",
                  }
            }
          >
            <ListItemButton
              onClick={() => {
                navigate("/");
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <DashboardIcon
                  style={{
                    color: "#fff",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={"All FPO Details"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            key={"Create Post"}
            disablePadding
            sx={{ display: "block" }}
            style={
              location.pathname === "/create-fpo-details"
                ? {
                    backgroundColor: "#9747FF",
                    color: "#fff",
                  }
                : {
                    color: "#fff",
                  }
            }
          >
            <ListItemButton
              onClick={() => {
                navigate("/create-fpo-details");
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <DashboardIcon
                  style={{
                    color: "#fff",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Create Post"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
