import { Box, VStack, Text, Link } from "@chakra-ui/react"
import appStore from "../store/store";
import { useLocalStorage } from "../utils/window";
import { useTranslation } from "next-i18next";

const CookiesNotice = () => {
    const { isAnimReady } = appStore;
    const [isAccepted, accept] = useLocalStorage(false, "p-ntuoh-cookie");
    const { t } = useTranslation("common");

    return (
        <VStack
            bg="brand.main"
            w="100%"
            h="125px"
            transition={`${isAccepted ? "0.3s ease 0s" : "1s ease 1s"}`}
            transform={`translateY(${!isAnimReady ? "100%" : isAccepted ? "100%" : "0%"})`}
            pos="fixed"
            left="0"
            bottom="0"
            p="15px"
            color="#fff"
            spacing="18px"
        >
            <Text fontSize="12px" fontWeight="600" maxW="710px" textAlign="center">
                {t("cookies-desc1")}
                <a target="_blank" style={{ color: "#8D98C0" }} href="https://www.ntu.edu.tw/english/copyright.html">
                    {t("privacy-link")}
                </a>
                {t("cookies-desc2")}
            </Text>
            <Box
                bg="#fff"
                color="#000"
                cursor="pointer"
                textAlign="center"
                w="248px"
                fontSize="14px"
                lineHeight="40px"
                fontWeight="bold"
                onClick={() => accept(true)}
            >
                Accept Cookies
            </Box>
        </VStack>
    )
}

export default CookiesNotice