import { IoIosArrowDown } from "react-icons/io";

import { keyframes, styled } from "stitches";

import * as Accordion from "@radix-ui/react-accordion";

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

  color: "#ffffff",

  zIndex: 10,

  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});

export const Title = styled("h3", {
  fontSize: "30px",
  fontWeight: 600,

  textAlign: "center",

  "@bq-700": {
    fontSize: "25px",
  },
});

export const SubTitle = styled("h3", {
  fontSize: "17px",
  fontWeight: 500,

  marginTop: "10px",

  textAlign: "center",

  "@bq-700": {
    fontSize: "15px",
  },
});

export const AccordionRoot = styled(Accordion.Root, {
  width: "100%",
  maxWidth: "800px",

  borderRadius: "10px",

  backgroundColor: "#ffffff",

  boxShadow: "0 0px 15px #00000030",

  marginTop: "30px",
});

export const AccordionItem = styled(Accordion.Item, {
  overflow: "hidden",

  "&:first-child": {
    marginTop: 0,
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },

  "&:last-child": {
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
  },

  "&:focus-within": {
    position: "relative",
    zIndex: 1,
    boxShadow: "0 0 0 2px #c6d1da",
  },
});

export const StyledTrigger = styled(Accordion.Trigger, {
  width: "100%",

  padding: "18px 20px",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  textAlign: "start",

  fontSize: "17px",
  fontWeight: 500,

  cursor: "pointer",

  borderBottom: "1px solid #E0E7ED",
});

export const ArrowIcon = styled(IoIosArrowDown, {
  fontSize: "20px",

  fill: "#939EA9",

  flexShrink: 0,

  transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",

  marginLeft: "5px",

  "[data-state=open] &": {
    transform: "rotate(180deg)",
  },
});

export const slideDown = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" },
});

export const slideUp = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
});

export const Content = styled(Accordion.Content, {
  overflow: "hidden",

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});

export const ContentText = styled("p", {
  padding: "15px 20px",

  fontSize: "15px",
  fontWeight: 500,

  color: "#000000",
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
