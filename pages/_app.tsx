import React from "react";
import { AppProps } from "next/app";

import "@styles/global.css";
import "@styles/vars.css";
import Appbar from "@components/appbar";


function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
      <>
      <Appbar/>
        <Component {...pageProps} />
      </>
    );
}

export default MyApp;
