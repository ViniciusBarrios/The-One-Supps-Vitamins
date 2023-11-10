import { styled } from "stitches";

export const Container = styled("div", {
  width: "400px",

  "@bq-900": {
    width: "350px",
  },

  "@bq-800": {
    width: "100%",
    maxWidth: "450px",
  },

  flexShrink: 0,

  padding: "20px",

  borderRadius: "7px",

  border: "2px solid #000000",
  background: "#ffffff",
});

export const Title = styled("h3", {
  fontSize: "17px",
  fontWeight: 700,
  fontStyle: "italic",
});

export const SubTitle = styled("h4", {
  fontSize: "14px",
  fontWeight: 600,

  marginTop: "5px",

  opacity: 0.6,
});

export const Spacer = styled("div", {
  width: "100%",
  height: "5px",

  margin: "12px 0",

  borderRadius: "9999px",

  backgroundColor: "#000000",
});

export const Head = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "> strong": {
    fontSize: "15px",
    fontWeight: 600,
  },
});

export const Content = styled("div", {
  width: "100%",

  position: "relative",

  "& > .items": {
    overflow: "hidden",
  },

  "& > .view_more": {
    fontSize: "14px",
    fontWeight: 600,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,

    paddingTop: "8px",

    boxShadow: "0 -5px 10px 5px #ffffff",

    backgroundColor: "#ffffff",
    color: "#113C5F",

    "&:hover": {
      textDecoration: "underline",
    },
  },
});

export const Row = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  fontSize: "11px",
  fontWeight: 600,

  "> strong": {
    width: "175px",

    fontWeight: 600,

    whiteSpace: "nowrap",
  },
});

export const Text = styled("p", {
  fontSize: "12px",
  fontWeight: 500,
});
