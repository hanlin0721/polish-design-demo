import { Flex, Box, Image, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import BackButton from "./BackButton";

const WorkList = ({
    works,
    show,
    onClick,
    flexDir,
    isMobile,
    ...props
}) => {

    const [articles, setArticles] = useState(null)

    useEffect(() => {
        setArticles(works)
    }, [works])

    return (
        <>
            <Flex
                w="100%"
                h="100vh"
                borderRight={isMobile ? "0px" : "1px"}
                flexDir={flexDir}
                borderColor="blue.600"
                display={show ? "block" : "none"}
                {...props}
                overflow="hidden"
            >
                {flexDir === "row" ? null : <BackButton onClick={onClick} />}

                {/* 其他專案圓縮圖 */}
                <Flex
                    flex="1"
                    borderTop="1px"
                    borderColor={flexDir === "row" ? "transparent" : "blue.600"}
                    px="14.5px"
                    flexDir={flexDir}
                    alignItems="center"
                    py="14px"
                    h="100%"
                    overflow="scroll"
                >
                    {
                        articles?.map(article => {
                            return (
                                <Box
                                    bg="grey"
                                    borderRadius="50%"
                                    w="50px"
                                    h="50px"
                                    mr={flexDir === "row" ? "12px" : "0"}
                                    mb={flexDir === "row" ? 0 : "15px"}
                                    key={article.article_code}
                                    onClick={() => onClick(article.article_code)}
                                >
                                    <Image w="50px" h="50px" objectFit="cover" src={article.og_image} borderRadius="full" alt={article.og_title} />
                                </Box>
                            )
                        })
                    }
                </Flex>
            </Flex>
        </>
    )
}
export default WorkList;