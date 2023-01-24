import { Flex, Box, Text } from "@chakra-ui/react";
const WorkFilter = () => {
    return (
        <>
            <Box overflow="hidden" borderBottom="1px" borderColor="blue.600">
                <Flex py="17px" pl="19.5px" overflowX="scroll">
                    <Box flexShrink="0" py="6px" px="12px" mr="10px" bg="blue.700" borderRadius="15px">
                        <Text fontSize="12px">線上策展</Text>
                    </Box>
                    <Box flexShrink="0" py="6px" px="12px" mr="10px" bg="blue.700" borderRadius="15px">
                        <Text fontSize="12px">線上策展</Text>
                    </Box>
                    <Box flexShrink="0" py="6px" px="12px" mr="10px" bg="blue.700" borderRadius="15px">
                        <Text fontSize="12px">線上策展</Text>
                    </Box>
                    <Box flexShrink="0" py="6px" px="12px" mr="10px" bg="blue.700" borderRadius="15px">
                        <Text fontSize="12px">線上策展</Text>
                    </Box>
                    <Box flexShrink="0" py="6px" px="12px" mr="10px" bg="blue.700" borderRadius="15px">
                        <Text fontSize="12px">線上策展</Text>
                    </Box>
                    <Box flexShrink="0" py="6px" px="12px" bg="blue.700" borderRadius="15px">
                        <Text fontSize="12px">線上策展</Text>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}
export default WorkFilter;