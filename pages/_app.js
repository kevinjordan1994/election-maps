import Nav from "../components/layout/Nav";
import { Provider } from "react-redux";
import store from "../store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Nav />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
