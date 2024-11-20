import {
  waffleDesktop,
  waffleMobile,
  waffleTable,
  waffleThumbnail,
  cremeBruleeDesktop,
  cremeBruleeMobile,
  cremeBruleeTablet,
  creameBruleeThumnail,
  macaronDesktop,
  macaronMobile,
  macaronTablet,
  macaronThumbnail,
  tiramisuDesktop,
  tiramisuMobile,
  tiramisuTablet,
  tiramisuThumbnail,
  baklavaDesktop,
  baklavaMobile,
  baklavaTablet,
  baklavaThumbnail,
  miringueDesktop,
  miringueMobile,
  miringueTablet,
  miringueThumbnail,
  cakeDesktop,
  cakeMobile,
  cakeTablet,
  cakeThumbnail,
  brownieDesktop,
  brownieMobile,
  brownieTablet,
  brownieThumbnail,
  pannaCottaDesktop,
  pannaCottaMobile,
  pannaCottaTablet,
  pannaCottaThumbnail,
} from "../assets/index";

interface DataStruction {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
}

export const LocalData: DataStruction[] = [
  {
    image: {
      thumbnail: waffleThumbnail,
      mobile: waffleMobile,
      tablet: waffleTable,
      desktop: waffleDesktop,
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    image: {
      thumbnail: creameBruleeThumnail,
      mobile: cremeBruleeMobile,
      tablet: cremeBruleeTablet,
      desktop: cremeBruleeDesktop,
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    image: {
      thumbnail: macaronThumbnail,
      mobile: macaronMobile,
      tablet: macaronTablet,
      desktop: macaronDesktop,
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    image: {
      thumbnail: tiramisuThumbnail,
      mobile: tiramisuMobile,
      tablet: tiramisuTablet,
      desktop: tiramisuDesktop,
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    image: {
      thumbnail: baklavaThumbnail,
      mobile: baklavaMobile,
      tablet: baklavaTablet,
      desktop: baklavaDesktop,
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    image: {
      thumbnail: miringueThumbnail,
      mobile: miringueMobile,
      tablet: miringueTablet,
      desktop: miringueDesktop,
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    image: {
      thumbnail: cakeThumbnail,
      mobile: cakeMobile,
      tablet: cakeTablet,
      desktop: cakeDesktop,
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    image: {
      thumbnail: brownieThumbnail,
      mobile: brownieMobile,
      tablet: brownieTablet,
      desktop: brownieDesktop,
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    image: {
      thumbnail: pannaCottaThumbnail,
      mobile: pannaCottaMobile,
      tablet: pannaCottaTablet,
      desktop: pannaCottaDesktop,
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];
