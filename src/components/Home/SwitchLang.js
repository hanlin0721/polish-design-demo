import { useRouter } from "next/router";
import { useWindowLoad } from "../../utils/window";
import { Flex, Text, Box } from "@chakra-ui/react";
import appStore from "../../store/store";
import api from "../../store/api";

function SwitchLang({ ...props }) {
  const router = useRouter();
  const { locale } = router;

  const switchLang = async () => {
    const newLocale = locale === "en" ? "zh-TW" : "en";
    const { pathname } = window.location;
    if (newLocale === "zh-TW") {
      window.location.href = window.location.pathname.replace(
        pathname,
        "/zh-TW" + pathname
      );
    } else {
      window.location.href = window.location.pathname.replace("/en", "");
    }
  };

  return (
    <Flex
      cursor="pointer"
      fontSize="16px"
      onClick={switchLang}
      justify="center"
    >
      <Text opacity={locale === "en" ? 1 : 0.5}>English</Text>
      <Text mx={2}>/</Text>
      <Text opacity={locale === "zh-TW" ? 1 : 0.5}>中文</Text>
    </Flex>
  );
}

export default SwitchLang;
