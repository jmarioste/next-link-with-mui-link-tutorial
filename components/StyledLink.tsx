import { styled } from "@mui/material/styles";
import MyLink, { MyLinkProps } from "./MyLink";

const StyledLink = styled(MyLink)<MyLinkProps>({});
StyledLink.defaultProps = {
  color: "seagreen",
  underline: "hover",
};

export default StyledLink;
