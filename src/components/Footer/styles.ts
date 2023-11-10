import { styled } from "stitches";

export const Container = styled("footer", {
  width: "100%",
  maxWidth: "900px",

  margin: "0 auto",

  borderTop: "2px dashed #00000033",

  padding: "15px",

  "& > p": {
    fontSize: "14px",
    fontWeight: 500,

    opacity: 0.6,
  },

  "& > .business_info": {
    marginTop: "10px",
  },
});
