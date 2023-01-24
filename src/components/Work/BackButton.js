import { Box, Center } from "@chakra-ui/react";
const BackButton = (props) => {
    return (
        <>
            <Box>
                <Center py="15px">
                    <Box
                        bg="grey"
                        borderRadius="50%"
                        w="42px"
                        h="42px"
                        {...props}
                    >

                    </Box>
                </Center>
            </Box>
        </>
    )
}
export default BackButton;