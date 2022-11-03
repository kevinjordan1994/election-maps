import { useSelector } from "react-redux";

export default function EarlyVoting() {
  const selectedMap = useSelector((state) => state.maps.selectedMap);

  const earlyVotingFlorida = (
    <div>
      <div>
        <iframe
          class="ap-embed"
          title="Live election results via the Associated Press"
          src={selectedMap?.florida}
          width="100%"
          frameborder="0"
          scrolling="yes"
          marginheight="100%"
        ></iframe>
        <script
          defer
          src="https://interactives.ap.org/election-results/assets/microsite/resizeClient.js"
        ></script>
      </div>
    </div>
  );

  return earlyVotingFlorida;
}
