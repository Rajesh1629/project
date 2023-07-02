import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
export default function Slider() {
   const sliderImages = [
     {
       url: "https://media.istockphoto.com/id/1277544972/photo/break-the-chain.jpg?s=1024x1024&w=is&k=20&c=p_MnQrRb5Y4tRyyMLJq8UirsvAMGhnZ4xE_LbdvNwX0=",
     },
     {
       url: "https://images.freeimages.com/images/large-previews/5ca/newport-bridge-sunset-1634627.jpg",
     },
     {
       url: "https://images.freeimages.com/images/large-previews/01c/window-1641330.jpg",
     },
     {
       url: "https://images.freeimages.com/images/large-previews/36e/black-fly-1641767.jpg",
     },
     {
       url: "https://images.freeimages.com/images/large-previews/07d/tian-shen-bridge-1641943.jpg",
     },

   ];
   return (
      <div className="row">
        <div className="container">
         <SimpleImageSlider
            width={500}
            height={250}
            images={sliderImages}
            showNavs={true}
            navStyle={2}
            showBullets={true}
            autoPlay={true}
            autoPlayDelay={3}
         />
        </div>
      </div>
   );
}