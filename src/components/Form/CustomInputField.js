import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons"
import React, { useState } from "react";

const CustomInputField = React.forwardRef(({ placeholder, value, onChange, onBlur, showActionIcon, ...props }, ref) => {

    // const [value, setValue] = useState('')
    // const handleChange = (e) => {
    //     console.log(e.target.value)
    //     setValue(e.target.value)
    // }

    return (
        <InputGroup
            w="100%"
            h="100%"
            overflow="hidden"
            color="white"
        >
            <Input
                {...props}
                ref={ref}
                _placeholder={{ color: "rgba(255,255,255,0.5)" }}
                placeholder={placeholder}
                borderRadius="16px"
                borderColor="blue.300"
                outline="none"
                bg="blue.800"
                pt="24px"
                pb="23px"
                pl="25px"
                h="100%"
                overflow="hidden"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            {showActionIcon ? <InputRightElement h="100%" pt="30px" pb="30px" pr="30px">
                <ArrowForwardIcon color='white' />
            </InputRightElement> : null}

        </InputGroup>
    )
})

export default CustomInputField