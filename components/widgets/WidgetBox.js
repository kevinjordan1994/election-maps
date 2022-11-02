import TopBar from "./TopBar";
import Widget from "./Widget";
import styles from "./WidgetBox.module.css";

export default function WidgetBox() {
  return (
    <div>
      <div className={styles.top}>
        <TopBar />
      </div>
      <div className={styles.box}>
        <Widget />
      </div>
    </div>
  );
}
