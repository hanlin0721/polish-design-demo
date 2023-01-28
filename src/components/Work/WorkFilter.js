import { Flex, Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";

const WorkFilter = ({ options, filter, selectFilter }) => {

    useEffect(() => {
    }, [filter])

    return (
        <>
            <Box overflow="hidden" borderBottom="1px" borderColor="blue.600">
                <Flex py="17px" pl="19.5px" overflowX="scroll">
                    {
                        options.map((option) => {
                            return (
                                <Box
                                    key={option.id}
                                    flexShrink="0"
                                    py="6px"
                                    px="12px"
                                    mr="10px"
                                    bg={(option.type === filter) ? "blue.50" : "blue.700"}
                                    color={(option.type === filter) ? "blue.900" : "white"}
                                    borderRadius="15px"
                                    onClick={() => selectFilter(option.type)}
                                    cursor="pointer"
                                >
                                    <Text fontSize="12px">{option.title}</Text>
                                </Box>
                            )
                        })
                    }
                </Flex>
            </Box>
        </>
    )
}
export default WorkFilter;