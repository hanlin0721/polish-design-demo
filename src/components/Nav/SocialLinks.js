import { Box, Flex, Link, Image } from "@chakra-ui/react";
import IconFb from "../../images/home/icons/icon-fb.svg"
import IconIg from "../../images/home/icons/icon-ig.svg"
import IconMedium from "../../images/home/icons/Icon-medium.svg"

const SocialLinks = () => {
    return (
        <Flex align="center" mb={{ base: "20%", sm: "11.9%" }}>
            <Link href="https://www.instagram.com/polishdesigntw/">
                <a target="_blank">
                    <Box>
                        <Image src={IconIg.src} alt="icon_ig" />
                    </Box>
                </a>
            </Link>
            <Link href="https://www.facebook.com/polishdesigntw/">
                <a target="_blank">
                    <Box mx="26px">
                        <Image src={IconFb.src} alt="icon_fb" />
                    </Box>
                </a>
            </Link>
            <Link href="https://medium.com/@polish-design">
                <a target="_blank">
                    <Box>
                        <Image src={IconMedium.src} alt="icon_medium" />
                    </Box>
                </a>
            </Link>
        </Flex>
    )
}

export default SocialLinks