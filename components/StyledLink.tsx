import { styled } from "@mui/material/styles";
import { Link, LinkProps } from "@mui/material";
import NextLink from "next/link";
// Use generics when customizing MuiProps and add the component property
type Props = LinkProps<typeof NextLink, { component?: typeof NextLink }>;
// Assign the Props to the styled component
const StyledLink = styled(Link)<Props>({});
StyledLink.defaultProps = {
  // Use NextLink as default component
  component: NextLink,
  color: "seagreen",
  underline: "hover",
};

export default StyledLink;
