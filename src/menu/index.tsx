import HomeIcon from "@mui/icons-material/Home";

export type MenuItem = {
  key: string;
  text: string;
  href: string;
  title: string;
  Icon: JSX.Element;
};

export const Home: MenuItem = {
  key: "home",
  text: "casino",
  href: "/",
  title: "Marvel Casino",
  Icon: <HomeIcon />,
};

export const menuItems: MenuItem[] = [Home];
