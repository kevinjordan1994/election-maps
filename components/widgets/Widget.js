import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Widget.module.css";
import ZoomButton from "./ZoomButton";

export default function Widget() {
  const selectedMap = useSelector((state) => state.maps.selectedMap);
  const [zoomAmount, setZoomAmount] = useState(1);

  const changeWidgetScale = (amount) => {
    setZoomAmount(+amount / 100);
  };

  const widget = (
    <>
      <ZoomButton onZoom={changeWidgetScale} />
      <section className={styles.widget_container}>
        <iframe
          className={`ap-embed`}
          style={{ transform: `scale(${zoomAmount})` }}
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

  return widget;
}
