import { styled } from "stitches";

export const Container = styled("section", {
  width: "100%",
  maxWidth: "900px",

  margin: "0 auto",

  padding: "0 15px 40px 15px",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "@bq-700": {
    maxWidth: "450px",
  },
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

export const SubTitle = styled("h4", {
  fontSize: "17px",
  fontWeight: 500,

  textAlign: "center",

  marginTop: "8px",

  "@bq-700": {
    fontSize: "15px",
  },
});

export const Wrapper = styled("div", {
  width: "100%",

  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  columnGap: "20px",
  rowGap: "40px",

  marginTop: "40px",
});
