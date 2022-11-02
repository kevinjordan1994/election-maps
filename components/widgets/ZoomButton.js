import { useSelector } from "react-redux";
import styles from "./ZoomButton.module.css";

export default function ZoomButton(props) {
  const zoomLevel = useSelector((state) => state.maps.zoomLevel);

  const changeZoomHandler = (e) => {
    props.onZoom(e.target.value);
  };

  return (
    <input
      className={styles.button}
      type="range"
      name="zoom"
      min="100"
      max="170"
      value={zoomLevel}
      onChange={changeZoomHandler}
    />
  );
}
