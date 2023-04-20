import { Provider } from "react-redux";
import store from "@/store/store";
import { AppComponent, IProperties } from "./appComponent";
import "../styles/globals.css";

export default function App(pageProps: IProperties) {
  return (
    <Provider store={store}>
      <AppComponent {...pageProps} />
    </Provider>
  );
}
