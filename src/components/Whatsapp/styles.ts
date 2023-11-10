import { BsWhatsapp } from "react-icons/bs";

import { styled } from "stitches";

export const Container = styled("section", {
  width: "100vw",
  maxWidth: "900px",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  padding: "40px 15px",

  margin: "0 auto",
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

export const Button = styled("a", {
  fontSize: "20px",
  fontWeight: 600,

  backgroundColor: "#25D366",
  color: "#ffffff",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: "7px",

  padding: "15px 20px",

  marginTop: "30px",

  "@bq-700": {
    fontSize: "17px",
  },
});

export const WhatsappIcon = styled(BsWhatsapp, {
  fontSize: "25px",
  marginRight: "10px",
});
