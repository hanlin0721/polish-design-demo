import appStore from "../store/store";
import { Flex } from "@chakra-ui/react";

function StatusLoading() {
  const { isLoading } = appStore;
  return (
    <Flex
      pointerEvents="none"
      zIndex="10001"
      justify="center"
      align="center"
      pos="fixed"
      w="100%"
      h="100%"
      bgColor="#000"
      opacity={isLoading ? 1 : 0}
      transition="0.5s ease 0.5s"
    />
  );
}

export default StatusLoading;
