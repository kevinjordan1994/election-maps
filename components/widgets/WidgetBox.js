import { useSelector } from "react-redux";
import EarlyVoting from "./EarlyVoting";
import EarlyVotingGA from "./EarlyVotingGA";
import TopBar from "./TopBar";
import Widget from "./Widget";
import styles from "./WidgetBox.module.css";

export default function WidgetBox() {
  const selectedMap = useSelector((state) => state.maps.selectedMap);

  // const topClass = selectedMap.georgia ? styles.voting_top : styles.top;
  // const boxClass = selectedMap.florida ? styles.voting_box : styles.box;

  return (
    <div>
      <div className={styles.top}>{<TopBar />}</div>
      <div className={styles.box}>{<Widget />}</div>
    </div>
  );
}
