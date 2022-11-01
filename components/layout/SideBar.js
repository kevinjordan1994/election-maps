import { useDispatch, useSelector } from "react-redux";
import { mapsActions } from "../../store/maps";
import styles from "./Sidebar.module.css";

export default function SideBar(props) {
  const maps = useSelector((state) => state.maps.maps);
  const dispatch = useDispatch();

  const changeMapHandler = (e) => {
    dispatch(mapsActions.selectMap(e.target.textContent));
  };

  const mapLinks = maps.map((map) => {
    return (
      <li key={map.title} onClick={changeMapHandler}>
        {map.title}
      </li>
    );
  });

  return (
    <nav className={styles.sidebar}>
      <ul>{mapLinks}</ul>
    </nav>
  );
}
