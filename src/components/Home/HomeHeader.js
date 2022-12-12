import { useState } from "react";
import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import ArrowDownwardIcon from "../../images/home/icons/Icon_arrow_downward.svg";
import appStore from "../../store/store";
import HomeNav from "./HomeNav.js";
import WorkNav from "../Work/WorkNav.js";
import Map from "../../pages/maps/index.js";

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
                            <Flex position="relative" left="-10%">
                                <Text
                                    fontSize="8vw"
                                    fontWeight="bold"
                                    letterSpacing="2.2px"
                                >
                                    Creative
                                </Text>
                                <Box
                                    textAlign="left"
                                    alignSelf="center"
                                    position="relative"
                                    left="3%"
                                    top="20px"
                                    fontSize="14px"
                                    fontWeight="bold"
                                    pt="10px"
                                >
                                    <Text letterSpacing="1.2px">TO CREATE</Text>
                                    <Text letterSpacing="1.2px">DIGITAL PRODUCTS</Text>
                                </Box>
                            </Flex>
                            <Text position="relative" left="10%" fontSize="8vw" fontWeight="bold">SOLUTIONS</Text>
                        </Box>
                    </Box>
                </Box>

                {/* Slogan - We Focus More On Results */}
                <Box
                    pos="absolute"
                    opacity={scene === 2 ? 1 : 0}
                    transitionDuration={scene === 2 ? "0.5s" : "0s"}
                    transitionDelay={scene !== 2 ? "0s" : "1s"}
                    transitionTimingFunction="ease"
                    transitionProperty={"opacity"}
                    transform={`translate(-50%, -60%)`}
                    pointerEvents="none"
                >
                    <Text
                        fontSize="5vw"
                        fontWeight="bold"
                        letterSpacing="2.2px"
                        transform={`translateX(-30%)`}
                        lineHeight="1"
                    >
                        WE FOCUS
                    </Text>
                    <Text
                        fontSize="5vw"
                        fontWeight="bold"
                        letterSpacing="2.2px"
                    >
                        MORE ON
                    </Text>
                    <Text
                        fontSize="5vw"
                        fontWeight="bold"
                        letterSpacing="2.2px"
                        transform={`translateX(-15%)`}
                        lineHeight="1"
                    >
                        RESULTS
                    </Text>
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