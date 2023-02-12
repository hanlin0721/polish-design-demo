import { Flex, Text } from "@chakra-ui/react";
import appStore from "../store/store";
import { useRouter } from "next/router";

const StartWithUs = () => {
    const { isAnimReady } = appStore;
    const router = useRouter()

    const goContact = () => {
        router.push('contact')
    }

    return (
        <Flex
            pos={{ base: "none", sm: "fixed" }}
            display={{ base: "none", sm: "block" }}
            right="42px"
            top="35px"
            bg="blue.800"
            color="white"
            cursor="pointer"
            borderRadius="36px"
            opacity={isAnimReady ? 1 : 0}
            transition="1s ease 1s"
            onClick={goContact}
            zIndex="9"
        >
            <Text
                pt="14.6px"
                pb="13.4px"
                px="42px"
                fontWeight="bold"
                fontSize="16px"
            >
                與我們合作
            </Text>
        </Flex>
    )
}

export default StartWithUs;