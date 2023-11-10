import { BsCheck2Circle } from "react-icons/bs";

import { styled } from "stitches";

export const Container = styled("div", {
  maxWidth: "300px",

  flex: 1,

  display: "flex",
  alignItems: "center",
});

export const Wrapper = styled("a", {
  transform: "scale(0.91)",

  padding: "30px 20px",
  marginTop: "10px",

  border: "2px solid #113C5F",

  borderRadius: "10px",

  backgroundColor: "#ffffff",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  textAlign: "center",

  position: "relative",

  transition: "200ms",

  "&:hover": {
    transform: "scale(0.93)",
  },
});

export const Discount = styled("div", {
  width: "70px",
  height: "70px",

  position: "absolute",
  top: "-25px",
  right: "-20px",

  color: "#ffffff",

  "> div": {
    position: "absolute",
    top: "50%",
    left: "50%",

    transform: "translate(-50%, -50%)",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    textAlign: "center",

    "> strong": {
      fontSize: "17px",
      fontWeight: 600,
    },

    "> span": {
      fontSize: "11px",
      fontWeight: 600,

      marginTop: "-2px",
    },
  },
});

export const Quantity = styled("h3", {
  fontSize: "35px",
  fontWeight: 600,

  color: "#113C5F",
});

export const TratamentDurarion = styled("h4", {
  fontSize: "17px",
  fontWeight: 500,

  color: "#113C5F",

  marginTop: "5px",

  zIndex: 2,
});

export const KitImg = styled("img", {
  width: "100%",
  maxHeight: "250px",

  objectFit: "contain",

  zIndex: 0,

  marginTop: "-10px",
  marginBottom: "-20px",
});

export const CostPerBottle = styled("strong", {
  fontSize: "40px",
  fontWeight: 500,

  display: "flex",
  alignItems: "center",

  position: "relative",

  color: "#113C5F",

  "> .currency": {
    marginRight: "4px",
  },

  "> .cost": {
    display: "flex",
    alignItems: "flex-start",

    "> .float": {
      fontSize: "18px",
      fontWeight: 600,

      marginTop: "3px",
      marginLeft: "2px",
    },
  },

  "> .bottle": {
    fontSize: "18px",
    fontWeight: 600,

    marginRight: "4px",

    whiteSpace: "nowrap",
  },
});

export const CheckList = styled("div", {
  marginTop: "10px",
});

export const ListItem = styled("div", {
  display: "flex",
  alignItems: "center",

  "> span": {
    fontSize: "15px",
    fontWeight: 600,

    color: "#113C5F",

    textAlign: "initial",
  },
});

export const CheckIcon = styled(BsCheck2Circle, {
  fontSize: "23px",

  flexShrink: 0,

  color: "#113C5F",

  marginRight: "5px",
});

export const Button = styled("button", {
  width: "100%",

  fontSize: "18px",
  fontWeight: 600,

  backgroundColor: "#113C5F",
  color: "#ffffff",

  marginTop: "15px",

  padding: "15px 10px",

  borderRadius: "7px",
});

export const CostKit = styled("p", {
  fontSize: "17px",
  fontWeight: 500,

  color: "#113C5F",

  "> span": {
    opacity: 0.8,
  },

  "> .from": {
    position: "relative",

    "&::before": {
      content: "",

      height: "2px",

      backgroundColor: "$primary-300",

      position: "absolute",
      top: "50%",
      right: "-2px",
      left: "-2px",

      borderRadius: "$full",

      transform: "translateY(-50%)",
    },
  },

  marginTop: "15px",
});
