import { useState, useEffect, useRef } from "react";
import { Spinner, Flex, Box, Stack, Image } from "@chakra-ui/react";
import cloud from "../images/home/cloud.png";
import { useWindowLoad } from "../utils/window";
import Lottie from "lottie-react";
import LogoAnim from "../lottie/221002_Loading_Lottie.json";
import appStore from "../store/store";
import { useLocalStorage } from "../utils/window";

// const InOutSounds = ({ isPlay }) => {
//   const playerRef = useRef();
//   useEffect(() => {
//     if (playerRef.current?.play) {
//       if (isPlay) {
//         playerRef.current?.play();
//       } else {
//         playerRef.current?.pause();
//       }
//     }
//   }, [isPlay]);

//   return (
//     <audio
//       ref={playerRef}
//       id="inout"
//       preload="auto"
//       hidden={true}
//       src="/sounds/inout.mp4"
//       type="audio/mp4"
//     ></audio>
//   );
// };

const Anim = () => <Lottie animationData={LogoAnim} loop={false} />;

function MapsLoading() {
  const [loading, setLoading] = useState(true);
  const [, , isWindowAnimReady] = useWindowLoad();
  // const [isMusic] = useLocalStorage(false, "p-ntu-bgm");
  const { mapStatus } = appStore;

  useEffect(() => {
    if (isWindowAnimReady && !mapStatus) {
      appStore.isAnimReady = true;
      document?.querySelector("#locked")?.removeAttribute("id");
      setLoading(false);
    } else if (isWindowAnimReady && mapStatus === "ready") {
      appStore.isAnimReady = true;
      document?.querySelector("#locked")?.removeAttribute("id");
      setLoading(false);
    }
  }, [isWindowAnimReady, mapStatus]);

  return (
    <Flex
      id="loading"
      pointerEvents={loading ? "visible" : "none"}
      zIndex="10002"
      justify="center"
      align="center"
      pos="fixed"
      left="0"
      top="0"
      w="100vw"
      h="100vh"
      bgColor="#000"
      opacity={loading ? 1 : 0}
      transition={!loading ? "0.5s ease" : ""}
    >
      <Stack
        cursor="pointer"
        spacing={"12px"}
        align="center"
        justify="center"
        w="50%"
        maxW="384px"
        pos="relative"
        opacity={loading ? 1 : 0}
        transition={!loading ? "0.5s ease" : ""}
      >
        {/* <Box mb="20px">
          <Anim />
        </Box> */}
        <Spinner w="15px" h="15px" speed="0.3s" color="#fff" />
      </Stack>
    </Flex>
  );
}

export default MapsLoading;
