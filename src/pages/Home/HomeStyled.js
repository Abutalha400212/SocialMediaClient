import { Badge, Box, styled } from "@mui/material";

export const MediaBox = styled(Box)(({ theme }) => ({
  width: "100%",
  margin: "0 auto",
  borderRadius: "50px",
  overFlow: "hidden",
  "& textarea": {
    border: "none",
    outline: "none",
    width:"100%",
    fontSize: "1rem",
    padding: "1rem 2rem",
    background: "transparent",
    overflow: "auto",
    resize: "none",
    "&:: placeholder":{
    color:"#black",
    pb:0
  }
  },
  
}));
export const BadgeButton = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
