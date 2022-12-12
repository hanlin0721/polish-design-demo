import { Box, Image } from "@chakra-ui/react"
import giftBox from "../images/common/gift-box.png"

const GiftBox = () => {
    return (
        <>
            <Box
                pos="fixed"
                right="42px"
                bottom="39px"
                cursor="pointer"
            >
                <Image src={giftBox.src}>

                </Image>
            </Box>
        </>
    )
}
export default GiftBox