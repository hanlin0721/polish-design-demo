import Router from "next/router";
import { useState, useEffect } from "react";
import { Spinner, Flex } from "@chakra-ui/react";

function PageLoading() {
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true);
  };
  const end = () => {
    setTimeout(() => setLoading(false), 500);
  };
  useEffect(() => {
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <Flex
      id="page-loading"
      pointerEvents={loading ? "visible" : "none"}
      zIndex="10002"
      justify="center"
      align="center"
      pos="fixed"
      left="0"
      top="0"
      w="100vw"
      h="100vh"
      bgColor="blue.50"
      opacity={loading ? 1 : 0}
      transition={"0.5s ease"}
    >
      <Spinner w="15px" h="15px" speed="0.3s" />
    </Flex>
  );
}

export default PageLoading;
