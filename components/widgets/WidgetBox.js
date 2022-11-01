import Widget from "./Widget";
import styles from "./WidgetBox.module.css";

export default function WidgetBox() {
  return (
    <div className={styles.box}>
      <Widget />
    </div>
  );
}
