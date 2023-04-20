import { RouterEvents, Paths, IProps } from "@/naming";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { userService } from "../services/service";
import { selectCount, signin, signout } from "./appSlice";
import Head from "next/head";
import { Nav } from "../components/Nav";

export interface IProperties {
  Component: Function;
  pageProps?: IProps;
}

export const AppComponent = ({ Component, pageProps }: IProperties) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const authorizedStatus = useSelector(selectCount);

  const hideContent = () => {
    if (authorizedStatus) {
      dispatch(signout());
    }
  };
  const showContent = () => {
    if (!authorizedStatus) {
      dispatch(signin());
    }
  };

  useEffect(() => {
    authCheck(router.asPath);
    router.events.on(RouterEvents.CHANGESTART, () => hideContent);
    router.events.on(RouterEvents.CHANGECOMPLETE, authCheck);

    return () => {
      router.events.off(RouterEvents.CHANGESTART, () => hideContent);
      router.events.off(RouterEvents.CHANGECOMPLETE, authCheck);
    };
  });

  function authCheck(url: string) {
    const publicPaths = [Paths.LOGIN.toString()];
    const path = url.split("?")[0];

    if (!userService.userValue && !publicPaths.includes(path)) {
      hideContent();
      router.push({
        pathname: Paths.LOGIN,
        query: { returnUrl: router.asPath },
      });
    } else {
      showContent();
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
          {authorizedStatus && <Component {...pageProps} />}
        </div>
      </div>
    </>
  );
};
