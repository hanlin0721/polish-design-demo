import { Flex, Box, Text, Image } from "@chakra-ui/react";

const WorkResult = ({ articles, onClick }) => {
    return (
        <Box
            flex="1"
            pos="relative"
            h="100%"
            pb="190px"
        >
            <Flex pl="19.5px" pt="15px" pb="14px">
                <Text mr="5px" color="#A6A9AD">
                    Found
                </Text>
                <Text as="b" mr="5px">
                    {articles?.length}
                </Text>
                <Text color="#A6A9AD">
                    projects
                </Text>
            </Flex>

            <Flex flex="1" h="100%" flexDir="column" overflowY="scroll">
                {
                    articles?.map(article => {
                        return (
                            <Box
                                key={article.article_code}
                                mb="30px"
                                cursor="pointer"
                                onClick={() => onClick(article.article_code)}
                            >
                                <Box w="100%" h="150px" bg="grey" >
                                    <Image src={article.image} objectFit="cover" w="100%" h="100%" />
                                </Box>
                                <Text
                                    pt="12px"
                                    pl="15.5px"
                                    pr="45px"
                                    fontSize="14px"
                                >
                                    {article.title}
                                </Text>
                            </Box>
                        )
                    })
                }
            </Flex>
        </Box>
    )
}
export default WorkResult;