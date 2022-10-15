import { useRef } from "react";
import styles from "./Nav.module.css";

export default function Nav(props) {
  const dummyWidgetOptions = [`Governor`, `Senate`, `House`];
  const selectRef = useRef();

  const selectOptions = dummyWidgetOptions.map((option) => {
    return (
      <option key={option} className={styles.option}>
        {option}
      </option>
    );
  });

  const changeSelectedMapHandler = () => {
    console.log(selectRef.current.value);
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
