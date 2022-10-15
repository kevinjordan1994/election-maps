import { widgets } from "./Widgets";
import styles from "./Widget.module.css";

export default function Widget() {
  return (
    <>
      <section className={styles.widget_container}>
        <iframe
          className="ap-embed"
          src={widgets[0].widget}
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
}
