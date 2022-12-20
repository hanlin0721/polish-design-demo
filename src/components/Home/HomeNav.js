import { Box, Image } from "@chakra-ui/react";
import homeLogo from "../../images/home/polish-design-logo.svg";
import appStore from "../../store/store";

const HomeLogo = () => {
    const { isAnimReady } = appStore;

    return (
        <Box
            pos="fixed"
            left={{ base: "7%", sm: "2.1875%" }}
            top={{ base: "5%", sm: "4.44%" }}
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