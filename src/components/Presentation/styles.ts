import { BsCheck2Circle } from "react-icons/bs";

import { styled } from "stitches";

import Image from "@infra/Image";

import bg_img from "@statics/imgs/bg-foods.jpg";

export const Container = styled("section", {
  width: "100vw",

  position: "relative",

  padding: "40px 15px",

  display: "flex",
  justifyContent: "center",

  backgroundImage: `url(${bg_img.src})`,
  backgroundPosition: "center",
  backgroundSize: "cover",

  "@bq-600": {
    backgroundPosition: "top",
  },
});

export const Wrapper = styled("div", {
  width: "100%",
  maxWidth: "900px",

  zIndex: 10,

  display: "flex",
  alignItems: "center",

  "@bq-700": {
    flexDirection: "column",
  },

  color: "#ffffff",

  "& > .product": {
    width: "50%",

    "@bq-700": {
      width: "100%",
    },

    display: "flex",
    justifyContent: "center",
    gap: "15px",

    "> .product_informations": {
      maxWidth: "150px",

      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",

      "> ul": {
        listStyle: "none",

        marginTop: "20px",

        display: "flex",
        flexDirection: "column",
        gap: "10px",

        "> li": {
          display: "flex",
          alignItems: "center",

          "> p": {
            fontSize: "13px",
            fontWeight: 500,
          },
        },
      },
    },
  },

  "& > .informations": {
    width: "50%",

    "@bq-700": {
      width: "100%",

      marginTop: "20px",

      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },

    "> h1": {
      fontSize: "25px",
      fontWeight: 700,

      "@bq-700": {
        fontSize: "22px",
      },

      "@bq-600": {
        fontSize: "25px",
      },

      "@bq-450": {
        textAlign: "center",

        fontSize: "23px",
      },

      "> span": {
        color: "#DEBB3E",
      },
    },

    "> ul": {
      listStyle: "none",

      marginTop: "20px",

      display: "flex",
      flexDirection: "column",
      gap: "10px",

      "> li": {
        display: "flex",
        alignItems: "center",

        "> p": {
          fontSize: "14px",
          fontWeight: 500,
        },
      },
    },
  },
});

export const ProductImage = styled("img", {
  width: "45%",

  objectFit: "contain",

  "@bq-700": {
    width: "40%",
  },

  "@bq-450": {
    width: "45%",
  },
});

export const Stamp = styled(Image, {
  width: "110px",
  height: "110px",

  objectFit: "contain",

  "@bq-450": {
    width: "90px",
    height: "90px",
  },
});

export const CheckIcon = styled(BsCheck2Circle, {
  color: "#DEBB3E",

  flexShrink: 0,

  marginRight: "8px",
});

export const Overlay = styled("div", {
  position: "absolute",
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,

  linearGradient:
    "180deg, rgba(17, 60, 95, 0.50) 0%, rgba(17, 60, 95, 0.70) 0.01%, rgba(17, 60, 95, 0.95) 70.31%, #113C5F 100%",
});
