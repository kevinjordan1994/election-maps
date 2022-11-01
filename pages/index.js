import { useEffect } from "react";
import Widget from "../components/widgets/Widget";
import SideBar from "../components/layout/SideBar";
import Grid from "../components/layout/Grid";

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
      <div>
        <Widget />
      </div>
      <SideBar />
    </Grid>
  );
}
