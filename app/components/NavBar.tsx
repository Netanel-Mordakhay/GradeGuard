import { usePathname } from "next/navigation";
import {
  IconHome,
  IconBooks,
  IconLogout,
  IconSwitchHorizontal,
} from "@tabler/icons-react";
import classes from "../styles/NavBar.module.css";
import Link from "next/link";

{
  /* Dashboard links */
}
const data = [
  { link: "/", label: "Dashboard", icon: IconHome },
  { link: "/courses", label: "Courses", icon: IconBooks },
];

const NavBar = () => {
  const currentPath = usePathname();

  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={item.link === currentPath || undefined}
      href={item.link}
      key={item.label}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>{links}</div>

      <div className={classes.footer}>
        <a href="#" className={classes.link}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a href="#" className={classes.link}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
