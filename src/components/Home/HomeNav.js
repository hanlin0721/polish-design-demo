import { Box, Image, Link } from "@chakra-ui/react";
import logo from "../../images/home/polish-design-logo.svg";
import logoWhite from "../../images/home/polish-design-white-logo.svg";
import appStore from "../../store/store";

const HomeLogo = ({ isWhite, ...props }) => {
    const { isAnimReady } = appStore;
    return (
        <Link href="/">
            <Box
                pos="fixed"
                left={{ base: "7%", xs: "29px", sm: "3.1875%" }}
                top={{ base: "4.2%", xs: "26px", sm: "3.44%" }}
                // transform={`translateX(${isAnimReady ? "0" : "calc(-100% - 42px)"})`}
                opacity={isAnimReady ? 1 : 0}
                transition="1s ease 1s"
                zIndex={10}
                cursor="pointer"
            >
                {
                    isWhite ?
                        <Image w={{ base: "100%", sm: "80px" }} src={logoWhite.src} alt="logo" /> :
                        <Image w={{ base: "100%", sm: "80px" }} src={logo.src} alt="logo" />
                }

            </Box>
        </Link>
    );
}

const HomeNav = (props) => {
    return <HomeLogo {...props} />;
};

export default HomeNav;