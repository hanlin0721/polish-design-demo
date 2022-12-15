import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import { useEffect, useState } from "react";
import Head from "next/head";
import '../styles/globals.css'

import StatusLoading from "../components/StatusLoading";
import MapsLoading from "../components/MapsLoading";
import PageLoading from "../components/PageLoading";
import Nav from "../components/Nav";
import StartWithUs from "../components/StartWithUs";
import GiftBox from "../components/GiftBox";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {

  const [isAppStoreInit, setAppStoreInit] = useState(false);

  useEffect(() => {
    setAppStoreInit(true);
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <title key="title">
          National Taiwan University Open House
        </title>
        <meta
          key="description"
          name="description"
          content="Founded in 1928, NTU is the most prestigious university in Taiwan, and is among the top 100 universities in the world. Guided by independent thought and a pioneering spirit of enterprise, students at NTU become a part of the nation’s richest center of learning and receive a diverse and superlative education."
        />
        <meta
          key="og_title"
          property="og:title"
          content="National Taiwan University Open House"
        />
        <meta
          key="og_description"
          property="og:description"
          content="Founded in 1928, NTU is the most prestigious university in Taiwan, and is among the top 100 universities in the world. Guided by independent thought and a pioneering spirit of enterprise, students at NTU become a part of the nation’s richest center of learning and receive a diverse and superlative education."
        />
      </Head>
      <ChakraProvider theme={theme}>
        {isAppStoreInit && (
          <>
            <div id="locked" style={{ overflow: "hidden" }}>
              <Component {...pageProps} />
              <Nav />
              <StartWithUs />
              <GiftBox />
            </div>
            <StatusLoading />
            <MapsLoading />
            <PageLoading />
          </>
        )}
      </ChakraProvider>
    </>
  );
}

export default appWithTranslation(MyApp)
