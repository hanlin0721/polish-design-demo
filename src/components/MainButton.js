import { Flex, Image, Text, Box, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdOutlineOpenInNew } from "react-icons/md";

const MainButton = ({
  w = "285px",
  text = "前往報名",
  href,
  target,
  hasIcon = true,
  disabled = false,
  bg = "blue.300",
  center = false,
  ...props
}) => {
  const router = useRouter();
  return (
    <Flex
      pointerEvents={disabled ? "none" : "visible"}
      opacity={disabled ? 0.5 : 1}
      justify="center"
      align="center"
      cursor="pointer"
      bgColor={bg}
      boxShadow="0px 3px 6px 0 rgba(0, 0, 0, .16)"
      w={w}
      h="48px"
      lineHeight="1"
      color="#fff"
      rounded="24px"
      p="15px"
      mx={center ? "auto" : ""}
      onClick={() => {
        if (target === "_blank") {
          window.open(href);
        } else {
          router.push(href);
        }
      }}
      pos="relative"
      {...props}
    >
      <Text fontSize="16px" fontWeight="bold" className="poppins">
        {text}
      </Text>
      {hasIcon && (
        <Box pos="absolute" right="22px" top="auto">
          <Icon as={MdOutlineOpenInNew} w="16px" />
        </Box>
      )}
    </Flex>
  );
};

export default MainButton;
