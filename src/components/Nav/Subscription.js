import { Box, Flex, Text, InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons"
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
            <InputGroup
                mb={{ base: "70px", sm: "62.5px" }}
                w={{ base: "90%", sm: "80%" }}
                borderRadius="14px"
                overflow="hidden"
                color="white"
            >
                <Input
                    _placeholder={{ color: "rgba(255,255,255,0.5)" }}
                    placeholder='你的 Email'
                    border="0"
                    outline="none"
                    bg="#2A313A"
                    pt="30px"
                    pb="30px"
                    pl="28px"
                    overflow="hidden"
                />
                <InputRightElement pt="30px" pb="30px" pr="30px">
                    <ArrowForwardIcon color='white' />
                </InputRightElement>
            </InputGroup>
        </>
    )
}

export default Subscription