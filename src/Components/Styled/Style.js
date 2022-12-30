import styled from "@emotion/styled";
import { Link } from "@mui/icons-material";
import { Box } from "@mui/material";

export const LinkBox = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "black",
}));

export const ModalBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  padding: 25,
  overflowY: "scroll",
  maxHeight: "85%",
  marginTop: "50px",
  marginBottom: "50px",
}));
export const FlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center"
}));
