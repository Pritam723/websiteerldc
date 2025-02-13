import React from "react";
import windmill from "assets/images/ICON PACK/windmill.gif";
import bulb1 from "assets/images/ICON PACK/bulb1.gif";
import bulb2 from "assets/images/ICON PACK/bulb2.gif";
import solar from "assets/images/ICON PACK/solar.gif";
import battery from "assets/images/ICON PACK/battery.gif";

const LoadingScreen = () => {
  const loadingImages = [windmill, bulb1, bulb2, solar, battery];
  const selectedImage =
    loadingImages[Math.floor(Math.random() * loadingImages.length)];

  return (
    <div style={styles.overlay}>
      <img
        // src={"https://www.powergrid.in/themes/powergrid/images/page-loader.gif"} // Replace with your loading image path
        src={selectedImage}
        alt="Loading..."
        style={styles.image}
      />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    backgroundColor: "white",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 9999, // Ensure it appears above everything
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(255, 255, 255, 0.4)", // Light transparent overlay
    backdropFilter: "blur(3px)", // Reduced blur effect
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999, // Ensure it's above everything
    // opacity: 0, // Start invisible
    // animation: "fadeIn 0.5s ease-in-out forwards", // Apply fade-in animation
  },
  image: {
    width: "150px", // Adjust size as needed
    height: "150px",
  },
};

export default LoadingScreen;
