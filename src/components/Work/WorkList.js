import { Flex, Box, Image } from "@chakra-ui/react";
import BackButton from "./BackButton";

const WorkList = ({
    works,
    showWorkDetail,
    onClick,
    flexDir,
    ...props
}) => {

    return (
        <>
            <Flex
                w="100%"
                h="100%"
                borderRight="1px"
                flexDir={flexDir}
                borderColor="blue.600"
                display={showWorkDetail ? "block" : "none"}
                {...props}
            >
                {flexDir === "row" ? null : <BackButton onClick={onClick} />}

                {/* 其他專案圓縮圖 */}
                <Flex
                    flex="1"
                    borderTop="1px"
                    borderColor={flexDir === "row" ? "transparent" : "blue.600"}
                    px="14.5px"
                    py="10px"
                    flexDir={flexDir}
                >
                    {
                        works.map(work => {
                            return (
                                <Box
                                    bg="grey"
                                    borderRadius="50%"
                                    w="50px"
                                    h="50px"
                                    mr={flexDir === "row" ? "12px" : "0"}
                                    mb={flexDir === "row" ? 0 : "15px"}
                                    key={work.id}
                                    onClick={() => onClick(work.id)}
                                >
                                    <Image w="100%" h="100%" objectFit="cover" src={work.thumbnail} borderRadius="full" alt={work.thumbnailAlt} />
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