import {
  Box,
  AspectRatio,
} from "@chakra-ui/react";

const Youtube = ({ url, ...props }) => {
  let embedUrl = url;

  if (!url.includes("embed")) {
    if (url.includes("www.youtube.com/watch?")) {
      embedUrl =
        "https://www.youtube.com/embed/" +
        url.split("https://www.youtube.com/watch?v=")[1];
    } else {
      embedUrl =
        "https://www.youtube.com/embed/" + url.split("https://youtu.be/")[1];
    }
  }
  return (
    <Box {...props}>
      <AspectRatio w="100%" ratio={1.778}>
        <iframe src={embedUrl} allowFullScreen />
      </AspectRatio>
    </Box>
  );
};

export default Youtube;
