import coffeeCup from "../assets/images/coffeeCup.svg";
import apple from "../assets/images/apple.svg";
import chicken from "../assets/images/chicken.svg";
import jug from "../assets/images/jug.svg";
import graphicFrame from "../assets/images/graphicFrame.svg";
import kegImg from "../assets/images/kegImg.svg";
import caramel from "../assets/images/caramel.svg";

import faBrands1 from "../assets/brandImg/fa-brands-1.svg";
import faBrands2 from "../assets/brandImg/fa-brands-2.svg";
import faBrands3 from "../assets/brandImg/fa-brands-3.svg";
import faBrands4 from "../assets/brandImg/fa-brands-4.svg";
import faBrands5 from "../assets/brandImg/fa-brands-5.svg";
import faBrands6 from "../assets/brandImg/fa-brands-6.svg";

import bgImgBuilding from "../assets/featuredImg/bgImgBuilding.svg";
import bgImgCarBuilding from "../assets/featuredImg/bgImgCarBuilding.svg";
import bgImgUmbrella from "../assets/featuredImg/bgImgUmbrella.svg";

import { BsTelephone } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { FiSend } from "react-icons/fi";

export const firstSectionData = [
  {
    id: 1,
    headerText: "Your Space",
    mainText: "Unique Life",
    footerText: "Explore Items",
    img: coffeeCup,
  },
  {
    id: 2,
    headerText: "Ends Today",
    mainText: "Elements Style",
    footerText: "Explore Items",
    img: apple,
  },
  {
    id: 3,
    headerText: "Ends Today",
    mainText: "Elements Style",
    footerText: "Explore Items",
    img: chicken,
  },
];

export const secondSectionData = [
  { id: 1, img: coffeeCup },
  { id: 2, img: apple },
  { id: 3, img: chicken },
];

export const sixthSectionData = [
  {
    id: 1,
    img: jug,
  },
  {
    id: 2,
    img: graphicFrame,
  },
  {
    id: 3,
    img: kegImg,
  },
  {
    id: 4,
    img: caramel,
  },
];

export const seventhSectionData = [
  {
    id: 1,
    img: faBrands1,
  },
  {
    id: 2,
    img: faBrands2,
  },
  {
    id: 3,
    img: faBrands3,
  },
  {
    id: 4,
    img: faBrands4,
  },
  {
    id: 5,
    img: faBrands5,
  },
  {
    id: 6,
    img: faBrands6,
  },
];

export const eightSectionData = [
  {
    id: 1,
    img: bgImgBuilding,
  },
  {
    id: 2,
    img: bgImgCarBuilding,
  },
  {
    id: 3,
    img: bgImgUmbrella,
  },
];

export const footerData = [
  {
    id: 1,
    item1: "Company Info",
    img2: "",
    item2: "About Us",
    img3: "",
    item3: "Carrier",
    img4: "",
    item4: "We are hiring",
    item5: "Blog",
  },
  {
    id: 2,
    item1: "Legal",
    img2: "",
    item2: "About Us",
    img3: "",
    item3: "Carrier",
    img4: "",
    item4: "We are hiring",
    item5: "Blog",
  },
  {
    id: 3,
    item1: "Features",
    img2: "",
    item2: "Business Marketing",
    img3: "",
    item3: "User Analytic",
    img4: "",
    item4: "Live Chat",
    item5: "Unlimited Support",
  },
  {
    id: 4,
    item1: "Resources",
    img2: "",
    item2: "IOS & Android",
    img3: "",
    item3: "Watch a Demo",
    img4: "",
    item4: "Customers",
    item5: "API",
  },
  {
    id: 5,
    item1: "Get In Touch",
    img2: <BsTelephone />,
    item2: "IOS & Android",
    img3: <GrLocation />,
    item3: "Watch a Demo",
    img4: <FiSend />,
    item4: "Customers",
  },
];

// export const Telephone = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="25"
//       viewBox="0 0 24 25"
//       fill="none"
//     >
//       <g clip-path="url(#clip0_2986_10877)">
//         <path
//           d="M18.8483 12.9767C18.737 12.8652 18.6047 12.7767 18.4592 12.7163C18.3136 12.656 18.1575 12.6249 17.9999 12.6249C17.8423 12.6249 17.6863 12.656 17.5407 12.7163C17.3951 12.7767 17.2629 12.8652 17.1515 12.9767L15.2388 14.8895C14.352 14.6255 12.6972 14.0255 11.6484 12.9767C10.5996 11.9279 9.99962 10.2731 9.73562 9.38635L11.6484 7.47357C11.7599 7.36223 11.8484 7.22998 11.9088 7.08441C11.9692 6.93883 12.0002 6.78278 12.0002 6.62518C12.0002 6.46758 11.9692 6.31153 11.9088 6.16595C11.8484 6.02038 11.7599 5.88813 11.6484 5.77679L6.84845 0.976838C6.73711 0.865304 6.60486 0.776819 6.45929 0.716447C6.31371 0.656075 6.15766 0.625 6.00006 0.625C5.84246 0.625 5.68641 0.656075 5.54083 0.716447C5.39526 0.776819 5.26301 0.865304 5.15167 0.976838L1.8973 4.23121C1.44131 4.6872 1.18451 5.31359 1.19411 5.95319C1.22171 7.66197 1.6741 13.5971 6.35166 18.2747C11.0292 22.9522 16.9644 23.4034 18.6743 23.4322H18.7079C19.3415 23.4322 19.9403 23.1826 20.3939 22.729L23.6483 19.4747C23.7598 19.3633 23.8483 19.2311 23.9087 19.0855C23.969 18.9399 24.0001 18.7839 24.0001 18.6263C24.0001 18.4687 23.969 18.3126 23.9087 18.167C23.8483 18.0215 23.7598 17.8892 23.6483 17.7779L18.8483 12.9767ZM18.6959 21.031C17.1983 21.0058 12.0744 20.6038 8.04844 16.5767C4.00928 12.5375 3.61808 7.39557 3.59408 5.92799L6.00006 3.52201L9.10323 6.62518L7.55164 8.17677C7.4106 8.3177 7.3069 8.49157 7.24991 8.68264C7.19292 8.87372 7.18445 9.07598 7.22525 9.27115C7.25405 9.40915 7.95844 12.6815 9.95042 14.6735C11.9424 16.6655 15.2148 17.3699 15.3528 17.3987C15.5478 17.4406 15.7503 17.4328 15.9415 17.376C16.1328 17.3192 16.3067 17.2151 16.4472 17.0735L17.9999 15.5219L21.1031 18.6251L18.6959 21.031Z"
//           fill="#8EC2F2"
//         />
//       </g>
//       <defs>
//         <clipPath id="clip0_2986_10877">
//           <rect
//             width="24"
//             height="24"
//             fill="white"
//             transform="translate(0 0.625)"
//           />
//         </clipPath>
//       </defs>
//     </svg>
//   );
// };
// export const Location = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="31"
//       viewBox="0 0 24 31"
//       fill="none"
//     >
//       <g clip-path="url(#clip0_2986_10881)">
//         <path
//           d="M11.9999 18.2499C15.3089 18.2499 17.9999 15.5589 17.9999 12.2499C17.9999 8.94097 15.3089 6.25 11.9999 6.25C8.69097 6.25 6 8.94097 6 12.2499C6 15.5589 8.69097 18.2499 11.9999 18.2499ZM11.9999 9.24997C13.6544 9.24997 14.9999 10.5955 14.9999 12.2499C14.9999 13.9044 13.6544 15.2499 11.9999 15.2499C10.3455 15.2499 8.99997 13.9044 8.99997 12.2499C8.99997 10.5955 10.3455 9.24997 11.9999 9.24997Z"
//           fill="#8EC2F2"
//         />
//         <path
//           d="M11.13 29.9707C11.3839 30.152 11.688 30.2494 12 30.2494C12.312 30.2494 12.6161 30.152 12.87 29.9707C13.326 29.6482 24.0434 21.9098 23.9999 12.2499C23.9999 5.63344 18.6164 0.25 12 0.25C5.38357 0.25 0.000132055 5.63344 0.000132055 12.2424C-0.0433675 21.9098 10.674 29.6482 11.13 29.9707ZM12 3.24997C16.9634 3.24997 20.9999 7.28642 20.9999 12.2574C21.0314 18.9143 14.418 24.8917 12 26.8522C9.58353 24.8902 2.9686 18.9113 3.0001 12.2499C3.0001 7.28642 7.03655 3.24997 12 3.24997Z"
//           fill="#8EC2F2"
//         />
//       </g>
//       <defs>
//         <clipPath id="clip0_2986_10881">
//           <rect
//             width="24"
//             height="29.9997"
//             fill="white"
//             transform="translate(0 0.25)"
//           />
//         </clipPath>
//       </defs>
//     </svg>
//   );
// };
// export const Kite = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="27"
//       viewBox="0 0 24 27"
//       fill="none"
//     >
//       <g clipPath="url(#clip0_2986_10886)">
//         <path
//           d="M23.71 2.21695C23.575 2.07725 23.4045 1.98052 23.2185 1.93815C23.0325 1.89578 22.8388 1.90951 22.66 1.97775L0.660001 10.2977C0.470269 10.3726 0.306921 10.5057 0.191652 10.6794C0.0763829 10.8531 0.0146484 11.0591 0.0146484 11.2701C0.0146484 11.4812 0.0763829 11.6872 0.191652 11.8609C0.306921 12.0346 0.470269 12.1677 0.660001 12.2425L10.26 16.2361L14.1 26.2201C14.1721 26.4088 14.2958 26.5714 14.4557 26.6878C14.6157 26.8042 14.8049 26.8694 15 26.8753C15.2021 26.871 15.3982 26.8031 15.5624 26.6806C15.7266 26.5581 15.8513 26.3867 15.92 26.1889L23.92 3.30895C23.9881 3.12495 24.0046 2.92459 23.9674 2.73125C23.9302 2.53791 23.8409 2.35954 23.71 2.21695ZM15 22.9233L12.21 15.6433L17 10.6617L15.59 9.19535L10.76 14.2185L3.8 11.2753L21.33 4.69215L15 22.9233Z"
//           fill="#8EC2F2"
//         />
//       </g>
//       <defs>
//         <clipPath id="clip0_2986_10886">
//           <rect
//             width="24"
//             height="26"
//             fill="white"
//             transform="translate(0 0.875)"
//           />
//         </clipPath>
//       </defs>
//     </svg>
//   );
// };
