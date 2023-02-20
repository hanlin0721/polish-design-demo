import { Box, Flex, Text } from "@chakra-ui/react"
import appStore from "../store/store";
import { useLocalStorage } from "../utils/window";
import { useTranslation } from "next-i18next";

const CookiesNotice = () => {
    const { isAnimReady } = appStore;
    const [isAccepted, accept] = useLocalStorage(false, "p-ntuoh-cookie");
    const { t } = useTranslation("common");

    return (
        <Flex
            bg="rgba(42,49,58,0.78)"
            w="776px"
            minH="82px"
            transition={`${isAccepted ? "0.3s ease 0s" : "1s ease 1s"}`}
            transform={{
                base: `translate(-50% ,${!isAnimReady ? "100%" : isAccepted ? "100%" : "-10%"})`,
                sm: `translate(-50% ,${!isAnimReady ? "100%" : isAccepted ? "100%" : "-30%"})`
            }}
            pos="fixed"
            left="50%"
            bottom="0"
            p="14px"
            color="#fff"
            spacing="18px"
            zIndex="15"
            justifyContent="center"
            borderRadius={{ base: "30px", sm: "41px" }}
            pl={{ base: "20px", sm: "33px" }}
            pr={{ base: "20px", sm: "28px" }}
            pt={{ base: "20px", sm: "21px" }}
            maxW={{ base: "305px", sm: "776px" }}
            flexDir={{ base: "column", sm: "row" }}
            alignItems="center"
        >
            <Text
                fontSize={{ base: "12px", sm: "14px" }}
                fontWeight="600"
                maxW={{ base: "265px", sm: "583px" }}
                mr={{ base: "0", sm: "18px" }}
                mb={{ base: "18px", sm: "0px" }}
            >
                {/* {t("cookies-desc1")} */}
                為提供您更多優質的內容，本網站使用 cookies 分析技術。若繼續閱覽本網站內容，即表示您同意我們使用 cookies，關於更多cookies資訊請閱讀我們的
                <a target="_blank" rel="noreferrer" style={{ textDecoration: "underline" }} href="/privacy-policy">
                    {/* {t("privacy-link")} */}
                    「隱私權政策」
                </a>
                。{/* {t("cookies-desc2")} */}
            </Text>

            <Box
                maxW="133px"
                bg="#fff"
                color="#000"
                cursor="pointer"
                textAlign="center"
                fontSize="16px"
                lineHeight="41px"
                h="41px"
                fontWeight="bold"
                w="248px"
                borderRadius="21px"
                onClick={() => accept(true)}
            >
                接受
            </Box>
        </Flex>
    )
}

export default CookiesNotice