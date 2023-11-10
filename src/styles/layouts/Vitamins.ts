import { styled } from "stitches";

import Image from "@infra/Image";

export const Stamps = styled("section", {
  width: "100%",
  maxWidth: "900px",

  margin: "40px auto 0 auto",

  padding: "0 15px",

  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",

  gap: "20px",

  "@bq-800": {
    width: "100%",
    maxWidth: "600px",
  },
});

export const Stamp = styled(Image, {
  width: "100px",
  height: "100px",

  objectFit: "contain",

  "@bq-600": {
    width: "90px",
    height: "90px",
  },
});

export const Informations = styled("div", {
  width: "100%",
  maxWidth: "900px",

  margin: "0 auto",

  padding: "40px 15px",

  display: "flex",
  alignItems: "center",
  gap: "20px",

  "@bq-800": {
    flexDirection: "column",
  },

  "& > .informations": {
    "@bq-800": {
      width: "100%",
      maxWidth: "450px",

      display: "flex",
      flexDirection: "column",
      alignItems: "center",

      textAlign: "center",
    },
  },

  "& > .informations > h2": {
    fontSize: "25px",
    fontWeight: 700,

    color: "#113C5F",

    "@bq-900": {
      fontSize: "22px",
    },

    "@bq-600": {
      fontSize: "20px",
    },
  },

  "& > .informations > div": {
    marginTop: "15px",

    "& > p": {
      fontSize: "15px",
      fontWeight: 500,

      marginTop: "10px",

      "@bq-900": {
        fontSize: "14px",
      },

      "@bq-600": {
        fontSize: "13px",
      },
    },
  },
});
