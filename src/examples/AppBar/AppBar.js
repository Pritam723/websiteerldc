import React, { useState, useRef, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function MyAppBar() {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const searchRef = useRef(null);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchVisible(false);
    }
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Font size scaling logic
  const fontSizeTitle =
    windowWidth > 800 ? "1rem" : windowWidth > 600 ? "0.9rem" : "0.8rem";
  const fontSizeContent =
    windowWidth > 800 ? "0.7rem" : windowWidth > 600 ? "0.6rem" : "0.5rem";

  return (
    <Container>
      <Box
        sx={{
          flexGrow: 1,
          mt: "-31px",
          mb: "-17px",
          backgroundColor: "white",
        }}
      >
        <AppBar position="static">
          <Toolbar
            variant="dense"
            sx={{
              minHeight: "40px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              flexWrap: "nowrap", // Prevent wrapping
              overflow: "hidden", // Hide overflowing content
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="h5"
                color="#0073e6"
                component="div"
                noWrap
                style={{ fontSize: fontSizeTitle }} // Dynamic font size for title
              >
                EASTERN REGIONAL LOAD DESPATCH CENTER
              </Typography>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                whiteSpace: "nowrap",
                flexGrow: 1,
                justifyContent: "flex-end",
                overflow: "hidden",
                fontSize: fontSizeContent, // Dynamic font size for second div
              }}
            >
              {isSearchVisible && (
                <Search ref={searchRef}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              )}
              {!isSearchVisible && (
                <IconButton onClick={toggleSearch} color="inherit">
                  <SearchIcon />
                </IconButton>
              )}

              {windowWidth > 1200 && (
                <>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", marginRight: "-8px" }}
                  >
                    <Typography
                      component="div"
                      fontSize="inherit"
                      color="#1c94d2"
                      fontWeight="bold"
                      noWrap
                    >
                      EN |
                    </Typography>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      component="div"
                      fontSize="inherit"
                      color="#1c94d2"
                      fontWeight="bold"
                      noWrap
                    >
                      हिन्दी
                    </Typography>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      component="div"
                      fontSize="12px"
                      color="#1c94d2"
                      fontWeight="bold"
                    >
                      ISO 9001:2015
                    </Typography>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      component="div"
                      fontSize="12px"
                      color="#1c94d2"
                      fontWeight="bold"
                    >
                      ISO 27001:2013
                    </Typography>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      component="div"
                      fontSize="12px"
                      color="#1c94d2"
                      fontWeight="bold"
                    >
                      ISO 14001:2015
                    </Typography>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      component="div"
                      fontSize="12px"
                      color="#1c94d2"
                      fontWeight="bold"
                    >
                      ISO 45001:2018
                    </Typography>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      component="div"
                      fontSize="12px"
                      color="#1c94d2"
                      fontWeight="bold"
                    >
                      IMS POLICY
                    </Typography>
                  </a>
                  {/* Add other links as needed */}
                </>
              )}
              <IconButton sx={{ flexShrink: 0 }}>
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
}
