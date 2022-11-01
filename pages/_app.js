import { Provider } from "react-redux";
import SideBar from "../components/layout/SideBar";
import store from "../store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SideBar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
