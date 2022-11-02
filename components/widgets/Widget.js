import { useDispatch, useSelector } from "react-redux";
import { mapsActions } from "../../store/maps";
import styles from "./Widget.module.css";
import ZoomButton from "./ZoomButton";

export default function Widget() {
  const selectedMap = useSelector((state) => state.maps.selectedMap);
  const zoomAmount = useSelector((state) => state.maps.zoomLevel);
  const dispatch = useDispatch();

  const changeWidgetScale = (amount) => {
    dispatch(mapsActions.setZoomLevel(+amount));
  };

  const widget = (
    <>
      {/* <ZoomButton onZoom={changeWidgetScale} /> */}
      <section className={styles.widget_container}>
        <iframe
          className="ap-embed map"
          style={{ transform: `scale(${zoomAmount / 100})` }}
          src={selectedMap.widget}
          width="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="100%"
        ></iframe>
        <script
          defer
          src="https://interactives.ap.org/election-results/assets/microsite/resizeClient.js"
        ></script>
      </section>
    </>
  );

  return <>{widget}</>;
}
