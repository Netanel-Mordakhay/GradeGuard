import { usePathname } from "next/navigation";
import {
  IconHome,
  IconBooks,
  IconClock,
  IconCopyCheck,
  IconAlignJustified,
  IconUser,
  IconLogout,
  IconMail,
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
  { link: "/todos", label: "Assignments & Exams", icon: IconAlignJustified },
  { link: "#", label: "Study Session", icon: IconClock },
  { link: "#", label: "My Quizs", icon: IconCopyCheck },
];

interface Props {
  onLinkClick?: () => void;
}

const NavBar = ({ onLinkClick }: Props) => {
  const currentPath = usePathname();

  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={item.link === currentPath || undefined}
      href={item.link}
      key={item.label}
      onClick={onLinkClick}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>{links}</div>
      <ReportBug />

      <div className={classes.footer}>
        <Link
          className={classes.link}
          data-active={"/profile" === currentPath || undefined}
          href="/profile"
          onClick={onLinkClick}
        >
          <IconUser className={classes.linkIcon} stroke={1.5} />
          <span>Account</span>
        </Link>

        <Link className={classes.link} href="/contact-us" onClick={onLinkClick}>
          <IconMail className={classes.linkIcon} stroke={1.5} />
          <span>Contact</span>
        </Link>

        <div onClick={() => signOut({ callbackUrl: "/login" })}>
          <a href="#" className={classes.link}>
            <IconLogout className={classes.linkIcon} stroke={1.5} />
            <span>Logout</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
