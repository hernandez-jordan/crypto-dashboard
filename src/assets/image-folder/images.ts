import avatarImage from "./avatar.png";
import avatarImage1 from "./avatar1.jpg";
import bitcoin from "./bitcoin.png";
import ethereum from "./ethereum.png";
import cardano from "./cardano.png";
import ripple from "./ripple.png";

export interface Imagetypes {
  items: ImageType[];
}

export type ImageType = {
  alt: string;
  src: string;
  label?: string;
};

export const Images = <ImageType[]>[
  {
    alt: "#727",
    src: avatarImage,
  },
  {
    alt: "#424",
    src: avatarImage1,
  },
];
export const CryptoImages = <ImageType[]>[
  {
    alt: "BTC",
    src: bitcoin,
    label: "bitcoin",
  },
  {
    alt: "ETH",
    src: ethereum,
    label: "ethereum",
  },
  {
    alt: "ADA",
    src: cardano,
    label: "cardano",
  },
  {
    alt: "XRP",
    src: ripple,
    label: "ripple",
  },
];
