import { selectAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(selectAnatomy.keys)

const xl = defineStyle({
    fontSize: 'lg',
    px: '6',
    h: '16',
})

const sizes = {
    xl: definePartsStyle({
        field: xl,
        icon: defineStyle({
            fontSize: 'xl',
            mr: 2
        })
    }),
}

export const selectTheme = defineMultiStyleConfig({ sizes })