import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "./gallery.css";
import { images } from "./images";
import { useNavigate, useParams } from "react-router-dom";

import React, { useState, useEffect, useRef } from "react";

import BaseLayout from "layouts/sections/components/BaseLayout";

import { showToastMessage } from "utilities/ToastMessage";
import { Toast } from "primereact/toast";
import axios from "axios";
export default function MultiGallery() {
  const targetTableClass = "Albums";

  const { albumId } = useParams(); // Read the "id" param from URL

  const navigate = useNavigate();
  const toast = useRef(null);

  const [album, setAlbum] = useState({ title: null, images: [] });

  // const album = {
  //   title: "International Women's Day 2024",
  //   images: images,
  // };

  const getAlbum = async () => {
    let headers = {
      "Content-Type": "application/json",
    };

    // if (authTokens?.access_token) {
    //   headers["Authorization"] = `Bearer ${authTokens.access_token}`;
    // }
    try {
      let response = await axios({
        method: "post",
        url: `${process.env.REACT_APP_READ_API}/getAlbum`,
        headers: headers,
        data: {
          targetTableClass: targetTableClass,
          albumId: albumId,
        },
      });
      const responseData = response.data["data"]["data"];

      // const transformedData = response.data["data"]["data"].map((item) => ({
      //   id: item.id,
      //   title: item.title,
      //   cover: `${process.env.REACT_APP_READ_API}/images/${item.cover}`, // Use the environment variable
      //   noImages: item.noImages,
      //   year: new Date(), // Assign the current date
      // }));

      const transformedData = {
        title: responseData.title,
        images: responseData.images.map((img) => ({
          src: `${process.env.REACT_APP_READ_API}/images/${img}`,
          original: `${process.env.REACT_APP_READ_API}/images/${img}`,
          width: 320,
          height: 213,
          // caption: "Optional Caption",
        })),
      };

      // console.log(transformedData);
      setAlbum(transformedData);
    } catch (e) {
      // console.log(e.response.data);
      const responseData = e.response?.data;
      console.log(responseData);
      const toastDetails = {
        severity: responseData?.type,
        summary: responseData?.summary,
        deatil: responseData?.message,
      };

      showToastMessage(toast, toastDetails);
    }
  };

  useEffect(() => {
    getAlbum();
  }, []);

  const pageTitle = album.title;
  const breadcrumb = [
    { label: "Home" },
    { label: "Photo Gallery" },
    { label: album.title },
  ];

  const [index, setIndex] = useState(-1);

  const currentAlbum = album;

  const currentImage = currentAlbum?.images[index];
  const nextIndex = (index + 1) % (currentAlbum?.images.length || 1);
  const prevIndex =
    (index + (currentAlbum?.images.length || 1) - 1) %
    (currentAlbum?.images.length || 1);

  const handleClick = (index) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const closeAlbum = () => {
    navigate("/photogallery");
  };
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <BaseLayout title={pageTitle} breadcrumb={breadcrumb}>
      <Toast ref={toast} />

      <div className="gallery-container">
        <div className="gallery-view">
          <button onClick={closeAlbum} className="back-button">
            ⬅ Back to Photo Gallery
          </button>
          <Gallery
            images={currentAlbum.images}
            onClick={handleClick}
            enableImageSelection={false}
          />
          {index >= 0 && (
            <Lightbox
              mainSrc={currentImage.original}
              nextSrc={currentAlbum.images[nextIndex]?.original}
              prevSrc={currentAlbum.images[prevIndex]?.original}
              imageTitle={currentImage.caption}
              onCloseRequest={handleClose}
              onMovePrevRequest={handleMovePrev}
              onMoveNextRequest={handleMoveNext}
            />
          )}
        </div>
      </div>
    </BaseLayout>
  );
}
