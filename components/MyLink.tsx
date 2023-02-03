import { LinkProps, Link as MuiLink } from "@mui/material";
import Link from "next/link";
// Define the Link props using generics
export type MyLinkProps = LinkProps<typeof Link>;

const MyLink = (props: MyLinkProps) => {
  return (
    <MuiLink {...props} component={Link}>
      {props.children}
    </MuiLink>
  );
};

export default MyLink;
