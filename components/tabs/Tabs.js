import { useDispatch, useSelector } from "react-redux";
import { mapsActions } from "../../store/maps";
import styles from "./Tabs.module.css";

export default function Tabs() {
  const dispatch = useDispatch();
  const keyword = useSelector((state) => state.maps.filterKeyword);

  const tabs = ["Florida", "Georgia", "National"];

  const tabElements = tabs.map((tab) => {
    const classes = tab === keyword ? styles.active_tab : "";
    return <p className={classes}>{tab}</p>;
  });

  const changeTabsHandler = (e) => {
    dispatch(mapsActions.setFilterKeyword(e.target.textContent));
  };

  return (
    <div className={styles.tabs} onClick={changeTabsHandler}>
      {tabElements}
    </div>
  );
}
