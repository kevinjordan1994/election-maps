import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mapsActions } from "../../store/maps";
import styles from "./Nav.module.css";

export default function Nav(props) {
  const mapTitles = useSelector((state) => state.maps.maps).map(
    (map) => map.title
  );
  const selectRef = useRef();
  const dispatch = useDispatch();

  const selectOptions = mapTitles.map((option) => {
    return (
      <option key={option} className={styles.option}>
        {option}
      </option>
    );
  });

  const changeSelectedMapHandler = () => {
    dispatch(mapsActions.selectMap(selectRef.current.value));
  };

  return (
    <nav className={styles.nav}>
      <select
        ref={selectRef}
        onChange={changeSelectedMapHandler}
        className={styles.select}
      >
        {selectOptions}
      </select>
    </nav>
  );
}
