import styles from "./Grid.module.css";

export default function Grid(props) {
  return <div className={styles.grid}>{props.children}</div>;
}
