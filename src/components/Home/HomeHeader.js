import { useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import ArrowDownwardIcon from "../../images/home/icons/Icon_arrow_downward_black.svg";
import appStore from "../../store/store";
import WorkNav from "../Work/WorkNav.js";
import Map from "../../pages/work/index.js";
import PolishManWhite from "../../images/home/polish-man-white.png";
import PolishManOrange from "../../images/home/polish-man-orange.png";
import CircleActionIcon from "../../images/home/icons/action_circle_button.svg"

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
                w="100%"
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

                {/* Slogan - Creative Digital Solutions */}
                <Box
                    pos={{ base: "absolute", sm: "relative" }}
                    left={{ base: "29px", sm: "42px" }}
                    pointerEvents={"none"}
                    transform={{ base: "translateY(-40%)", sm: "translateY(-15%)" }}
                >
                    <Box
                        textAlign="center"
                        mt={{ md: "12vw", base: "100px" }}
                        transform={`translateY(${isAnimReady ? "0px" : "10px"})`}
                        opacity={isAnimReady && scene === 1 ? 1 : 0}
                        transitionDuration={scene === 1 ? "1s" : "0s"}
                        transitionDelay={scene !== 1 ? "0s" : "1s"}
                        transitionTimingFunction="ease"
                    >
                        <Box position="relative">
                            <Text
                                fontSize={{ base: "36px", sm: "7vw" }}
                                letterSpacing="1.4px"
                                fontWeight="bold"
                                textAlign="left"
                            >
                                CreateDigital
                            </Text>

                            <Flex position="relative" textAlign="left" top={{ base: "-5px", lg: "-40px" }}>
                                <Text
                                    textAlign="left"
                                    position="relative"
                                    fontSize={{ base: "36px", sm: "7vw" }}
                                    fontWeight="bold"
                                >
                                    Solutions
                                </Text>
                                {/* ????????? - Polish Design ??????????????????????????????????????? */}
                                <Box
                                    display={{ base: "none", lg: "block" }}
                                    textAlign="left"
                                    alignSelf="center"
                                    pos="relative"
                                    fontSize={{ base: "14px", sm: "0.8vw" }}
                                    fontWeight="bold"
                                    ml="4%"
                                    pt="2%"
                                >
                                    <Text letterSpacing="1.2px" fontWeight="bold">Polish Design ???????????????</Text>
                                    <Text letterSpacing="1.2px" fontWeight="bold">????????????????????????</Text>
                                </Box>
                            </Flex>

                            {/* ????????? - Polish Design ??????????????????????????????????????? */}
                            <Box
                                display={{ md: "block", lg: "none" }}
                                textAlign="left"
                                fontSize={{ base: "14px", sm: "0.8vw" }}
                                fontWeight="bold"
                                position="relative"
                                top={{ base: "-5px", lg: "-40px" }}
                                left={{ base: "0px", lg: "-10px" }}
                            >
                                <Text letterSpacing="1.2px" fontWeight="bold">Polish Design ???????????????</Text>
                                <Text letterSpacing="1.2px" fontWeight="bold">????????????????????????</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* Slogan - We Focus More On Results */}
                <Box
                    pos="absolute"
                    top={{ base: "15%", sm: "11%" }}
                    left={{ base: "7%", sm: "18.1875%" }}
                    opacity={scene === 2 ? 1 : 0}
                    transitionDuration={scene === 2 ? "0.8s" : "0s"}
                    transitionDelay={scene !== 2 ? "0s" : "1.6s"}
                    transitionTimingFunction="ease"
                    transitionProperty={"opacity"}
                >
                    {/* Desktop - We Focus More On Results*/}
                    <Box
                        display={{ base: "none", sm: "block" }}
                    >
                        <Text
                            fontSize="4.4vw"
                            letterSpacing="2.2px"
                            transform={`translateX(-20%)`}
                            lineHeight="1"
                            fontWeight="bold"
                        >
                            We Focus
                        </Text>
                        <Text
                            fontSize="4.4vw"
                            letterSpacing="2.2px"
                            lineHeight="1.2"
                            fontWeight="bold"
                        >
                            More on
                        </Text>
                        <Text
                            fontSize="4.4vw"
                            letterSpacing="2.2px"
                            transform={`translateX(-12%)`}
                            lineHeight="1"
                            fontWeight="bold"
                        >
                            Results
                        </Text>
                    </Box>

                    {/* Mobile - We Focus More On Results */}
                    <Box
                        display={{ base: "block", sm: "none" }}
                    >
                        <Text
                            fontSize="36px"
                            lineHeight="1"
                            fontWeight="bold"
                        >
                            We Focus More <br />on Results
                        </Text>
                    </Box>

                    <Text
                        w={{ base: "86%", sm: "100%" }}
                        mt="5.5%"
                        fontSize={{ base: "14px", sm: "0.83vw" }}
                        fontWeight="bold"
                        letterSpacing={{ base: "1px", sm: "2.2px" }}
                        transform={{ base: "0", sm: `translateX(-12%)` }}
                        lineHeight="1.5"
                    >
                        Polish Design ?????????????????????????????????<br />??????????????? KPI ????????????????????????????????????????????????
                    </Text>
                    {/* 
                        Portfolio
                        How we do
                    */}
                    <Box
                        mt={{ base: "22px", sm: "60px" }}
                        transform={{ base: "0", sm: `translateX(-12%)` }}
                        w={{ base: "45%", sm: "100%" }}
                    >
                        <Flex
                            pt={{ base: "14px", sm: "23px" }}
                            pb={{ base: "11px", sm: "21px" }}
                            pl={{ base: "0px", sm: "12px" }}
                            pr={{ base: "0px", sm: "12px" }}
                            borderTop="1px"
                            borderBottom="1px"
                            borderColor="rgba(33,41,50,0.3)"
                            justifyContent="space-between"
                            cursor="pointer"
                        >
                            <Text fontWeight="bold" fontSize={{ base: "14px", sm: "0.83vw" }}>Portfolio</Text>
                            <Image src={CircleActionIcon.src} />
                        </Flex>
                        <Flex
                            pt={{ base: "14px", sm: "23px" }}
                            pb={{ base: "11px", sm: "21px" }}
                            pl={{ base: "0px", sm: "12px" }}
                            pr={{ base: "0px", sm: "12px" }}
                            borderBottom="1px"
                            borderColor="rgba(33,41,50,0.3)"
                            justifyContent="space-between"
                            cursor="pointer"
                        >
                            <Text fontWeight="bold" fontSize={{ base: "14px", sm: "0.83vw" }}>How we do</Text>
                            <Image src={CircleActionIcon.src} />
                        </Flex>
                    </Box>
                </Box>


                {/* ??????-?????? */}
                <Box
                    pos="absolute"
                    bottom={{ base: "-100px", sm: "-360px" }}
                    opacity={scene == 2 ? 1 : 0}
                    transitionDuration={scene === 2 ? "0.8s" : "0s"}
                    transitionDelay={scene !== 2 ? "0s" : "1.5s"}
                    transitionTimingFunction="ease"
                    transitionProperty={"opacity transform"}
                    transform={`translateX(${scene === 2 ? "0%" : "150%"})`}
                    pointerEvents="none"
                >
                    <Image pos="relative" right={{ base: "-45%", sm: "-80%" }} src={PolishManWhite.src} alt="white-polish-man" />
                </Box>

                {/* ??????-?????? */}
                <Box
                    pos="absolute"
                    bottom={{ base: "24%", sm: "45%" }}
                    opacity={scene == 2 ? 1 : 0}
                    transitionDuration={scene === 2 ? "0.8s" : "0s"}
                    transitionDelay={scene !== 2 ? "0s" : "1.5s"}
                    transform={{
                        base: `translateX(${scene === 2 ? "0%" : "150%"}) scale(0.3)`,
                        sm: `translateX(${scene === 2 ? "0%" : "150%"}) scale(1)`
                    }}
                    transitionTimingFunction="ease"
                    transitionProperty={"opacity transform"}
                    pointerEvents="none"
                >
                    <Image
                        pos="relative"
                        right={{ base: "-150%", sm: "-150%" }}
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
                >
                    <Text
                        fontWeight="bold"
                        mb="16px"
                    >?????????</Text>
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

            </Flex>

            {/* <WorkNav /> */}

        </>
    );
}

export default HomeHeader;