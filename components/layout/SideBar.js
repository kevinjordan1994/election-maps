import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mapsActions } from "../../store/maps";
import styles from "./Sidebar.module.css";

export default function SideBar(props) {
  const dispatch = useDispatch();
  const activeMap = useSelector((state) => state.maps.selectedMap);

  const mapLinks = props.maps.map((map) => {
    return (
      <>
        <li key={map.title} onClick={changeMapHandler}>
          <a>{map.title}</a>
        </li>
        <div
          key={map.title + "underline"}
          className={styles.map_link_container}
        ></div>
      </>
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
