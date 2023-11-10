import { BsCheck2Circle } from "react-icons/bs";

import { styled } from "stitches";

import Image from "@infra/Image";

export const Container = styled("div", {
  width: "100%",
  maxWidth: "250px",

  flex: 1,

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const Ingredient = styled("div", {
  width: "160px",
  height: "160px",

  boxShadow: "0px 0px 10px rgba(70, 79, 89, 0.5)",
  backgroundColor: "#ffffff",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: "999999px",

  position: "relative",
});

export const IngredientImg = styled(Image, {
  borderRadius: "999999px",
});

export const Name = styled("strong", {
  fontSize: "20px",
  fontWeight: 600,

  textAlign: "center",

  marginTop: "15px",

  color: "#113C5F",
});

export const ScientificName = styled("span", {
  fontSize: "14px",
  fontWeight: 600,

  fontStyle: "italic",

  textAlign: "center",

  marginTop: "5px",

  color: "#113C5F",

  opacity: 0.7,
});

export const CheckList = styled("div", {
  width: "100%",

  marginTop: "15px",

  display: "flex",
  flexDirection: "column",
  gap: "15px",
});

export const ListItem = styled("div", {
  display: "flex",
  alignItems: "center",

  "> span": {
    fontSize: "13px",
    fontWeight: 600,
  },
});

export const CheckIcon = styled(BsCheck2Circle, {
  fontSize: "22px",

  flexShrink: 0,

  color: "#C29A0C",

  marginRight: "8px",
});
