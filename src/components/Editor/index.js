import { Flex, Box, Text, chakra, AspectRatio } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Youtube from "./Youtube";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";

const CTA = ({ title, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      style={{ textDecoration: "none" }}
      rel="noreferrer"
    >
      <Flex
        my="5px"
        display="inline-flex"
        minW="227px"
        px="20px"
        h="46px"
        justify="center"
        align="center"
        rounded="23px"
        bgColor="brand.main"
        fontWeight="bold"
        fontSize="16px"
        mx="auto"
      >
        <Box color="#ffffff">{title}</Box>
      </Flex>
    </a>
  );
};

const TextTitle = ({ text }) => {
  return (
    <chakra.h1 fontSize="24px" my="30px" maxW="476px" fontWeight="800" id={text}>
      {text}
    </chakra.h1>
  );
};

const TextSubTitle = ({ text }) => {
  return (
    <chakra.h2 fontSize="18px" my="30px" fontWeight="500" id={text}>
      {text}
    </chakra.h2>
  );
};

const TextSubSubTitle = ({ text }) => {
  return (
    <chakra.h3 fontSize="22px" my="30px" fontWeight="500" id={text}>
      {text}
    </chakra.h3>
  );
};

const TextContent = ({ text, index }) => {
  return <Box mb="30px" maxW="476px" mt={index === 0 ? "30px" : "0px"} dangerouslySetInnerHTML={{ __html: text }} />;
};

const TextTable = ({ text }) => {
  return (
    <Box maxW="calc(100vw - 40px)" overflow="auto">
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </Box>
  );
};

const TextIntro = ({ text }) => {
  return (
    <Box
      px="23px"
      py="18px"
      pb="27px"
      mb="30px"
      fontWeight="500"
      lineHeight="1.6"
      border="1px solid #C4C4C4"
      boxShadow="inset 0 -9px 0px 0px #C4C4C4"
    >
      {text}
    </Box>
  );
};

const Image = ({ image, alt, other }) => {
  const [isOpen, open] = useState(false);
  return (
    <>
      <Box
        my="30px"
        w="100%"
        cursor="pointer"
        onClick={() => open(true)}
      >
        <img src={image} alt={alt} style={{ width: "100%" }} />
        <Box color="blue.300" px="28px" fontSize="14px" mt="13px">
          {other}
        </Box>
      </Box>
      {isOpen && (
        <Lightbox
          mainSrc={image}
          onCloseRequest={() => open(false)}
          onImageLoad={console.log}
        />
      )}
    </>
  );
};

const Divider = () => {
  return <Box my="30px" w="100%" h="1px" bgColor="#7C7C7C"></Box>;
};

const ReadMore = ({ article_code, title }) => {
  return (
    <Link href={`/blog/${article_code}`}>
      <a>
        <Box my="30px">
          <Box mr="10px" color="#095FB7" fontSize="14px" mb="8px">
            延伸閱讀
          </Box>
          <Flex fontSize="18px">
            <Box mr="10px">👉</Box>
            <Box color="#095FB7" textDecoration="underline">
              {title}
            </Box>
          </Flex>
        </Box>
      </a>
    </Link>
  );
};

const Editor = ({ content = [], ...props }) => {
  return (
    <Box id="editor" color="#fff" pb="50px" {...props}>
      {content.map((c, index) => {
        switch (c.type) {
          case "text-title":
            return <TextTitle {...c} key={c.order} />;
          case "text-introduction":
            return <TextIntro {...c} key={c.order} />;
          case "text-content":
            if (c?.text?.includes("<table")) {
              return <TextTable {...c} key={c.order} />;
            } else {
              return <TextContent {...c} key={c.order} index={index} />;
            }
          case "single-image":
            return <Image {...c} key={c.order} />;
          case "youtube":
            return <Youtube {...c} my="30px" key={c.order} />;
          case "text-subtitle":
            return <TextSubTitle {...c} key={c.order} />;
          case "text-subsubtitle":
            return <TextSubSubTitle {...c} key={c.order} />;
          case "read-more":
            return <ReadMore {...c} key={c.order} />;
          case "divider":
            return <Divider {...c} key={c.order} />;
          case "link-button":
            return <CTA {...c} key={c.order}></CTA>;
          default:
            return null;
        }
      })}
    </Box>
  );
};

export default Editor;
