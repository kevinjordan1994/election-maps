import Tabs from "../tabs/Tabs";
import SideBar from "./SideBar";
import styles from "./SidebarBox.module.css";
import { useSelector } from "react-redux";

export default function SidebarBox() {
  const maps = useSelector((state) => state.maps.maps);
  const filterKeyword = useSelector((state) => state.maps.filterKeyword);

  const filteredMaps = maps.filter((map) => map.keyword === filterKeyword);

  return (
    <div className={styles.sidebar_box}>
      <Tabs />
      <SideBar maps={filteredMaps} />
    </div>
  );
}
