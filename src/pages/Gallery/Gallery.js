// import { useState } from "react";
// import { Gallery } from "react-grid-gallery";
// import Lightbox from "react-image-lightbox";
// import "react-image-lightbox/style.css";
// import { images } from "./images";
// import "./style.css";
// import BaseLayout from "layouts/sections/components/BaseLayout";

// export default function App() {
//   const pageTitle = "Photo Gallery";
//   const breadcrumb = [
//     { label: "Home" },
//     {
//       label: "Photo Gallery",
//     },
//   ];

//   const [index, setIndex] = useState(-1);

//   const currentImage = images[index];
//   const nextIndex = (index + 1) % images.length;
//   const nextImage = images[nextIndex] || currentImage;
//   const prevIndex = (index + images.length - 1) % images.length;
//   const prevImage = images[prevIndex] || currentImage;

//   const handleClick = (index, item) => setIndex(index);
//   const handleClose = () => setIndex(-1);
//   const handleMovePrev = () => setIndex(prevIndex);
//   const handleMoveNext = () => setIndex(nextIndex);

//   return (
//     <BaseLayout title={pageTitle} breadcrumb={breadcrumb}>
//       <div>
//         <Gallery
//           images={images}
//           onClick={handleClick}
//           enableImageSelection={false}
//         />
//         {currentImage && (
//           <Lightbox
//             mainSrc={currentImage.original}
//             nextSrc={nextImage.original}
//             prevSrc={prevImage.original}
//             imageTitle={currentImage.caption}
//             onCloseRequest={handleClose}
//             onMovePrevRequest={handleMovePrev}
//             onMoveNextRequest={handleMoveNext}
//           />
//         )}
//       </div>
//     </BaseLayout>
//   );
// }

import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "./gallery.css";
import { images } from "./images";

import BaseLayout from "layouts/sections/components/BaseLayout";

const albums = [
  {
    title: "R.N. Tagore 163rd Birth Anniversary",
    cover: "http://10.3.101.179:4001/images/image1.jpg",
    images: images,
  },
  {
    title: "International Women's Day 2024",
    cover: "http://10.3.101.179:4001/images/image1.jpg",
    images: images,
  },
];

export default function MultiGallery() {
  const pageTitle = "Photo Gallery";
  const breadcrumb = [
    { label: "Home" },
    {
      label: "Photo Gallery",
    },
  ];

  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [index, setIndex] = useState(-1);

  const currentAlbum = albums[selectedAlbum];
  const currentImage = currentAlbum?.images[index];
  const nextIndex = (index + 1) % (currentAlbum?.images.length || 1);
  const prevIndex =
    (index + (currentAlbum?.images.length || 1) - 1) %
    (currentAlbum?.images.length || 1);

  const openAlbum = (albumIndex) => {
    console.log(albumIndex);
    setSelectedAlbum(albumIndex);
    setIndex(-1); // Reset the selected image index
  };
  const handleClick = (index) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const closeAlbum = () => setSelectedAlbum(null);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <BaseLayout title={pageTitle} breadcrumb={breadcrumb}>
      <div className="gallery-container">
        {selectedAlbum === null ? (
          <div className="album-grid">
            {albums.map((album, idx) => (
              <div
                key={idx}
                className="album-card"
                onClick={() => openAlbum(idx)}
              >
                <img
                  src={album.cover}
                  alt={album.title}
                  className="album-cover"
                />
                <h3>{album.title}</h3>
                <p>{album.images.length} Photos</p>
              </div>
            ))}
          </div>
        ) : (
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
        )}
      </div>
    </BaseLayout>
  );
}
