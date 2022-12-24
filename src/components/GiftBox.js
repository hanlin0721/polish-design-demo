import { Box, Image } from "@chakra-ui/react"
import giftBox from "../images/common/gift-box.png"
import appStore from "../store/store";

const GiftBox = () => {
    const { isAnimReady } = appStore;
    return (
        <>
            <Box
                display={{ base: "none", sm: "block" }}
                pos={{ base: "none", sm: "fixed" }}
                right="42px"
                bottom="39px"
                cursor="pointer"
                opacity={isAnimReady ? 1 : 0}
                transition="1s ease 1s"
            >
                <Image src={giftBox.src}>

                </Image>
            </Box>
        </>
    )
}
export default GiftBox