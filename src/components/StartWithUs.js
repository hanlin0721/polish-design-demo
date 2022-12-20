import { Flex, Text } from "@chakra-ui/react";
import appStore from "../store/store";

const StartWithUs = () => {
    const { isAnimReady } = appStore;
    return (
        <Flex
            pos={{ base: "none", sm: "fixed" }}
            right="42px"
            top="35px"
            bg="#2A313A"
            color="white"
            cursor="pointer"
            borderRadius="36px"
            opacity={isAnimReady ? 1 : 0}
            transition="1s ease 1s"
        >
            <Text
                pt="15px"
                pb="14px"
                px="42px"
                fontWeight="bold"
            >
                與我們合作
            </Text>
        </Flex>
    )
}

export default StartWithUs;