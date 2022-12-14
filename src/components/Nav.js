import appStore from "../store/store";
import { Box, Image, Flex, Text, VStack, InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
import IconFb from "../images/home/icons/icon-fb.svg";
import IconIg from "../images/home/icons/icon-ig.svg";
import IconMedium from "../images/home/icons/icon-medium.svg";
import homeLogoWhite from "../images/home/logo_white.png"
import useControl from "../store/useControl";

const SocialLinks = () => {
    return (
        <Flex align="center" mb="11.9%">
            <Link href="https://www.instagram.com/ntu_studyabroad/">
                <a target="_blank">
                    <Box>
                        <Image src={IconIg.src} alt="icon_ig" />
                    </Box>
                </a>
            </Link>
            <Link href="https://www.facebook.com/NTUOIAstudyabroad">
                <a target="_blank">
                    <Box mx="26px">
                        <Image src={IconFb.src} alt="icon_fb" />
                    </Box>
                </a>
            </Link>
            <Link href="https://www.youtube.com/channel/UCekymzo_M63vGMxPiDFV8wg">
                <a target="_blank">
                    <Box>
                        <Image src={IconMedium.src} alt="icon_medium" />
                    </Box>
                </a>
            </Link>
        </Flex>
    );
};

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
                spacing="17px"
                color="#fff"
                mb="8.3%"
            >
                <Link href="/info/live">
                    <a style={{ display: "block", width: "100%" }}>
                        <Box onClick={() => (appStore.isMenu = false)}>
                            <Text fontSize="16px" fontWeight="normal">
                                {t("nav.polish-2nd-anniversary")}
                            </Text>
                        </Box>
                    </a>
                </Link>
                <Link href="/info/news">
                    <a style={{ display: "block", width: "100%" }}>
                        <Box onClick={() => (appStore.isMenu = false)}>
                            <Text fontSize="16px" fontWeight="normal">
                                {t("nav.term-and-condition")}
                            </Text>
                        </Box>
                    </a>
                </Link>
            </VStack>

            <Text fontSize="16px" color="rgba(255,255,255,0.5)">
                ©Polish Design
            </Text>
        </>
    );
};

const NavContent = () => {
    const { isMenu, lives, mapExp } = appStore;
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
                bgColor={{ base: "rgba(0, 0, 0, .65)", md: "transparent" }}
                w="100%"
                h="100%"
                onClick={() => (appStore.isMenu = false)}
            />
            <Box
                pos="absolute"
                zIndex="1"
                left="0"
                w={{ base: "100%", md: "70%" }}
                h="100%"
                overflow="auto"
                top="0"
                bgColor="#212932"
                backdropFilter="blur(30px)"
                transform={`translateX(${isMenu ? "0%" : "-100%"})`}
                transition="0.3s ease"
            >
                <Flex
                    h="100%"
                >
                    {/* Left Nav */}
                    <Box flex={1.28}>
                        <Box
                            w="100%"
                            h="100%"
                            pl="30%"
                            pt="12.35%"
                        >
                            <Box>
                                <Image src={homeLogoWhite.src} alt="homeLogoWhite" />
                            </Box>

                            <Box color="#FFF" mt="11%">
                                {/* <Text fontSize="64px" fontWeight="bold">Portfolio</Text> */}
                                <Link href="#">
                                    <a style={{ display: "block", width: "100%" }}>
                                        <Box onClick={() => {
                                            goScene(1)
                                            appStore.scene = 1
                                        }}>
                                            <Text fontSize="64px" fontWeight="bold">
                                                Portfolio
                                            </Text>
                                        </Box>
                                    </a>
                                </Link>
                                <Text fontSize="16px" style={{ "opacity": 0.7 }}>作品集</Text>
                            </Box>

                            <Box color="#FFF" mt="8.4%">
                                <Text fontSize="64px" fontWeight="bold">Resources</Text>
                                <Text fontSize="16px" style={{ "opacity": 0.7 }}>部落格</Text>
                            </Box>

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
                                <Box
                                    w="100%"
                                    cursor="pointer"
                                    onClick={() => {
                                        if (router.asPath?.includes("/maps")) {
                                            mapExp?.camera?.transitionOut();
                                            appStore.mapOpacity = 0;
                                            appStore.isMenu = false;
                                            setTimeout(() => {
                                                window.location.href = "/maps";
                                            }, 1000);
                                        } else {
                                            appStore.isMenu = false;
                                            appStore.mapExp = null;
                                            // router.push("/maps");
                                            window.location.href = "/maps";
                                        }
                                    }}
                                >

                                    <Text fontSize="20px" fontWeight="normal">
                                        {t("home-2.home-link")}
                                    </Text>
                                </Box>
                                <Link href="/info/live">
                                    <a style={{ display: "block", width: "100%" }}>
                                        <Box onClick={() => (appStore.isMenu = false)}>
                                            <Text fontSize="20px" fontWeight="normal">
                                                {t("nav.about")}
                                            </Text>
                                        </Box>
                                    </a>
                                </Link>
                                <Link href="/info/live">
                                    <a style={{ display: "block", width: "100%" }}>
                                        <Box onClick={() => (appStore.isMenu = false)}>
                                            <Text fontSize="20px" fontWeight="normal">
                                                {t("nav.how-we-do")}
                                            </Text>
                                        </Box>
                                    </a>
                                </Link>
                                <Link href="/info/news">
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
                        borderLeft="1px"
                        borderColor="rgba(255,255,255,0.15)"
                    >
                        <Box
                            position="relative"
                            bottom="-52%"
                            pl="7%"
                        >
                            <Flex mb="20px">
                                <Box
                                    w="7px"
                                    h="7px"
                                    m="auto"
                                    ml="0"
                                    mr="15px"
                                    bg="#00D5BE"
                                    borderRadius="50%"
                                />
                                <Text color="white">收到我們的動態</Text>
                            </Flex>
                            <InputGroup
                                mb="62.5px"
                                w="80%"
                                borderRadius="14px"
                                overflow="hidden"
                                color="white"
                            >
                                <Input
                                    _placeholder={{ color: "rgba(255,255,255,0.5)" }}
                                    placeholder='你的 Email'
                                    border="0"
                                    outline="none"
                                    bg="#2A313A"
                                    pt="30px"
                                    pb="30px"
                                    pl="28px"
                                    overflow="hidden"
                                />
                                <InputRightElement pt="30px" pb="30px" pr="30px">
                                    <ArrowForwardIcon color='white' />
                                </InputRightElement>
                            </InputGroup>

                            <SocialLinks />
                            <NavFooter />
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
};

const Nav = () => {
    const { isMenu, mapOpacity, mapStatus } = appStore;
    const isAnimReady = !mapStatus || mapStatus === "ready";
    return (
        <>
            <Flex
                pos="fixed"
                left={{ base: "42px", md: "42px" }}
                top={{ base: "50%", md: "50%" }}
                transform={`translateY(-50%)`}
                cursor="pointer"
                zIndex="10002"
                onClick={() => (appStore.isMenu = !isMenu)}
                opacity={isAnimReady ? mapOpacity : 0}
                w="60px"
                h="60px"
                borderRadius="50%"
                bg={isMenu ? "#2A313A" : "white"}
                justifyContent="center"
                alignItems="center"
            >
                <Box className={`header__hamburger ${isMenu ? "show" : ""}`}>
                    <i className="header__hamburger__icon">
                        <Box as="span" bg={isMenu ? "#fff" : "#000"} className="line top"></Box>
                        <Box as="span" bg={isMenu ? "#fff" : "#000"} className="line center"></Box>
                        <Box as="span" bg={isMenu ? "#fff" : "#000"} className="line bottom"></Box>
                    </i>
                </Box>
            </Flex>
            <NavContent as="nav" />
        </>
    )
}

export default Nav;