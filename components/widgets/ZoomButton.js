import { useRef } from "react";
import styles from "./ZoomButton.module.css";

export default function ZoomButton(props) {
  const zoomAmountRef = useRef();

  const changeZoomHandler = () => {
    props.onZoom(zoomAmountRef.current.value);
  };

  return (
    <input
      className={styles.button}
      type="range"
      name="zoom"
      min="100"
      max="170"
      ref={zoomAmountRef}
      onChange={changeZoomHandler}
    />
  );
}
