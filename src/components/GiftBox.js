import { Flex, Image, Center } from "@chakra-ui/react"
import giftBox from "../images/home/icons/gift.svg"
import appStore from "../store/store";
import { useRouter } from "next/router";
import { useCallback } from "react";

const GiftBox = () => {
    const { isAnimReady } = appStore;
    const router = useRouter()

    const isContactPage = router.pathname === "/contact"

    const isServicesPage = router.pathname === "/services"

    const isPolicyPage = router.pathname === "/privacy-policy"

    return (
        <>
            <Flex
                display={{ base: "none", sm: isContactPage || isServicesPage || isPolicyPage ? "none" : "block" }}
                pos={{ base: "none", sm: "fixed" }}
                right="42px"
                bottom="39px"
                cursor="pointer"
                opacity={isAnimReady ? "38%" : 0}
                transition="1s ease 1s"
                bg="blue.800"
                borderRadius="50%"
                w="65px"
                h="65px"
            >
                <a target="_blank" rel="noreferrer" style={{ color: "#8D98C0" }} href="https://hello.polish-design.com.tw/14?openExternalBrowser=1">
                    <Center h="100%">
                        <Image src={giftBox.src} />
                    </Center>
                </a>
            </Flex>
        </>
    )
}
export default GiftBox