import { useState, useEffect, useCallback } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import ArrowDownwardIcon from "../../images/home/icons/Icon_arrow_downward_black.svg";
import appStore from "../../store/store";
import useControl from "../../store/useControl";
import Map from "../../components/Maps/Map.js";
import PolishManWhite from "../../images/home/polish-man-white.png";
import PolishManBlue from "../../images/home/polish-man-blue.png";
import PolishManOrange from "../../images/home/polish-man-orange.png";
import CircleActionIcon from "../../images/home/icons/action_circle_button.svg"
import { useTouch } from "../../utils/useTouch";
import api from "../../store/api";
import { useRouter } from "next/router";
import CookiesNotice from "../CookiesNotice";

const HomeHeader = () => {
    const router = useRouter()
    const { isAnimReady } = appStore;
    const [isMap, setIsMap] = useState(false);
    const { scene, scenes } = useControl((state) => state)

    const nextScene = useControl((state) => state.nextScene)
    const prevScene = useControl((state) => state.prevScene)

    const { swipeStart, swipeEnd } = useTouch({
        pullUpFunc: () => {
            if (scene === scenes.LOOKING_PORTFOLIO) {
                return
            }
            nextScene()
        },
        pullDownFunc: () => {
            prevScene()
        }
    })

    const [articles, setArticles] = useState(null)

    // API
    useEffect(() => {
        if (router.isReady) {
            api.getArticles().then(({ success, articles, types }) => {
                if (success) {
                    setArticles(articles.slice(5))
                }
            });
        }
    }, [router.isReady]);

    const goWorkPage = useCallback(() => {
        router.push('/work')
    })

    return (
        <>
            <style
                dangerouslySetInnerHTML={{ __html: "body { overflow: hidden }" }}
            />
            <Flex
                pos="relative"
                justify="center"
                align="center"
                w="100%"
                minH="100vh"
                bgColor="#000"
                onTouchStart={swipeStart}
                onTouchEnd={swipeEnd}
            >
                {/* three.js */}
                <Box
                    w="100%"
                    h="100%"
                    pos="absolute"
                    left="0"
                    top="0"
                    transform="translate3d(0, 0, 0)"
                    transition="2.5s ease 1.5s"
                    bgColor="#000"
                    opacity={1}
                >
                    <Map isMap={isMap} />
                </Box>

                {/* Slogan - Creative Digital Solutions */}
                <Box
                    pos={{ base: "absolute", sm: "relative" }}
                    left={{ base: "29px", sm: "42px" }}
                    pointerEvents={"none"}
                    transform={{ base: "translateY(5%)", sm: "translateY(15%)" }}
                >
                    <Box
                        textAlign="center"
                        mt={{ md: "12vw", base: "100px" }}
                        transform={`translateY(${isAnimReady ? "0px" : "10px"})`}
                        opacity={isAnimReady && scene === scenes.LOOKING_BLUE_POLISH_MAN ? 1 : 0}
                        transitionDuration={scene === scenes.LOOKING_BLUE_POLISH_MAN ? "1s" : "0s"}
                        transitionDelay={scene !== scenes.LOOKING_BLUE_POLISH_MAN ? "0s" : "1s"}
                        transitionTimingFunction="ease"
                    >
                        <Box position="relative">
                            <Text
                                fontSize={{ base: "36px", sm: "100px" }}
                                fontWeight="bold"
                                textAlign="left"
                                letterSpacing={{ base: "-1px" }}
                                lineHeight="1"
                            >
                                Create Digital
                            </Text>

                            <Flex
                                position="relative"
                                textAlign="left"
                            // top={{ base: "-14px", lg: "-40px" }}
                            >
                                <Text
                                    textAlign="left"
                                    position="relative"
                                    fontSize={{ base: "36px", sm: "100px" }}
                                    fontWeight="bold"
                                    letterSpacing={{ base: "-1px" }}
                                    lineHeight="1"
                                >
                                    Solutions
                                </Text>
                                {/* 電腦版 - Polish Design 致力於創意行得通得數位產品 */}
                                <Box
                                    display={{ base: "none", lg: "block" }}
                                    textAlign="left"
                                    alignSelf="center"
                                    pos="relative"
                                    fontSize={{ base: "14px", sm: "0.8vw" }}
                                    fontWeight="bold"
                                    ml="3%"
                                    pt="2%"
                                >
                                    <Text fontWeight="bold">Polish Design 致力於創意</Text>
                                    <Text fontWeight="bold">行得通得數位產品</Text>
                                </Box>
                            </Flex>

                            {/* 手機版 - Polish Design 致力於創意行得通得數位產品 */}
                            <Box
                                display={{ md: "block", lg: "none" }}
                                textAlign="left"
                                fontSize={{ base: "14px", sm: "0.8vw" }}
                                fontWeight="bold"
                                position="relative"
                                top={{ base: "10px", sm: "-40px" }}
                                left={{ base: "0px", lg: "-10px" }}
                            >
                                <Text fontWeight="bold">Polish Design 致力於創意</Text>
                                <Text fontWeight="bold">行得通得數位產品</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* Slogan - We Focus More On Results */}
                <Box
                    pos="absolute"
                    top={{ base: "32px", sm: "15%" }}
                    left={{ base: "29px", sm: "18.1875%" }}
                    opacity={scene === scenes.LOOKING_FLOATING_BLUE_POLISH_MAN ? 1 : 0}
                    transitionDuration={scene === scenes.LOOKING_FLOATING_BLUE_POLISH_MAN ? "0.8s" : "0s"}
                    // transitionDelay={scene !== scenes.LOOKING_FLOATING_BLUE_POLISH_MAN ? "0s" : "1.6s"}
                    transitionTimingFunction="ease"
                    transitionProperty={"opacity"}
                >
                    {/* Desktop - We Focus More On Results*/}
                    <Box>
                        <Text
                            fontSize={{ base: "40px", sm: "82px" }}
                            transform={{ base: `translateX(0%)`, sm: `translateX(-23%)` }}
                            lineHeight="0.9"
                            fontWeight="700"
                        >
                            We Focus
                        </Text>
                        <Text
                            fontSize={{ base: "40px", sm: "82px" }}
                            transform={{ base: `translateX(14%)`, sm: `translateX(0%)` }}
                            letterSpacing="-2.2px"
                            lineHeight="0.9"
                            fontWeight="700"
                        >
                            More on
                        </Text>
                        <Text
                            fontSize={{ base: "40px", sm: "82px" }}
                            letterSpacing="-2.2px"
                            transform={{ base: `translateX(0%)`, sm: `translateX(-23%)` }}
                            lineHeight="0.9"
                            fontWeight="700"
                        >
                            Results
                        </Text>
                    </Box>

                    <Text
                        w={{ base: "86%", sm: "100%" }}
                        mt="5.5%"
                        fontSize={{ base: "14px", sm: "0.83vw" }}
                        fontWeight="bold"
                        transform={{ base: "0", sm: `translateX(-22%)` }}
                        lineHeight="1.5"
                    >
                        Polish Design 更關注於解決方案的成效<br />我們能達到 KPI 及提出現有資源中能達到的成效方案
                    </Text>
                </Box>

                {/* Portfolio */}
                {/* <Flex pos="absolute" w="100%" h="100%" opacity={1} bg="#97A2AD" mixBlendMode="color">

                </Flex> */}
                <Flex
                    pos="absolute"
                    pointerEvents={scene === scenes.LOOKING_PORTFOLIO ? "auto" : "none"}
                    opacity={scene === scenes.LOOKING_PORTFOLIO ? 1 : 0}
                    transitionDuration={scene === scenes.LOOKING_PORTFOLIO ? "0.8s" : "0s"}
                    // transitionDelay={scene !== scenes.LOOKING_PORTFOLIO ? "0s" : "1.6s"}
                    transitionTimingFunction="ease"
                    transitionProperty={"opacity"}
                    w={{ base: "100%", sm: "80%" }}
                    justifyContent={{ base: "start", sm: "space-around" }}
                    flexWrap="wrap"
                    top={{ base: "32px", sm: "33%" }}
                    flexDir={{ base: "column", sm: "row" }}
                >
                    <Box transform={{ base: `translateY(0%)`, sm: `translateY(-35%)` }} w={{ base: "100%", sm: "30%" }}>
                        <Box pl={{ base: "29px", sm: "0px" }} mb={{ base: "10px", sm: "30px" }}>
                            <Text
                                fontSize={{ base: "40px", sm: "82px" }}
                                transform={{ base: `translateX(0%)`, sm: `translateX(0%)` }}
                                letterSpacing="-2.2px"
                                lineHeight="1"
                                fontWeight="bold"
                            >
                                Portfolio
                            </Text>
                        </Box>

                        <Text
                            pl={{ base: "29px", sm: "0px" }}
                            w={{ base: "86%", sm: "100%" }}
                            maxW="305px"
                            mt="5.5%"
                            fontSize={{ base: "14px", sm: "14px" }}
                            fontWeight="bold"
                            lineHeight="1.5"
                            mb={{ base: "48px", sm: "0%" }}
                        >
                            過去的時間裡，我們嘗試以各種方式實踐商業、品牌目標。
                        </Text>

                        <Box mt={{ base: "5%", sm: "10%" }} display={{ base: "none", sm: "block" }}>
                            <Flex
                                bg="white"
                                w="308px"
                                borderRadius="53px"
                                justifyContent="space-around"
                                pt="18px"
                                pb="17px"
                                mb={{ base: "48px", sm: "10%" }}
                            >
                                <Flex cursor="pointer" onClick={goWorkPage}>
                                    <Text fontWeight="bold" mr="8px">
                                        相關案例
                                    </Text>
                                    <Image w="12px" src={ArrowDownwardIcon.src} transform="rotate(-90deg)" />
                                </Flex>
                                {/* <Flex cursor="pointer">
                                    <Text fontWeight="bold" mr="8px">
                                        相關資源
                                    </Text>
                                    <Image w="12px" src={ArrowDownwardIcon.src} transform="rotate(-90deg)" />
                                </Flex> */}
                            </Flex>
                        </Box>
                    </Box>

                    <Flex
                        w={{ base: "100%", sm: "70%" }}
                        maxW={{ base: "100%" }}
                        flexWrap="wrap"
                        justifyContent="space-around"
                        alignItems="center"
                    >
                        {
                            articles?.map((article) => {
                                return (
                                    <Box
                                        key={article.article_code}
                                        bg="grey"
                                        w={{ base: "40%", sm: "calc((30%-33px))" }}
                                        h={{ base: "90px", sm: "150px" }}
                                        my="15.5px"
                                        borderRadius="50px"
                                        overflow="hidden"
                                        cursor="pointer"
                                        mx="12.5px"
                                    >
                                        <Image w="100%" h="100%" objectFit="cover" src={article.image} />
                                    </Box>
                                )
                            })
                        }
                    </Flex>
                </Flex>

                {/* 磨人-白色 */}
                <Box
                    pos="absolute"
                    bottom={{ base: "-68px", sm: "-360px" }}
                    opacity={scene == scenes.LOOKING_FLOATING_BLUE_POLISH_MAN ? 1 : 0}
                    transitionDuration={scene === scenes.LOOKING_FLOATING_BLUE_POLISH_MAN ? "0.8s" : "0s"}
                    // transitionDelay={scene !== scenes.LOOKING_FLOATING_BLUE_POLISH_MAN ? "0s" : "1.5s"}
                    transitionTimingFunction="ease"
                    transitionProperty={"opacity transform"}
                    transform={{
                        base: `translateX(${scene === scenes.LOOKING_FLOATING_BLUE_POLISH_MAN ? "0%" : "150%"}) scale(1)`,
                        sm: `translateX(${scene === scenes.LOOKING_FLOATING_BLUE_POLISH_MAN ? "0%" : "150%"}) scale(0.7)`
                    }}
                    pointerEvents="none"
                    zIndex="10"
                >
                    <Image
                        pos="relative"
                        right={{ base: "-32%", sm: "-85%" }}
                        bottom={{ base: "0px", sm: "100px" }}
                        src={PolishManWhite.src}
                        alt="white-polish-man"
                    />
                </Box>

                {/* 磨人-藍色 */}
                <Box
                    pos="absolute"
                    // bottom={{ base: "-100px", sm: "0px" }}
                    opacity={scene == scenes.LOOKING_FLOATING_BLUE_POLISH_MAN ? 1 : 0}
                    transitionDuration={scene === scenes.LOOKING_FLOATING_BLUE_POLISH_MAN ? "0.8s" : "0s"}
                    // transitionDelay={scene !== scenes.LOOKING_FLOATING_BLUE_POLISH_MAN ? "0s" : "1.5s"}
                    transitionTimingFunction="ease"
                    transitionProperty={"opacity transform"}
                    transform={{
                        base: `translateX(${scene === scenes.LOOKING_FLOATING_BLUE_POLISH_MAN ? "0%" : "150%"}) scale(1)`,
                        sm: `translateX(${scene === scenes.LOOKING_FLOATING_BLUE_POLISH_MAN ? "0%" : "150%"}) scale(0.8)`
                    }}
                    pointerEvents="none"
                    zIndex="9"
                >
                    <Image
                        pos="relative"
                        right={{ base: "-15%", sm: "-60%" }}
                        bottom={{ base: "-30px", sm: "70px" }}
                        src={PolishManBlue.src}
                        alt="white-polish-man"
                    />
                </Box>

                {/* 磨人-橘色 */}
                <Box
                    pos="absolute"
                    bottom={{ base: "22%", sm: "45%" }}
                    opacity={scene == scenes.LOOKING_FLOATING_BLUE_POLISH_MAN ? 1 : 0}
                    transitionDuration={scene === scenes.LOOKING_FLOATING_BLUE_POLISH_MAN ? "0.8s" : "0s"}
                    // transitionDelay={scene !== scenes.LOOKING_FLOATING_BLUE_POLISH_MAN ? "0s" : "1.5s"}
                    transform={{
                        base: `translateX(${scene === scenes.LOOKING_FLOATING_BLUE_POLISH_MAN ? "0%" : "150%"}) scale(0.4)`,
                        sm: `translateX(${scene === scenes.LOOKING_FLOATING_BLUE_POLISH_MAN ? "0%" : "150%"}) scale(0.75)`
                    }}
                    transitionTimingFunction="ease"
                    transitionProperty={"opacity transform"}
                    pointerEvents="none"
                    zIndex="8"
                >
                    <Image
                        pos="relative"
                        right={{ base: "-110%", sm: "-160%" }}
                        bottom={{ base: "70px", sm: "30px" }}
                        src={PolishManOrange.src} alt="orange-polish-man"
                    />
                </Box>

                <Box
                    pos="fixed"
                    left="0px"
                    right="0px"
                    bottom="0"
                    textAlign="center"
                    pointerEvents="none"
                    animation="verticalFloat 1s ease-in-out infinite"
                    display={scene === scenes.LOOKING_PORTFOLIO ? "none" : "block"}
                    zIndex="11"
                >
                    <Text
                        fontWeight="bold"
                        mb="16px"
                    >
                        NEXT
                    </Text>
                    <Image
                        w="24px"
                        h="24px"
                        mx="auto"
                        // animation="verticalFloat 1s ease-in-out infinite"
                        src={ArrowDownwardIcon.src}
                        alt="arrowDownwardIcon"
                        pointerEvents="none"
                        mb="21px"
                    />
                </Box>

                <CookiesNotice />

            </Flex>

            {/* <WorkNav /> */}

        </>
    );
}

export default HomeHeader;