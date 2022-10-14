import { widgets } from "./Widgets";

export default function Widget() {
  return (
    <>
      <h1>{widgets[0].title}</h1>
      <div>
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
      </div>
    </>
  );
}
