import { Flex, Box, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import WorkList from "./WorkList";
import WorkFilter from "./WorkFilter";
import WorkResult from "./WorkResult";
import { WorkDesktopContent } from "./WorkContent";

export const WorkDesktopNav = React.forwardRef(({
    show,
    works,
    selectedWork,
    selectedFilter,
    selectFilter,
    nextWork,
    othersWork,
    onClick,
    types,
}, ref) => {
    console.log(ref)
    return (
        <Box
            h="100vh"
            bg="blue.900"
            pos="absolute"
            left="0"
            transition="0.3s ease"
        >
            <Flex h="100%" color="white">
                <Box minW="171px" w="10vw" borderRight="1px" borderColor="blue.600">
                </Box>

                {/* 專案縮圖 */}
                <WorkList
                    works={works}
                    selectedWork={selectedWork}
                    show={show}
                    onClick={onClick}
                    flexDir="column"
                />

                <Box
                    minW={show ? "560px" : "271px"}
                    w="15vw"
                    h="100%"
                    pos="relative"
                    transition="0.3s ease"
                >
                    <Flex
                        display="block"
                        flexDir="column"
                        h="100%"
                        opacity={show ? "0" : "1"}
                    >

                        <Box borderBottom="1px" borderColor="blue.600">
                            <Text pl="19.5px" pt="25px" pb="19px" fontSize="20px" fontWeight="bold">Portfolio</Text>
                        </Box>

                        <WorkFilter
                            filter={selectedFilter}
                            selectFilter={selectFilter}
                            options={types} />

                        <WorkResult articles={works} onClick={onClick} />
                    </Flex>

                    <WorkDesktopContent
                        ref={ref}
                        work={selectedWork}
                        types={types}
                        show={show}
                        nextWork={nextWork}
                        othersWork={othersWork}
                        onClick={onClick}
                    />
                </Box>
            </Flex>
        </Box>
    )
})
WorkDesktopNav.displayName = "WorkDesktopNav"

export const WorkMobileNav = ({
    works,
    selectedWorkCode,
    onClick,
}) => {
    return (
        <Box
            w="100%"
            h="22%"
            bg="transparent"
            pos="absolute"
            top="0.5%"
            left="0"
            borderRadius="30px"
        >
            <Flex
                w="98%"
                h="100%"
                bg="blue.900"
                borderRadius="30px"
                m="auto"
                pos="relative"
                zIndex={1}
                flexDir="column"
                overflow="hidden"
                justifyContent="end"
                px="14px"
            >
                <Flex
                    mb="20px"
                    flexBasis="50px"
                    overflow="scroll"
                    w="100%"
                >
                    {
                        works?.map(article => {
                            return (
                                <Box
                                    borderRadius="50%"
                                    minW="50px"
                                    w="50px"
                                    h="50px"
                                    mx="6px"
                                    key={article.article_code}
                                    onClick={() => onClick(article.article_code)}
                                    pos="relative"
                                    opacity={
                                        (article.article_code === selectedWorkCode) ?
                                            "100%" : selectedWorkCode ? "38%" : "100%"
                                    }
                                >
                                    <Image
                                        w="50px"
                                        h="50px"
                                        objectFit="cover"
                                        src={article.image}
                                        borderRadius="full"
                                        alt={article.og_title}
                                    />
                                </Box>
                            )
                        })
                    }
                </Flex>
            </Flex>
        </Box>
    )
}

WorkMobileNav.displayName = "WorkMobileNav"