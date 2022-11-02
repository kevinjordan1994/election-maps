import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mapsActions } from "../../store/maps";
import styles from "./Sidebar.module.css";

export default function SideBar(props) {
  const dispatch = useDispatch();
  const activeMap = useSelector((state) => state.maps.selectedMap);

  const mapLinks = props.maps.map((map) => {
    return (
      <div key={map.title}>
        <li onClick={changeMapHandler}>
          <a>{map.title}</a>
        </li>
        <div className={styles.map_link_container}></div>
      </div>
    );
  });

  function changeMapHandler(e) {
    dispatch(mapsActions.selectMap(e.target.textContent));
  }

  return (
    <nav className={styles.sidebar}>
      <ul>{mapLinks}</ul>
    </nav>
  );
}
