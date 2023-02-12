import { Box, Center, Image, Flex } from "@chakra-ui/react";
import backIcon from "../../images/icons/work-navbar-back.svg"
const BackButton = (props) => {
    return (
        <>
            <Box>
                <Center py="15px">
                    <Flex
                        bg="blue.700"
                        borderRadius="50%"
                        w="42px"
                        h="42px"
                        {...props}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Image src={backIcon.src} />
                    </Flex>
                </Center>
            </Box>
        </>
    )
}
export default BackButton;