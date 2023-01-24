import { InputGroup, Input, InputRightElement, VStack, Box, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { useState } from "react";

const CustomSelect = ({ items, value, placeholder, ...props }) => {

    const [_value, setValue] = useState(value)
    const [open, setOpen] = useState(false)
    const [hover, setHover] = useState({})

    const handleChange = (e) => {
        console.log(e)
        console.log(e.target.innerText)
        setValue(e.target.innerText)
        setOpen(false)
    }

    const mouseOver = (event, index) => {
        setHover(c => {
            return {
                ...c,
                [index]: true
            };
        })
    }

    const mouseOut = (event, index) => {
        setHover(c => {
            return {
                ...c,
                [index]: false
            };
        })
    }

    return (
        <Box
            {...props}
            w={{ base: "90%", sm: "80%" }}
            bg="transparent"
            pos="relative"
        >
            <Input
                _placeholder={{ color: "rgba(255,255,255,0.5)" }}
                placeholder={placeholder}
                border="0"
                outline="none"
                bg="blue.800"
                pt="30px"
                pb="30px"
                pl="28px"
                overflow="hidden"
                value={_value}
                borderRadius="16px"
                isReadOnly
                cursor="pointer"
                onClick={() => setOpen(!open)}
            />
            <VStack
                borderRadius="16px"
                bg="blue.800"
                w="100%"
                h="207px"
                pos="absolute"
                bottom="-217px"
                overflow="scroll"
                opacity={open ? 1 : 0}
                zIndex={open ? 999 : 0}
            >
                {
                    items.map((item, index) => {
                        return <Box
                            w="100%"
                            onMouseEnter={(e) => {
                                mouseOver(e, index);
                            }}
                            onMouseLeave={(e) => {
                                mouseOut(e, index);
                            }}
                            bg={hover[index] ? 'white' : 'blue.800'}
                            color={hover[index] ? 'black' : 'white'}
                            key={index}
                            pt="16.5px"
                            pb="16.5px"
                            pl="28.5px"
                            onClick={handleChange}
                        >
                            <Text fontSize="16px">
                                {item}
                            </Text>
                        </Box>
                    })
                }
            </VStack>
        </Box >
    )
}

export default CustomSelect