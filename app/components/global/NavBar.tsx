import { usePathname } from "next/navigation";
import {
  IconHome,
  IconBooks,
  IconPencil,
  IconAlignJustified,
  IconLogout,
} from "@tabler/icons-react";
import { signOut } from "next-auth/react";
import classes from "../../styles/NavBar.module.css";
import Link from "next/link";
import ReportBug from "./ReportBug";

{
  /* Dashboard links */
}
const data = [
  { link: "/", label: "Dashboard", icon: IconHome },
  { link: "/courses", label: "Courses", icon: IconBooks },
  { link: "/exams", label: "Exams", icon: IconPencil },
  { link: "/todos", label: "To do", icon: IconAlignJustified },
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
      <ReportBug />
      <div
        className={classes.footer}
        onClick={() => signOut({ callbackUrl: "/login" })}
      >
        <a href="#" className={classes.link}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
