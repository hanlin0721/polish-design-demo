import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import MainButton from "../MainButton";
import useControl from "../../store/useControl";
const WorkDesc = ({ work, show }) => {

    const updateScroll = useControl((state) => state.updateScroll)
    const test = (e) => {
        updateScroll(e.target.scrollTop)
    }
    return (
        <>
            <Box
                display={show ? "block" : "none"}
                pos="relative"
                top="-100%"
                h="100%"
                overflowY="scroll"
                onScroll={test}
                zIndex={1}
            >

                {/* 專案類型 */}
                <Box pl="46px" overflow="hidden">
                    <Flex py="17px" overflowX="scroll">
                        <Box flexShrink="0" py="6px" px="12px" mr="10px" bg="blue.700" borderRadius="15px">
                            <Text fontSize="12px">線上策展</Text>
                        </Box>
                    </Flex>
                </Box>

                {/* 專案標題 */}
                <Box pl="46px" mb="20px">
                    <Text fontSize="24px" as="b">
                        Fourdesire 2021 年度使用者回顧活動 - High Five 玩心數據大揭秘
                    </Text>
                </Box>

                {/* 專案日期 */}
                <Flex pl="46px" >
                    <Text fontSize="16px" as="b" pr="42px">
                        2021-12-12
                    </Text>
                    <Text fontSize="16px" >
                        Fourdesire
                    </Text>
                </Flex>

                {/* 使用的專業 */}
                <Flex mt="40px">
                    <Box flex="1" borderRight="1px" >

                    </Box>
                    <VStack
                        spacing={1}
                        align="start"
                        w="100px"
                        ml="20px"
                    >
                        <Box>
                            <Text>產品策略</Text>
                        </Box>
                        <Box>
                            <Text>使用者研究</Text>
                        </Box>
                        <Box>
                            <Text>UX 設計</Text>
                        </Box>
                        <Box>
                            <Text>UI 設計</Text>
                        </Box>
                        <Box>
                            <Text>後端開發</Text>
                        </Box>
                        <Box pb="30px">
                            <Text>前端開發</Text>
                        </Box>
                    </VStack>
                </Flex>

                {/* 內容 */}
                <Flex pl="46px" flexDir="column" alignItems="end">
                    <Box w="518px" h="271px" bg="grey"></Box>
                    <Text my="30px" maxW="476px" alignSelf="start">Nice Pass Express 是一個面向創作者的內容平台，為創作者提供了創作，發表，分享，展示和賺取收入的一站式解決方案。它提供了創作者們一個對話和互動的空間，能夠更好地發揮他們的創造力，並與全球的讀者和觀眾建立起互動關係。</Text>
                </Flex>

                <Flex pl="46px" flexDir="column" alignItems="end">
                    <Box w="518px" h="271px" bg="grey"></Box>
                    <Text my="30px" maxW="476px" alignSelf="start">Nice Pass Express 是一個面向創作者的內容平台，為創作者提供了創作，發表，分享，展示和賺取收入的一站式解決方案。它提供了創作者們一個對話和互動的空間，能夠更好地發揮他們的創造力，並與全球的讀者和觀眾建立起互動關係。</Text>
                </Flex>

                {/* 技術範圍 */}
                <Box pl="46px">
                    <Text as="b">技術範圍</Text>
                    <Flex flexWrap="wrap">
                        {
                            work.techniques.map((technique) => {
                                return (
                                    <Box w="50%" mt="35px" key={technique.id}>
                                        <Text mb="13px" fontWeight="bold">{technique.title}</Text>
                                        {
                                            technique.details.map((detail, index) => {
                                                return (
                                                    <Box key={`${technique.id}${index}`}>
                                                        <Text>{detail}</Text>
                                                    </Box>
                                                )
                                            })
                                        }
                                    </Box>
                                )
                            })
                        }
                    </Flex>

                    <Box mt="60px" mb="74px">
                        <MainButton
                            text="與我們合作"
                            hasIcon={false}
                            href="contact"
                        />
                    </Box>
                </Box>

                {/* 下個專案 */}
                <Box
                    pt="48px"
                    pl="46px"
                    mb="20px"
                    bg={{ base: "blue.50", sm: "transparent" }}
                    color="white"
                >
                    <Text fontWeight="bold" fontSize="20px" mb="24px">下個專案</Text>
                    <Text fontSize="16px" maxW="243px">Fourdesire 2021 年度使用者回顧活動 - High Five 玩心數據大揭秘</Text>
                    <Box mt="28px" w="504px" h="295px" bg="grey" borderRadius="10px">

                    </Box>
                </Box>

                {/* 其他專案 */}
                <Box
                    pt="48px"
                    pl="46px"
                    mb="20px"
                    bg={{ base: "blue.50", sm: "transparent" }}
                    color="white"
                    display="none"
                >
                    <Text fontWeight="bold" fontSize="20px" mb="24px">其他專案</Text>

                    <Flex w="100%" overflowX="scroll">
                        <Box>
                            <Box mt="28px" w="152px" h="84px" bg="grey" borderRadius="10px">

                            </Box>

                            <Text
                                h="50px"
                                fontSize="16px"
                                w="152px"
                                display="-webkit-box"
                            // style={{
                            //     "-webkit-box-orient": "vertical",
                            //     "-webkit-line-clamp": "2",
                            //     "overflow": "hidden",
                            // }}
                            >
                                Fourdesire 2021 年度使用者回顧活動 - High Five 玩心數據大揭秘
                            </Text>

                        </Box>

                        <Box>
                            <Box mt="28px" w="152px" h="84px" bg="grey" borderRadius="10px">

                            </Box>

                            <Text
                                h="50px"
                                fontSize="16px"
                                w="152px"
                                display="-webkit-box"
                            // style={{
                            //     "-webkit-box-orient": "vertical",
                            //     "-webkit-line-clamp": "2",
                            //     "overflow": "hidden",
                            // }}
                            >
                                Fourdesire 2021 年度使用者回顧活動 - High Five 玩心數據大揭秘
                            </Text>

                        </Box>

                        <Box>
                            <Box mt="28px" w="152px" h="84px" bg="grey" borderRadius="10px">

                            </Box>

                            <Text
                                h="50px"
                                fontSize="16px"
                                w="152px"
                                display="-webkit-box"
                            // style={{
                            //     "-webkit-box-orient": "vertical",
                            //     "-webkit-line-clamp": "2",
                            //     "overflow": "hidden",
                            // }}
                            >
                                Fourdesire 2021 年度使用者回顧活動 - High Five 玩心數據大揭秘
                            </Text>

                        </Box>

                        <Box>
                            <Box mt="28px" w="152px" h="84px" bg="grey" borderRadius="10px">

                            </Box>

                            <Text
                                h="50px"
                                fontSize="16px"
                                w="152px"
                                display="-webkit-box"
                            // style={{
                            //     "-webkit-box-orient": "vertical",
                            //     "-webkit-line-clamp": "2",
                            //     "overflow": "hidden",
                            // }}
                            >
                                Fourdesire 2021 年度使用者回顧活動 - High Five 玩心數據大揭秘
                            </Text>

                        </Box>
                    </Flex>
                </Box>
            </Box>
        </>
    )
}
export default WorkDesc;