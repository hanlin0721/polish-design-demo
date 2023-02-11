import {
    Box,
    Flex,
    Image,
    Text,
    HStack,
    VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState, useRef, memo } from "react";
import { useTranslation } from "next-i18next";
import MainButton from "../MainButton";
import useControl from "../../store/useControl";
import api from "../../store/api";
import Editor from "../Editor";
const WorkContentFooter = ({ data }) => {
    const { t } = useTranslation("common");
    return (
        <Box
            mt="70px"
            pb="70px"
            pos="relative"
            bgColor="#EEF2F5"
            px={{ base: "20px", sm: "70px" }}
            w={{ base: "calc(100% + 40px)", sm: "calc(100% + 140px)" }}
            left={{ base: "-20px", sm: "-70px" }}
            overflow="hidden"
        >
            <HStack color="#959595" pt="30px" mb="28px">
                <Text
                    fontSize="16px"
                    textAlign="center"
                    fontWeight="bold"
                    mr="10px"
                    pr="10px"
                    borderRight="1px solid #D6D6D6"
                    lineHeight="1"
                >
                    {data?.code.split("-")[0]}
                    <br />
                    {data?.code.split("-")[1]}
                </Text>
                <Text flex="1 1 auto" fontSize="12px" pb="4px">
                    National Taiwan University
                    <br />
                    Study Abroad Expo
                </Text>
            </HStack>
            <Text fontWeight="600" fontSize="24px" mb="30px">
                {data?.title}
            </Text>
            <VStack mt="30x" justify="flex-start" align="flex-start">
                {data?.apply_url && (
                    <MainButton
                        display="inline-flex"
                        pr="50px"
                        pl="20px"
                        w="auto"
                        text={t("maps.apply-btn")}
                        href={data?.apply_url}
                        target="_blank"
                        boxShadow="none"
                    />
                )}
                {data?.experiences?.map(({ url }) => (
                    <MainButton
                        key={url}
                        display="inline-flex"
                        pr="50px"
                        pl="20px"
                        w="auto"
                        text={t("maps.note-btn")}
                        href={url}
                        target="_blank"
                        boxShadow="none"
                    />
                ))}
            </VStack>
            <Box
                cursor="pointer"
                mt="30px"
                w="90px"
                p="7px"
                border="1px solid rgba(0, 0, 0, .1)"
                rounded="100%"
                onClick={() => window.open(data?.university_url || data?.official)}
                bgColor="#fff"
            >
                <Image src={data?.logo} alt={data?.title} />
            </Box>
            <Box pos="absolute" right="-30px" bottom="-37px" w="180px">
                <Image src={data?.image} alt={data?.title} />
            </Box>
        </Box>
    );
};

export const WorkTitle = memo(({ work, area }) => {
    const { title, logo } = work;
    return (
        <Box
            display={{ base: "none", sm: "block" }}
            pointerEvents="none"
            pos="fixed"
            left="0"
            right="0"
            mx="auto"
            top="161px"
            w="300px"
            minH="90px"
            rounded="10px"
            bgColor="#EEF2F5"
            px="20px"
            pt="22px"
            pb="7px"
            fontSize="16px"
            zIndex="10000"
            textAlign="center"
        >
            <Box
                pos="absolute"
                left="0"
                right="0"
                mx="auto"
                top="-30px"
                w="46px"
                h="47px"
                bgColor="#fff"
                p="3px"
                rounded="100%"
                boxShadow="0 3px 5px rgba(0, 0, 0, .15)"
            >
                <Image src={logo} alt={title} />
            </Box>
            <Text fontWeight="bold" lineHeight="21px">
                {title}
            </Text>
            <Text color="#959595" mt="9px">
                {area}
            </Text>
        </Box>
    );
});
WorkTitle.displayName = "WorkTitle";

export const WorkDesktopContent = React.forwardRef(({
    isMobile,
    work,
    selectWork,
    types,
    show,
    nextWork,
    othersWork,
    onClick,
    ...props
}, ref) => {
    console.log(types)
    const [data, setData] = useState(work);
    const [type, setType] = useState(null)
    // const router = useRouter();
    // const { locale } = router;
    // const { token } = appStore;
    const { t } = useTranslation("common");
    // const contentRef = useRef();
    useEffect(() => {
        console.log('=', work?.article_code)
        if (work?.article_code) {
            api.getArticle({ article_code: work?.article_code }).then(({
                success,
                article
            }) => {
                console.log('success', success)
                if (success) {
                    console.log('===article', article)
                    const type = types.find((type) => type.type === article?.type).name
                    setData(article);
                    setType(type)
                }
            });
        }
        // contentRef?.current?.scrollTo(0, 0);
        // if (type === "org") {
        //     if (work?.id) {
        //         api.getOrgDetail(work?.id, token).then((resp) => {
        //             if (resp?.data?.success) {
        //                 const data = {
        //                     ...work,
        //                     ...resp?.data?.data[locale === "en" ? "en" : "tw"],
        //                 };
        //                 setData(data);
        //             }
        //         });
        //     }
        // } else {
        //     if (work?.id) {
        //         api.getWorkDetail(work?.id, token).then((resp) => {
        //             if (resp?.data?.success) {
        //                 const data = {
        //                     ...work,
        //                     ...resp?.data?.data[locale === "en" ? "en" : "tw"],
        //                     is_answered: resp?.data?.data.is_answered,
        //                     is_favorite: resp?.data?.data.is_favorite,
        //                     is_passed: resp?.data?.data.is_passed,
        //                 };
        //                 setData(data);
        //             }
        //         });
        //     }
        // }
    }, [work?.article_code]);
    const updateScroll = useControl((state) => state.updateScroll)
    const test = (e) => {
        updateScroll(e.target.scrollTop)
    }

    return (
        <Box
            ref={ref}
            display={show ? "block" : "none"}
            pos="relative"
            top={isMobile ? "0" : "-100%"}
            pb={isMobile ? "15%" : "0%"}
            h="100%"
            overflowY="scroll"
            onScroll={test}
            zIndex={1}
        >

            {/* 專案類型 */}
            <Box
                pl={isMobile ? "20px" : "46px"}
                pr={isMobile ? "20px" : "0px"}
                overflow="hidden"
            >
                <Flex py="17px" overflowX="scroll">
                    {
                        <Box flexShrink="0" py="6px" px="12px" mr="10px" bg="#303C4A" borderRadius="15px">
                            <Text fontSize="12px">
                                {type}
                            </Text>
                        </Box>
                    }
                </Flex>
            </Box>

            {/* 專案標題 */}
            <Box
                pl={isMobile ? "20px" : "46px"}
                pr={isMobile ? "20px" : "0px"}
                mb="20px"
            >
                <Text fontSize="24px" as="b">
                    {data?.title}
                </Text>
            </Box>

            {/* 專案日期 */}
            <Flex
                pl={isMobile ? "20px" : "46px"}
                color="blue.300"
            >
                <Text fontSize="16px" as="b" pr="42px">
                    {data?.created_at.split(' ')[0]}
                </Text>
                <Text fontSize="16px" >
                    {data?.partner}
                </Text>
            </Flex>

            {/* 使用的專業 */}
            <Flex mt="40px">
                {
                    isMobile ?
                        null : <Box flex="1" borderRight="1px" />
                }
                <VStack
                    spacing={1}
                    align="start"
                    w="100px"
                    ml="20px"
                    borderLeft={isMobile ? "1px" : "0px"}
                    pl={isMobile ? "20px" : "0px"}
                >
                    {
                        data?.jobs.map((obj, index) => {
                            return (
                                <Box
                                    key={index}
                                    pb={(work?.jobs.length - 1) === index ? "24px" : "0px"}
                                >
                                    <Text>{obj.value}</Text>
                                </Box>
                            )
                        })
                    }
                </VStack>
            </Flex>

            {/* 編輯器內容 */}
            <Box pl={isMobile ? "20px" : "46px"} >
                <Box w="514px" h="271px" bg="grey" overflow="hidden">
                    <Image src={work?.image} objectFit="cover" w="100%" h="100%" />
                </Box>
                <Editor content={data?.content} />
            </Box>

            {/* 技術範圍 */}
            <Box pl={isMobile ? "20px" : "46px"}>
                <Text as="b">技術範圍</Text>
                <Flex flexWrap="wrap" flexDir={isMobile ? "column" : "row"}>
                    {
                        data?.scopes?.map((scope, index) => {
                            return (
                                <Box w="50%" mt="35px" key={index}>
                                    <Text mb="13px" fontWeight="bold">{scope.title}</Text>
                                    {
                                        scope.items.map((obj, objIndex) => {
                                            return (
                                                <Box key={`${objIndex}`}>
                                                    <Text>{obj.value}</Text>
                                                </Box>
                                            )
                                        })
                                    }
                                </Box>
                            )
                        })
                    }
                </Flex>

                <Flex mt="60px" mb="74px">
                    <MainButton
                        text="與我們合作"
                        hasIcon={false}
                        href="contact"
                        center={isMobile ? true : false}
                    />
                </Flex>
            </Box>

            {/* 下個專案 */}
            <Box
                pt="48px"
                pl={isMobile ? "20px" : "46px"}
                bg={{ base: "blue.50", sm: "transparent" }}
                color={{ base: "blue.900", sm: "white" }}
                overflow="hidden"
            >
                <Text fontWeight="bold" fontSize="20px" mb="24px">下個專案</Text>
                <Text fontSize="16px" maxW="243px">{nextWork?.title}</Text>
                <Box
                    mt="28px"
                    mb="28px"
                    w="504px"
                    h="295px"
                    bg="grey"
                    borderRadius="10px"
                    onClick={() => onClick(nextWork?.article_code)}
                    overflow="hidden"
                >
                    <Image src={nextWork?.image} objectFit="cover" w="100%" h="100%" />
                </Box>
            </Box>

            {/* 其他專案 */}
            <Box
                pl={isMobile ? "20px" : "46px"}
                pt="23px"
                bg="blue.900"
                color="white"
                display={isMobile ? "block" : "none"}
            >
                <Text fontWeight="bold" fontSize="20px" mb="24px">其他專案</Text>

                <Flex w="100%" overflowX="scroll" overflowY="hidden">
                    {
                        othersWork?.map((work) => {
                            return (
                                <Box
                                    key={work?.article_code}
                                    onClick={() => onClick(work?.article_code)}
                                >
                                    <Box
                                        mt="28px"
                                        mr="14px"
                                        w="152px"
                                        h="84px"
                                        bg="grey"
                                        borderRadius="10px"
                                        overflow="hidden"
                                    >
                                        <Image src={work?.image} objectFit="cover" w="100%" h="100%" />
                                    </Box>

                                    <Text
                                        mt="14px"
                                        h="50px"
                                        fontSize="16px"
                                        w="152px"
                                        display="-webkit-box"
                                    >
                                        {work?.title}
                                    </Text>

                                </Box>
                            )
                        })
                    }
                </Flex>
            </Box>
        </Box >
    );
});
WorkDesktopContent.displayName = "WorkDesktopContent";

export const WorkMobileContent =
    React.forwardRef(({ work, selectWork, show, nextWork, othersWork, onClick, ...props }, ref) => {

        const [isFull, setFull] = useState(false);
        const [isOpen, setOpen] = useState(!!work);

        useEffect(() => {
            if (work?.article_code) {
                setOpen(false);
                setTimeout(() => {
                    setOpen(true);
                }, 400);
            } else {
                setOpen(false);
                setFull(false);
            }
            // return () => selectWork(null);
        }, [work?.article_code]);

        return (
            <Box
                pos="fixed"
                left="0"
                bottom="0"
                w="100%"
                h="100vh"
                zIndex="10001"
                transform={`translateY(${isOpen ? (isFull ? "15%" : "50%") : "100%"})`}
                transition="0.3s ease"
                borderTopRadius="20px"
                overflow="hidden"
                bg="blue.900"
                color="white"
            >
                {
                    <Flex
                        onClick={() => {
                            selectWork(null);
                            setFull(false);
                            setOpen(false);
                        }}
                        bgColor="blue.900"
                        justify="flex-end"
                        align="center"
                        px="25px"
                        pt="15px"
                        pb="10px"
                        cursor="pointer"
                    >
                        {/* <Image w="15px" opacity="0.7" src={IconClose.src} alt="close" /> */}
                        <Text cursor="pointer">Close</Text>
                    </Flex>
                }
                <Box
                    h="100%"
                    pb={isFull ? "20%" : "100%"}
                    onTouchStart={() => {
                        if (isOpen && !isFull) {
                            setFull(true);
                        }
                    }}
                >
                    <WorkDesktopContent
                        ref={ref}
                        isMobile={true}
                        work={work}
                        show={show}
                        selectWork={selectWork}
                        nextWork={nextWork}
                        othersWork={othersWork}
                        onClick={onClick}
                    />
                </Box>
            </Box>
        );
    })
    ;
WorkMobileContent.displayName = "WorkMobileContent";