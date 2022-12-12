import { Box, Flex, Image, Text, HStack } from "@chakra-ui/react";
import HomeHeader from "../components/Home/HomeHeader.js";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {

  return (
    <Box bgColor="#fff">
      <style dangerouslySetInnerHTML={{ __html: "body { overflow: auto }" }} />
      <HomeHeader />
    </Box>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}