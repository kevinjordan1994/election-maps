import { useSelector } from "react-redux";
import styles from "./Widget.module.css";

export default function Widget() {
  const selectedMap = useSelector((state) => state.maps.selectedMap);

  const widget = (
    <section className={styles.widget_container}>
      <iframe
        className="ap-embed"
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
  );

  return widget;
}
