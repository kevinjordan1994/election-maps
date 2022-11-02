import WidgetBox from "../components/widgets/WidgetBox";
import Grid from "../components/layout/Grid";
import SidebarBox from "../components/layout/SidebarBox";
import Title from "../components/Title";

const API_KEY = `rhoi8luXdqzFhrksISIpgW1MUB14Vmli`;

async function fetchElectionData() {
  try {
    const result = await fetch(
      `https://api.ap.org/v2/elections?apikey=${API_KEY}`
    );

    if (!result.ok) throw new Error("Failure to fetch data");

    const data = await result.json();

    console.log(data);
  } catch (err) {
    console.error(`Error! ${err.message}`);
  }
}

export default function Home() {
  return (
    <Grid>
      <WidgetBox />
      <SidebarBox />
      <Title />
    </Grid>
  );
}
