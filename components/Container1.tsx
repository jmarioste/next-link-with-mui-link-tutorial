import { Link as MuiLink } from "@mui/material";
import NextLink from "next/link";

const Container = () => {
  return (
    <div>
      {/* This will use "prop forwarding" and MuiLink will automatically have the props of NextLink */}
      <MuiLink component={NextLink} prefetch={false} href={"/page1"}>
        hello
      </MuiLink>
      {/* However, href using a URLObject results in a type error */}
      <MuiLink
        component={NextLink}
        prefetch={false}
        // href={{ pathname: "/page1" }} //type error
        href="/page1"
      >
        hello
      </MuiLink>
    </div>
  );
};

export default Container;
