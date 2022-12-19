import { Box, Image } from "@chakra-ui/react";
import homeLogo from "../../images/home/logo.png";
import appStore from "../../store/store";

const HomeLogo = () => {
    const { isAnimReady } = appStore;

    return (
        <Box
            pos="fixed"
            left={{ base: "29px", sm: "42px" }}
            top="48px"
            // transform={`translateX(${isAnimReady ? "0" : "calc(-100% - 42px)"})`}
            opacity={isAnimReady ? 1 : 0}
            transition="1s ease 1s"
            zIndex={10}
            cursor="pointer"
        >
            <Image src={homeLogo.src} alt="homeLogo" />
        </Box>
    );
}

const HomeNav = () => {
    return <HomeLogo />;
};

export default HomeNav;