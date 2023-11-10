import { styled } from "stitches";

import bg_img from "@statics/imgs/bg-bpf.png";

export const Container = styled("section", {
  width: "100vw",

  position: "relative",

  padding: "40px 15px",

  display: "flex",
  justifyContent: "center",

  backgroundImage: `url(${bg_img.src})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
});

export const Wrapper = styled("div", {
  width: "100%",
  maxWidth: "900px",

  color: "#ffffff",

  zIndex: 10,

  display: "flex",
  alignItems: "center",
  flexDirection: "column",

  "@bq-700": {
    maxWidth: "450px",
  },
});

export const Title = styled("h3", {
  fontSize: "30px",
  fontWeight: 600,

  textAlign: "center",

  "@bq-700": {
    fontSize: "25px",
  },
});

export const Content = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "25px",

  padding: "30px 0",

  "@bq-700": {
    flexDirection: "column",

    textAlign: "center",
  },
});

export const Image = styled("img", {
  maxWidth: "250px",

  "@bq-700": {
    maxWidth: "200px",
  },
});

export const Description = styled("p", {
  fontSize: "20px",
  fontWeight: 500,

  "@bq-800": {
    fontSize: "17px",
  },
});

export const Overlay = styled("div", {
  position: "absolute",
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,

  linearGradient:
    "180deg, #113C5F 0%, rgba(17, 60, 95, 0.80) 48.44%, #113C5F 100%",
});
