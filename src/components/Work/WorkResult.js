import { Flex, Box, Text, Image } from "@chakra-ui/react";

const WorkResult = ({ result, onClick }) => {
    return (
        <Box
            flex="1"
            // overflow="hidden"
            pos="relative"
            h="100%"
            pb="190px"
        >
            <Flex pl="19.5px" pt="15px" pb="14px">
                <Text mr="5px">
                    Found
                </Text>
                <Text as="b" mr="5px">
                    {result.length}
                </Text>
                <Text>
                    projects
                </Text>
            </Flex>

            <Flex flex="1" h="100%" flexDir="column" overflowY="scroll">
                {
                    result.map(project => {
                        return (
                            <Box
                                key={project.id}
                                mb="30px"
                                cursor="pointer"
                                onClick={() => onClick(project.id)}
                            >
                                <Box w="100%" h="150px" bg="grey" >
                                    <Image src={project.thumbnail} objectFit="cover" w="100%" h="100%" />
                                </Box>
                                <Text
                                    pt="12px"
                                    pl="15.5px"
                                    pr="45px"
                                    fontSize="14px"
                                >
                                    {project.title}
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