import { Provider } from "react-redux";
import store from "@/store/store";
import { AppComponent, IProperties } from "./appComponent";
import GlobalStyles from "../styles/globals";

import { Nav } from "../components/Nav";

import Head from "next/head";

export default function App(pageProps: IProperties) {
  return (
    <Provider store={store}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
        <title>JWT Authentication</title>
      </Head>
      <GlobalStyles />
      <Nav />
      <div>
        <AppComponent {...pageProps} />
      </div>
    </Provider>
  );
}
