import { Box, Flex, Text, Link } from "@chakra-ui/react";
import Subscription from "../components/Nav/Subscription.js"
import SocialLinks from "../components/Nav/SocialLinks.js"

const Footer = () => {
    return (
        <Box
            bg="blue.900"
            w="100%"
            color="white"
        >
            <Flex
                pl={{ base: "5%", sm: "20%" }}
                pt={{ base: "15%", sm: "5%" }}
                flexDir="column"
            >
                <Box pos="relative" mb={{ base: "64px", sm: "50px" }}>
                    <Text
                        fontSize={{ base: "10vw", sm: "4.6vw" }}
                        mb="1%"
                        color="white"
                        fontWeight="bold"
                        letterSpacing="-2.2px"
                        lineHeight="1"
                        className="poppins"
                    >
                        Let's polish<br />today!
                    </Text>
                </Box>

                <Box >
                    <Flex
                        pt={{ base: "0%", sm: "2.8%" }}
                        pr={{ base: "5%", sm: "0%" }}
                        borderY={{ base: "0px", sm: "1px solid rgba(255,255,255,0.15)" }}
                        flexDir={{ base: "column", sm: "row" }}
                    >
                        <Box w="100%" pt={{ base: "20px", sm: "0px" }}>
                            <Link href="/">
                                <Text pt="28px">首頁</Text>
                            </Link>
                            <Link href="/services">
                                <Text pt="28px">我們的服務</Text>
                            </Link>
                            {/* <Text pt="28px">專案</Text> */}
                            {/* <Text pt="28px">資源</Text> */}
                        </Box>

                        <Box
                            w="100%"
                            pb={{ base: "40px", sm: "0px" }}
                        >
                            <Link href="/contact">
                                <Text pt="28px">與我們合作</Text>
                            </Link>
                            <a target="_blank" href="https://hello.polish-design.com.tw/14?openExternalBrowser=1">
                                <Text pt="28px">The 2nd Ann. 禮品頁</Text>
                            </a>
                        </Box>

                        <Box
                            w="100%"
                            pb={{ base: "20px", sm: "0px" }}
                            borderY={{ base: "1px solid rgba(255,255,255,0.15)", sm: "0px" }}
                        >
                            <Text pt="28px" fontSize="18px" fontWeight="bold">一起創造!</Text>
                            <Text color="#A9ACB0" fontSize="14px" mt="12px">hello@polish-design.com.tw</Text>
                        </Box>

                        <Box
                            w="100%"
                            pt={{ base: "0px", sm: "28px" }}
                            pr="50px"
                            order={{ base: "-1", sm: "1" }}
                            borderBottom={{ base: "1px", sm: "0px" }}
                            borderColor="rgba(255,255,255,0.15)"
                        >
                            <Subscription />
                            <SocialLinks />
                        </Box>
                    </Flex>

                    <Flex justifyContent="space-between" pt={{ base: "40px", sm: "30px" }} pb="40px" flexDir={{ base: "column", sm: "row" }}>
                        <Text>相關條款 & Cookies 授權</Text>
                        <Text pr="10%" pt={{ base: "18px", sm: "0px" }} color="rgba(255,255,255,0.5)">©Polish Design</Text>
                    </Flex>
                </Box>
            </Flex>

        </Box>
    )
}

export default Footer