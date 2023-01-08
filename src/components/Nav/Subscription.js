import { Box, Flex, Text } from "@chakra-ui/react";
import CustomInputField from "../Form/CustomInputField.js";

const Subscription = () => {
    return (
        <>
            <Flex mb="20px">
                <Box
                    w="7px"
                    h="7px"
                    m="auto"
                    ml="0"
                    mr="15px"
                    bg="#00D5BE"
                    borderRadius="50%"
                />
                <Text color="white">收到我們的動態</Text>
            </Flex>
            <Box h="69px" mb={{ base: "70px", sm: "62.5px" }}>
                <CustomInputField
                    placeholder="你的 Email"
                    showActionIcon
                />
            </Box>
        </>
    )
}

export default Subscription