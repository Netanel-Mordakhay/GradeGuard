import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url("https://149359637.v2.pressablecdn.com/wp-content/uploads/2021/08/Space-Earth-Wallpaper-About-Murals.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "50vw",
        height: "80vh",
      }}
    >
      Hello world
    </div>
  );
}
