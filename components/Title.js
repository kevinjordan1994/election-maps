import { useSelector } from "react-redux";
import styles from "./Title.module.css";

export default function Title() {
  const selectedMap = useSelector((state) => state.maps.selectedMap);
  const isNationalSenate = selectedMap.title === "National Senate";

  return (
    isNationalSenate || <h1 className={styles.title}>{selectedMap.title}</h1>
  );
}
