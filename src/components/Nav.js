import appStore from "../store/store";
import { Box, Image, Flex, Text, VStack } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
import homeLogoWhite from "../images/home/logo_white.png"
import useControl from "../store/useControl";
import PolishMans from "../images/common/polish-mans.png"
import { useDeviceType } from "../utils/window.js"
import Subscription from "./Nav/Subscription";
import SocialLinks from "./Nav/SocialLinks";

const NavFooter = () => {
    const router = useRouter();
    const { locale } = router;
    const { t } = useTranslation("common");
    return (
        <>
            <VStack
                w="100%"
                fontSize="16px"
                justify="center"
                align="center"
                fontWeight="bold"
                spacing="25px"
                color="#fff"
                mb={{ base: "17%", sm: "8.3%" }}
            >
                <Link href="https://polish-design.com.tw/">
                    <a style={{ display: "block", width: "100%" }} target="_blank">
                        <Box onClick={() => (appStore.isMenu = false)}>
                            <Text fontSize="16px" fontWeight="normal">
                                {t("nav.polish-2nd-anniversary")}
                            </Text>
                        </Box>
                    </a>
                </Link>
                <Link href="/privacy-policy">
                    <a style={{ display: "block", width: "100%" }}>
                        <Box onClick={() => (appStore.isMenu = false)}>
                            <Text fontSize="16px" fontWeight="normal">
                                {t("nav.term-and-condition")}
                            </Text>
                        </Box>
                    </a>
                </Link>
            </VStack>

            <Text fontSize="16px" color="rgba(255,255,255,0.5)" mb={{ base: "32px", sm: "" }}>
                ©Polish Design
            </Text>
        </>
    );
};

const NavContent = () => {
    const { isMenu, lives, mapExp } = appStore;
    const [device] = useDeviceType()
    const { t } = useTranslation("common");
    const router = useRouter();

    const goScene = useControl((state) => state.goScene);
    return (
        <Box
            zIndex="10001"
            pos="fixed"
            h="100%"
            w="100%"
            left="0"
            top="0"
            pointerEvents={isMenu ? "visible" : "none"}
            opacity={isMenu ? 1 : 0}
            transition={isMenu ? "0s" : "0.3s ease"}
            boxShadow="0 3px 6px rgba(0, 0, 0, .16)"
            overflowY="hidden"
        >
            <Box
                bgColor={{ base: "rgba(0, 0, 0, 0.65)", md: "transparent" }}
                w="100%"
                h="100%"
                onClick={() => (appStore.isMenu = false)}
            />

            <Box
                pos="absolute"
                zIndex="1"
                left="0"
                w={{ base: "100%", sm: "100%" }}
                pr={{ base: "0%", sm: "30%" }}
                h="100%"
                top="0"
                bgColor="blue.900"
                backdropFilter="blur(30px)"
                transform={`translateX(${isMenu ? "0%" : "-100%"})`}
                transition="0.3s ease"
                overflow={{ base: "scroll", lg: "hidden" }}
            >
                <Flex
                    h="100%"
                    flexDir={{ base: "column", lg: "row" }}
                >
                    {/* Left Nav */}
                    <Box flex={1.28}>
                        <Box
                            w="100%"
                            h="100%"
                            pl={{ base: "9%", sm: "30%" }}
                            pt={{ base: "8%", sm: "12.35%" }}
                        >
                            <Box>
                                <Image src={homeLogoWhite.src} alt="homeLogoWhite" />
                            </Box>

                            <Flex
                                color="#FFF"
                                mt="11%"
                                flexDir={{ base: "row", sm: "column" }}
                                alignItems={{ base: "center", sm: "flex-start" }}
                            >
                                <Link href="/work">
                                    <a style={{ display: "block" }}>
                                        <Box
                                            onClick={() => (appStore.isMenu = false)}
                                        >
                                            <Text
                                                fontSize={{ base: "30px", sm: "64px" }}
                                                fontWeight="bold"
                                            >
                                                Portfolio
                                            </Text>
                                        </Box>
                                    </a>
                                </Link>
                                <Text
                                    fontSize="16px"
                                    style={{ "opacity": 0.7 }}
                                    ml={{ base: "13px", sm: "0px" }}
                                    pt={{ base: "4px", sm: "" }}
                                >
                                    作品集
                                </Text>
                            </Flex>

                            {/* <Flex
                                color="#FFF"
                                mt="8.4%"
                                flexDir={{ base: "row", sm: "column" }}
                                alignItems={{ base: "center", sm: "flex-start" }}
                            >
                                <Text
                                    fontSize={{ base: "30px", sm: "64px" }}
                                    fontWeight="bold"
                                >
                                    Resources
                                </Text>
                                <Text
                                    fontSize="16px"
                                    style={{ "opacity": 0.7 }}
                                    ml={{ base: "13px", sm: "0px" }}
                                    pt={{ base: "4px", sm: "" }}
                                >
                                    部落格
                                </Text>
                            </Flex> */}

                            <VStack
                                w="100%"
                                mt="15.2%"
                                fontSize="16px"
                                justify="center"
                                align="center"
                                fontWeight="bold"
                                spacing="28px"
                                color="#fff"
                            >
                                <Link href="/">
                                    <a style={{ display: "block", width: "100%" }}>
                                        <Box onClick={() => (appStore.isMenu = false)}>
                                            <Text fontSize="20px" fontWeight="normal">
                                                {t("home-2.home-link")}
                                            </Text>
                                        </Box>
                                    </a>
                                </Link>
                                <Link href="/services">
                                    <a style={{ display: "block", width: "100%" }}>
                                        <Box onClick={() => (appStore.isMenu = false)}>
                                            <Text fontSize="20px" fontWeight="normal">
                                                {t("nav.how-we-do")}
                                            </Text>
                                        </Box>
                                    </a>
                                </Link>
                                <Link href="/contact">
                                    <a style={{ display: "block", width: "100%" }}>
                                        <Box onClick={() => (appStore.isMenu = false)}>
                                            <Text fontSize="20px" fontWeight="normal">
                                                {t("nav.start-with-us")}
                                            </Text>
                                        </Box>
                                    </a>
                                </Link>
                            </VStack>
                        </Box>
                    </Box>

                    {/* Right Nav */}
                    <Box
                        flex={1}
                        w="100%"
                        borderLeft={{ base: "0", sm: "1px" }}
                        borderColor="rgba(255,255,255,0.15)"
                        alignSelf={{ base: "start", sm: "end" }}
                    >
                        <Box
                            position="relative"
                            mt={{ base: "90px", sm: "" }}
                            pl={{ base: "9%", sm: "30%", lg: "7%" }}
                            pr="50px"
                            pb={{ xs: "4%" }}
                        >
                            <Subscription />
                            <SocialLinks />
                            <NavFooter />
                        </Box>
                    </Box>
                </Flex>

                <Box
                    display={{ base: "none", lg: "block" }}
                    pos="absolute"
                    zIndex="2"
                    w={{ base: "0%", sm: "30%" }}
                    h="100vh"
                    bgColor="#EBF9FD"
                    top="0"
                    right="0"
                    border="0px"
                />

                <Image
                    display={{ base: "none", lg: "block" }}
                    opacity={{ base: "0", lg: "1" }}
                    src={PolishMans.src}
                    pos="absolute"
                    zIndex="3"
                    bottom="-15%"
                    right="-12%"
                    h="100vh"
                />

                <Box
                    display={{ base: "none", lg: "block" }}
                    pos="absolute"
                    zIndex="4"
                    w={{ base: "0%", sm: isMenu ? "0%" : "31%" }}
                    transitionDuration={"0.25s"}
                    transitionDelay={"0.38s"}
                    transitionTimingFunction="ease-out"
                    transitionProperty={"opacity width"}
                    h="100vh"
                    bgColor="blue.900"
                    top="0"
                    right="0"
                    border="0px"
                />
            </Box>
        </Box >
    );
};

const Nav = () => {
    const { isMenu, mapOpacity, mapStatus } = appStore;
    const isAnimReady = !mapStatus || mapStatus === "ready";
    const router = useRouter();
    const isWorkPage = () => {
        return router.asPath === "/work"
    }
    const showWhiteLogo = () => {
        return isWorkPage()
    }

    return (
        <>
            <Flex
                pos="fixed"
                left={{ sm: "42px" }}
                right={{ base: "14px", sm: "14px" }}
                top={{ base: "12px", sm: "50%" }}
                transform={{ sm: `translateY(-50%)` }}
                cursor="pointer"
                zIndex="10002"
                onClick={() => (appStore.isMenu = !isMenu)}
                opacity={isAnimReady ? mapOpacity : 0}
                w="50px"
                h="50px"
                borderRadius="50%"
                bg={isMenu ? "blue.800" : showWhiteLogo() ? "blue.800" : "white"}
                justifyContent="center"
                alignItems="center"
            >
                <Box className={`header__hamburger ${isMenu ? "show" : ""}`}>
                    <i className="header__hamburger__icon">
                        <Box as="span" bg={isMenu ? "#fff" : showWhiteLogo() ? "#fff" : "#000"} className="line top"></Box>
                        <Box as="span" bg={isMenu ? "#fff" : showWhiteLogo() ? "#fff" : "#000"} className="line center"></Box>
                        <Box as="span" bg={isMenu ? "#fff" : showWhiteLogo() ? "#fff" : "#000"} className="line bottom"></Box>
                    </i>
                </Box>
            </Flex>
            <NavContent as="nav" />
        </>
    )
}

export default Nav;