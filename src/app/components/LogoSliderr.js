"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logoPurple6 from "@/app/assets/logoPurple6.png";
import logoPurple5 from "@/app/assets/logoPurple5.png";
import logoPurple4 from "@/app/assets/logoPurple4.png";
import logoPurple3 from "@/app/assets/logoPurple3.png";
import logoPurple2 from "@/app/assets/logoPurple2.jpg";
import logoPurple1 from "@/app/assets/logoPurple1.png";
import alkaios from "@/app/assets/alkaios.png";
import automat from "@/app/assets/automat.png";
import crowd from "@/app/assets/crowd.png";
import dis from "@/app/assets/dis.png";
import kinoki from "@/app/assets/kinoki.png";
import loubiz from "@/app/assets/loubiz.png";
import maxlife from "@/app/assets/maxlife.png";
import mfg from "@/app/assets/mfg.png";
import mymint from "@/app/assets/mymint.png";
import noir from "@/app/assets/noir.png";
import order from "@/app/assets/order.png";
import rocket from "@/app/assets/rocket.png";
import westilo from "@/app/assets/westilo.png";
import westland from "@/app/assets/westland.png";
import newlogo from "@/app/assets/newlogo.png";
import jerry from "@/app/assets/jerry.png";
import landbridge from "@/app/assets/landbridge.png";
import offthe from "@/app/assets/offthe.png";
import rolling from "@/app/assets/rolling.png";
import tip from "@/app/assets/tip.png";
import todays from "@/app/assets/todays.png";

import "../globals.css";

const imageData = [
  { id: 3, defaultSrc: logoPurple3.src, alt: "Logo 3" },
  { id: 5, defaultSrc: logoPurple5.src, alt: "Logo 5" },

  { id: 8, defaultSrc: automat.src, alt: "Automat" },
  { id: 9, defaultSrc: crowd.src, alt: "Crowd" },
  { id: 10, defaultSrc: dis.src, alt: "Dis" },
  { id: 12, defaultSrc: loubiz.src, alt: "Loubiz" },
  { id: 14, defaultSrc: mfg.src, alt: "MFG" },
  { id: 15, defaultSrc: mymint.src, alt: "Mymint" },
  { id: 16, defaultSrc: noir.src, alt: "Noir" },
  { id: 17, defaultSrc: newlogo.src, alt: "pawTrack" },
  { id: 18, defaultSrc: order.src, alt: "Order" },
  { id: 19, defaultSrc: rocket.src, alt: "Rocket" },
  { id: 20, defaultSrc: westilo.src, alt: "Westilo" },
  { id: 23, defaultSrc: landbridge.src, alt: "LandBridge" },
  //  { id: 1, defaultSrc: logoPurple1.src, alt: "Logo 1" },
  // { id: 2, defaultSrc: logoPurple2.src, alt: "Logo 2" },
  // { id: 4, defaultSrc: logoPurple4.src, alt: "Logo 4" },
  // { id: 6, defaultSrc: logoPurple6.src, alt: "Logo 6" },
  { id: 7, defaultSrc: alkaios.src, alt: "Alkaios" },
  { id: 11, defaultSrc: kinoki.src, alt: "Kinoki" },
  { id: 13, defaultSrc: maxlife.src, alt: "Maxlife" },
  { id: 21, defaultSrc: westland.src, alt: "Westland" },
  { id: 22, defaultSrc: jerry.src, alt: "Jerry" },
  { id: 24, defaultSrc: offthe.src, alt: "OffTheHook" },
  { id: 25, defaultSrc: rolling.src, alt: "RollingLagon" },
  { id: 26, defaultSrc: tip.src, alt: "TIB" },
  { id: 27, defaultSrc: todays.src, alt: "DigitalAzari" },
];
// const imageDataT = [
//   { id: 1, defaultSrc: logoPurple1.src, alt: "Logo 1" },
//   { id: 2, defaultSrc: logoPurple2.src, alt: "Logo 2" },
//   { id: 4, defaultSrc: logoPurple4.src, alt: "Logo 4" },
//   { id: 6, defaultSrc: logoPurple6.src, alt: "Logo 6" },
//   { id: 7, defaultSrc: alkaios.src, alt: "Alkaios" },
//   { id: 11, defaultSrc: kinoki.src, alt: "Kinoki" },
//   { id: 13, defaultSrc: maxlife.src, alt: "Maxlife" },
//   { id: 21, defaultSrc: westland.src, alt: "Westland" },
//   { id: 22, defaultSrc: jerry.src, alt: "Jerry" },
//   { id: 24, defaultSrc: offthe.src, alt: "OffTheHook" },
//   { id: 25, defaultSrc: rolling.src, alt: "RollingLagon" },
//   { id: 26, defaultSrc: tip.src, alt: "TIB" },
//   { id: 27, defaultSrc: todays.src, alt: "DigitalAzari" },
// ];

export default function LogoSliderr() {
  // const LogoSliderr = () => {
  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    // speed: 5000,
    // autoplaySpeed: 2000,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <>
      <div style={{ paddingTop: "40px", paddingBottom: "50px", backgroundColor : "#f8f8f8", }}>
        <div className="slider-container">
          <Slider {...settings}>
            {imageData.map((image) => (
              <div
                className="clients-logo d-flex align-content-center"
                key={image.id}
              >
                <Image
                  src={image.defaultSrc}
                  alt={image.alt}
                  width={100}
                  height={150}
                  style={{ objectFit: "contain" }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
// export default LogoSliderr;
// export const ReverseSectionsSlideer = () => {
//   const settings = {
//     infinite: true,
//     slidesToShow: 8,
//     slidesToScroll: 1,
//     autoplay: true,
//     // speed: 5000,
//     // autoplaySpeed: 2000,
//     speed: 2000,
//     autoplaySpeed: 0,
//     cssEase: "linear",
//     rtl: true,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 3 } },
//       { breakpoint: 768, settings: { slidesToShow: 2 } },
//       { breakpoint: 480, settings: { slidesToShow: 2 } },
//     ],
//   };

//   return (
//     <>
//       <div style={{ paddingTop: "15px", paddingBottom: "50px" }}>
//         <div className="slider-container">
//           <Slider {...settings}>
//             {imageDataT.map((image) => (
//               <div
//                 className="clients-logo d-flex align-content-center"
//                 key={image.id}
//               >
//                 <img
//                   src={image.defaultSrc}
//                   alt={image.alt}
//                   style={{
//                     maxHeight: "200px",
//                     objectFit: "contain",
//                     maxWidth: "100px",
//                     minWidth: "100px",
//                   }}
//                 />
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </>
//   );
// };
