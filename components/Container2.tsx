import Link from "./MyLink";
// MyLink usage
const Container2 = () => {
  return (
    <div>
      <Link
        prefetch={false}
        scroll={false}
        sx={{ color: "warning.main" }}
        href={{ pathname: "/page1" }} //use custom _href prop
      >
        hello
      </Link>
      <Link
        prefetch={false}
        scroll={false}
        sx={{ color: "warning.main" }}
        href="/page2" //Both string and URLObject are accepted
      >
        hello
      </Link>
    </div>
  );
};
export default Container2;
