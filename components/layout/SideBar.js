import { useSelector } from "react-redux";
import styles from "./Sidebar.module.css";

export default function SideBar(props) {
  const maps = useSelector((state) => state.maps.maps);

  const mapLinks = maps.map((map) => {
    return <li>{map.title}</li>;
  });

  return (
    <nav className={styles.sidebar}>
      <ul>{mapLinks}</ul>
    </nav>
  );
}
