import styles from "./ZoomButton.module.css";

export default function ZoomButton(props) {
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
      onChange={changeZoomHandler}
    />
  );
}
