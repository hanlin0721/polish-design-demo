import { Flex, Box, Text } from "@chakra-ui/react";
import appStore from "../../store/store";
import useControl from "../../store/useControl";

const WorkNav = () => {
    // const { scene } = appStore

    const { scene, scenes } = useControl((state) => state)

    const scrollhandler = (e) => {
        console.log(e)
        e.preventDefault()
    }

    return (
        <Flex
            position="fixed"
            top="0"
            left="0"
            onScroll={scrollhandler}
            h="100%"
            overflow="hidden"
            transform={`translateX(${scene === scenes.LOOKING_CSO ? "0%" : "-100%"})`}
        >
            <Box
                bg="white"
                h="100vh"
                w="150px"
                transitionProperty="opacity transform"
                transitionDuration={"0.5s"}
                transitionTimingFunction="ease"
                borderRight="1px"
                borderColor="rgba(0,0,0,0.07)"
            >
            </Box>

            <Box
                bg="white"
                h="100vh"
                w="300px"
                transform={`translateX(${scene === LOOKING_CSO ? "0%" : "-150%"})`}
                transitionProperty="opacity transform"
                transitionDuration={"1s"}
                transitionTimingFunction="ease"
                pt="30%"
                overflow="scroll"
            >
                <Box
                    mb="45px"
                >
                    <Box
                        bg="grey"
                        w="100%"
                        h="15vh"
                        mb="4%"
                    >

                    </Box>

                    <Box
                        w="100%"
                        pl="4%"
                        maxW="230px"
                    >
                        <Text>
                            Fourdesire 2021 年度使用者回顧活動 - High Five 玩心數據大揭秘
                        </Text>
                    </Box>

                </Box>

                <Box
                    mb="45px"
                >
                    <Box
                        bg="grey"
                        w="100%"
                        h="15vh"
                        mb="4%"
                    >

                    </Box>

                    <Box
                        w="100%"
                        pl="4%"
                        maxW="230px"
                    >
                        <Text>
                            Fourdesire 2021 年度使用者回顧活動 - High Five 玩心數據大揭秘
                        </Text>
                    </Box>

                </Box>

                <Box
                    mb="45px"
                >
                    <Box
                        bg="grey"
                        w="100%"
                        h="15vh"
                        mb="4%"
                    >

                    </Box>

                    <Box
                        w="100%"
                        pl="4%"
                        maxW="230px"
                    >
                        <Text>
                            Fourdesire 2021 年度使用者回顧活動 - High Five 玩心數據大揭秘
                        </Text>
                    </Box>

                </Box>

                <Box
                    mb="45px"
                >
                    <Box
                        bg="grey"
                        w="100%"
                        h="15vh"
                        mb="4%"
                    >

                    </Box>

                    <Box
                        w="100%"
                        pl="4%"
                        maxW="230px"
                    >
                        <Text>
                            Fourdesire 2021 年度使用者回顧活動 - High Five 玩心數據大揭秘
                        </Text>
                    </Box>

                </Box>

                <Box
                    mb="45px"
                >
                    <Box
                        bg="grey"
                        w="100%"
                        h="15vh"
                        mb="4%"
                    >

                    </Box>

                    <Box
                        w="100%"
                        pl="4%"
                        maxW="230px"
                    >
                        <Text>
                            Fourdesire 2021 年度使用者回顧活動 - High Five 玩心數據大揭秘
                        </Text>
                    </Box>

                </Box>
            </Box>
        </Flex>
    )
}
export default WorkNav;