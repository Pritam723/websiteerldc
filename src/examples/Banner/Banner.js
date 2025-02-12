import Banner1 from "assets/images/Banners/Banner.jpeg";
import React, { useEffect, useState } from "react";
import "./Banner.css";

export const Modal = ({ src, alt, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleOutsideClick = (e) => {
    // Check if the click is on the modal content or its children
    if (e.target.className.includes("modal-content")) {
      return; // Do nothing if clicked on the modal content
    }

    if (e.target.className.includes("modal")) {
      triggerClose(); // Close the modal if clicked outside the content
    }
  };

  const triggerClose = () => {
    setIsClosing(true); // Trigger closing animation
    setTimeout(onClose, 600); // Wait for the animation to complete
  };

  return (
    <div
      className={`modal ${isClosing ? "closing" : ""}`}
      onClick={handleOutsideClick}
    >
      <span className="close" onClick={triggerClose}>
        &times;
      </span>
      <img className="modal-content" src={src} alt={alt} />
    </div>
  );
};

export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  return (
    <div className="App">
      {isOpen && (
        <Modal src={Banner1} alt="Banner" onClose={() => setIsOpen(false)} />
      )}
    </div>
  );
}