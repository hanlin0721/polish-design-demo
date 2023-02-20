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
// import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [isAppStoreInit, setAppStoreInit] = useState(false);
  const showWhiteLogo = router.pathname === "/contact" || router.pathname === "/work"

  useEffect(() => {
    setAppStoreInit(true);
  }, []);

  return (
    <>
      <Head>
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
        <meta
          key="og:image"
          property="og:image"
          content="https://polish-design-demo.zeabur.app/og.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#717c9a" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="stylesheet" href="https://use.typekit.net/pxc5lqp.css" />
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
      </Head>
      <ChakraProvider theme={theme}>
        {isAppStoreInit && (
          <>
            <div id="locked" style={{ overflow: "hidden" }}>
              <Component {...pageProps} />
              <StartWithUs />
              <GiftBox />
            </div>
            <HomeNav isWhite={showWhiteLogo} />
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

export default MyApp
