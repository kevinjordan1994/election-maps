import { useSelector } from "react-redux";

export default function TopBar() {
  const selectedMap = useSelector((state) => state.maps.selectedMap);

  const bar = (
    <>
      <iframe
        class="ap-embed"
        title="Live election results via the Associated Press"
        src={selectedMap?.bar}
        width="100%"
        frameborder="0"
        scrolling="no"
        marginheight="100%"
      ></iframe>
      <script
        defer
        src="https://interactives.ap.org/election-results/assets/microsite/resizeClient.js"
      ></script>
    </>
  );

  return <>{selectedMap.bar && bar}</>;
}
