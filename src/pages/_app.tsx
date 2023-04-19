import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { userService } from "../services/service";
import { Nav } from "../components/Nav";
import { RouterEvents, Paths, IProps } from "@/naming";

import '../styles/globals.css';

interface IProperties {
  Component: React.ComponentClass,
  pageProps: IProps
}

export default function App({ Component, pageProps }:IProperties) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    authCheck(router.asPath);

    const hideContent = () => setAuthorized(false);
    router.events.on(RouterEvents.CHANGESTART, hideContent);

    router.events.on(RouterEvents.CHANGECOMPLETE, authCheck);

    return () => {
      router.events.off(RouterEvents.CHANGESTART, hideContent);
      router.events.off(RouterEvents.CHANGECOMPLETE, authCheck);
    };
  }, []);

  function authCheck(url: string) {
    const publicPaths = [Paths.LOGIN.toString()];
    const path = url.split("?")[0];

    if (!userService.userValue && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: Paths.LOGIN,
        query: { returnUrl: router.asPath },
      });
    } else {
      setAuthorized(true);
    }
  }

  return (
    <>
      <Head>
        <title>JWT Authentication</title>
      </Head>
      <div>
        <Nav />
        <div className="container pt-4 pb-4">
          {authorized && <Component {...pageProps} />}
        </div>
      </div>
      {/* <Script src="https://cdn.jsdelivr.net/npm/chart.js"></Script> */}
    </>
  );
}
