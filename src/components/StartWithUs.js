import { Flex, Text } from "@chakra-ui/react";

const StartWithUs = () => {
    return (
        <Flex
            pos="fixed"
            right="42px"
            top="35px"
            bg="#2A313A"
            color="white"
            cursor="pointer"
        >
            <Text
                pt="17px"
                pb="14px"
                px="34px"
                fontWeight="bold"
            >
                Start with us
            </Text>
        </Flex>
    )
}

export default StartWithUs;