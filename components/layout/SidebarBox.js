import SideBar from "./SideBar";
import styles from "./SidebarBox.module.css";

export default function SidebarBox() {
  return (
    <div className={styles.sidebar_box}>
      <SideBar />
    </div>
  );
}
