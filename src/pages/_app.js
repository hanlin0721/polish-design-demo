import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import { useEffect, useState } from "react";
import { useRouter } from "next/router"
import Head from "next/head";
import '../styles/globals.css'

import HomeNav from "../components/Home/HomeNav.js";
import StatusLoading from "../components/StatusLoading.js";
import MapsLoading from "../components/MapsLoading.js";
import PageLoading from "../components/PageLoading.js";
import Nav from "../components/Nav.js";
import StartWithUs from "../components/StartWithUs.js";
import GiftBox from "../components/GiftBox.js";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {

  const [isAppStoreInit, setAppStoreInit] = useState(false);
  const router = useRouter()

  const isContactPaeg = () => {
    return router.asPath === "/contact"
  }

  const isWorkPage = () => {
    return router.asPath === "/work"
  }

  const showWhiteLogo = () => {
    return isWorkPage() || isContactPaeg()
  }

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
          磨人設計 Polish Design - We keep polish all day !
        </title>
        <meta
          key="description"
          name="description"
          content="Polish Design. 是一家提供數位解決方案的軟體設計公司，致力於為企業開發創意、行得通的數位產品，以實現任何商業挑戰及有趣的點子。"
        />
        <meta
          key="og_title"
          property="og:title"
          content="磨人設計 Polish Design - We keep polish all day !"
        />
        <meta
          key="og_description"
          property="og:description"
          content="Polish Design. 是一家提供數位解決方案的軟體設計公司，致力於為企業開發創意、行得通的數位產品，以實現任何商業挑戰及有趣的點子。"
        />
      </Head>
      <ChakraProvider theme={theme}>
        {isAppStoreInit && (
          <>
            <div id="locked" style={{ overflow: "hidden" }}>
              <Component {...pageProps} />
              <StartWithUs />
              <GiftBox />
            </div>
            <HomeNav isWhite={showWhiteLogo()} />
            <Nav />
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
