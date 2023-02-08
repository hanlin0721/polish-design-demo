import { Box, Image, Link } from "@chakra-ui/react";
import logo from "../../images/home/polish-design-logo.svg";
import logoWhite from "../../images/home/polish-design-white-logo.svg";
import appStore from "../../store/store";
import useControl from "../../store/useControl";
import { useRouter } from "next/router";

const HomeLogo = ({ isWhite, ...props }) => {
    const { isAnimReady } = appStore;
    const router = useRouter()
    const { scene, scenes } = useControl((state) => state)

    const isHomePage = router.asPath === '/'
    const isSceneTwo = scene === scenes.LOOKING_FLOATING_BLUE_POLISH_MAN
    const isSceneThree = scene === scenes.LOOKING_PORTFOLIO

    return (
        // <Link href="/" display={isHomePage && (isSceneTwo || isSceneThree) ? "none" : "block"}>
        <Link href="/" display={isHomePage && (isSceneTwo || isSceneThree) ? "none" : "block"}>
            <Box
                pos="fixed"
                left={{ base: "29px", sm: "42px" }}
                top={{ base: "26px", sm: "48px" }}
                // left={{ base: "7%", xs: "29px", sm: "3.1875%" }}
                // top={{ base: "4.2%", xs: "26px", sm: "3.44%" }}
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