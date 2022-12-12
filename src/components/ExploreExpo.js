import { Text, Flex } from "@chakra-ui/react";

const ExploreExpo = ({ setIsMap, ...props }) => {
    return (
        <Flex
            {...props}
            justifyContent="center"
            align="center"
            bg="brand.main"
            color="white"
            cursor="pointer"
            w="234px"
            h="48px"
            rounded="24px"
            mx="auto"
            pl="13px"
            pr="17px"
            onClick={() => {
                console.log('click')
                setIsMap(true)
            }}
        >
            <Text fontSize="16px" fontWeight="600" textAlign="center">
                探索臺大
            </Text>
        </Flex>
    )
}

export default ExploreExpo