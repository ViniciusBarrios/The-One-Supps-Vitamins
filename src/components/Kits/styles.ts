import { BsStarFill } from "react-icons/bs";

import { styled } from "stitches";

export const Container = styled("section", {
  width: "100vw",
  maxWidth: "900px",

  margin: "0 auto",

  padding: "40px 15px",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const Title = styled("h3", {
  fontSize: "30px",
  fontWeight: 600,

  color: "#113C5F",

  textAlign: "center",

  "@bq-700": {
    fontSize: "25px",
  },
});

export const Wrapper = styled("div", {
  width: "100%",

  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",

  marginTop: "30px",

  "@bq-700": {
    flexDirection: "column-reverse",
  },
});

export const Reviews = styled("div", {
  marginTop: "30px",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  textAlign: "center",

  "> strong": {
    fontSize: "22px",
    fontWeight: 600,
  },

  "> div": {
    margin: "10px 0",
  },

  "> span": {
    fontSize: "16px",
    fontWeight: 500,

    opacity: 0.7,
  },
});

export const StarIcon = styled(BsStarFill, {
  fontSize: "35px",

  color: "#FFC700",

  margin: "0 3px",
});
