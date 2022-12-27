import React from "react";
import GalleryPhotoOne from "../assets/gallery/gallery-1.jpg";
import GalleryPhotoTwo from "../assets/gallery/gallery-2.jpg";
import GalleryPhotoThree from "../assets/gallery/gallery-3.jpg";
import GalleryPhotoFour from "../assets/gallery/gallery-4.jpg";
import GalleryPhotoFive from "../assets/gallery/gallery-5.jpg";

const Gallery = () => {
  return (
    <div id="gallery" className="m-w-[1140px] m-auto w-full px-4 py-16">
      <h2 className="text-center text-PrimaryColor p-4">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img
            className="w-full h-full object-cover"
            src={GalleryPhotoOne}
            alt="*"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src={GalleryPhotoTwo}
            alt="*"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src={GalleryPhotoThree}
            alt="*"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src={GalleryPhotoFour}
            alt="*"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src={GalleryPhotoFive}
            alt="*"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
