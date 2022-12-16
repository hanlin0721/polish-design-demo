import { useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import ArrowDownwardIcon from "../../images/home/icons/Icon_arrow_downward.svg";
import appStore from "../../store/store";
import HomeNav from "./HomeNav.js";
import WorkNav from "../Work/WorkNav.js";
import Map from "../../pages/maps/index.js";
import PolishManWhite from "../../images/home/polish-man-white.png";
import PolishManOrange from "../../images/home/polish-man-orange.png";

const HomeHeader = () => {
    const { isAnimReady, scene } = appStore;
    const [isMap, setIsMap] = useState(false);

    return (
        <>
            <style
                dangerouslySetInnerHTML={{ __html: "body { overflow: hidden }" }}
            />
            <Flex
                pos="relative"
                justify="center"
                align="center"
                minH="100vh"
                bgColor="#000"
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

                {/* Slogan - Creative Solutions */}
                <Box pointerEvents={"none"}>
                    <Box
                        textAlign="center"
                        mt={{ md: "12vw", base: "100px" }}
                        transform={`translateY(${isAnimReady ? "0px" : "10px"})`}
                        opacity={isAnimReady && scene === 1 ? 1 : 0}
                        transitionDuration={scene === 1 ? "1s" : "0s"}
                        transitionDelay={scene !== 1 ? "0s" : "1s"}
                        transitionTimingFunction="ease"
                    >
                        <Box position="relative" transform="translateY(-20%)">
                            <Text
                                fontSize="8vw"
                                letterSpacing="2.2px"
                            >
                                CreateDigital
                            </Text>
                            <Flex position="relative" top="-40px">
                                <Text position="relative" fontSize="8vw" >Solutions</Text>
                                <Box
                                    textAlign="left"
                                    alignSelf="center"
                                    position="relative"
                                    left="18%"
                                    top="10px"
                                    fontSize="14px"
                                    fontWeight="bold"
                                    pt="10px"
                                >
                                    <Text letterSpacing="1.2px">Polish Design 致力於創意,</Text>
                                    <Text letterSpacing="1.2px">行得通得數位產品</Text>
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                </Box>

                {/* Slogan - We Focus More On Results */}
                <Box
                    pos="absolute"
                    opacity={scene === 2 ? 1 : 0}
                    transitionDuration={scene === 2 ? "0.8s" : "0s"}
                    transitionDelay={scene !== 2 ? "0s" : "1.6s"}
                    transitionTimingFunction="ease"
                    transitionProperty={"opacity"}
                    transform={`translate(-75%, -40%)`}
                    pointerEvents="none"
                >
                    <Text
                        fontSize="4.3vw"
                        letterSpacing="2.2px"
                        transform={`translateX(-25%)`}
                        lineHeight="0.8"
                    >
                        WE FOCUS
                    </Text>
                    <Text
                        fontSize="4.3vw"
                        letterSpacing="2.2px"
                        lineHeight="1.6"
                    >
                        MORE ON
                    </Text>
                    <Text
                        fontSize="4.3vw"
                        letterSpacing="2.2px"
                        transform={`translateX(-14%)`}
                        lineHeight="1"
                    >
                        RESULTS
                    </Text>

                    <Text
                        mt="5.5%"
                        fontSize="0.83vw"
                        fontWeight="bold"
                        letterSpacing="2.2px"
                        transform={`translateX(-2%)`}
                        lineHeight="1.5"
                    >
                        Polish Design 更關注於解決方案的成效
                    </Text>
                    <Text
                        fontSize="0.83vw"
                        fontWeight="bold"
                        letterSpacing="2.2px"
                        transform={`translateX(-2%)`}
                        lineHeight="1.5"
                    >
                        我們能達到 KPI 及提出現有資源中能達到的成效方案
                    </Text>
                </Box>

                {/* 磨人-白色 */}
                <Box
                    pos="absolute"
                    right="-2%"
                    bottom="-30%"
                    opacity={scene == 2 ? 1 : 0}
                    transitionDuration={scene === 2 ? "0.8s" : "0s"}
                    transitionDelay={scene !== 2 ? "0s" : "1.5s"}
                    transitionTimingFunction="ease"
                    transitionProperty={"opacity transform"}
                    transform={`translateX(${scene === 2 ? "0%" : "150%"})`}
                    pointerEvents="none"
                >
                    <Image src={PolishManWhite.src} alt="white-polish-man" />
                </Box>

                {/* 磨人-橘色 */}
                <Box
                    pos="absolute"
                    right="2%"
                    bottom="45%"
                    opacity={scene == 2 ? 1 : 0}
                    transitionDuration={scene === 2 ? "0.8s" : "0s"}
                    transitionDelay={scene !== 2 ? "0s" : "1.5s"}
                    transform={`translateX(${scene === 2 ? "0%" : "150%"})`}
                    transitionTimingFunction="ease"
                    transitionProperty={"opacity transform"}
                    pointerEvents="none"
                >
                    <Image src={PolishManOrange.src} alt="orange-polish-man" />
                </Box>

                <Flex
                    bg="rgba(33, 41, 50, 0.3)"
                    w="164px"
                    h="164px"
                    pos="fixed"
                    left="0px"
                    right="0px"
                    mx="auto"
                    bottom="0"
                    transform="translateY(50%)"
                    mt="65px"
                    justifyContent="center"
                    borderRadius="50%"
                    opacity={isAnimReady && scene !== 3 ? 1 : 0}
                >
                    <Image
                        pos="fixed"
                        left="0px"
                        right="0px"
                        mx="auto"
                        bottom="90px"
                        w="24px"
                        h="24px"
                        animation="verticalFloat 1s ease-in-out infinite"
                        src={ArrowDownwardIcon.src}
                        alt="arrowDownwardIcon"
                        pointerEvents="none"
                    />
                </Flex>
            </Flex>

            {!isMap && <HomeNav />}

            <WorkNav />

        </>
    );
}

export default HomeHeader;