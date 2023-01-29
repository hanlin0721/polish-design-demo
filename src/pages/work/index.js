import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState, useEffect, useRef } from "react";
import { Box, Flex, Text, Hide } from "@chakra-ui/react";
import Map from "../../components/Maps/Map.js";
import WorkFilter from "../../components/Work/WorkFilter.js";
import WorkResult from "../../components/Work/WorkResult.js";
import WorkList from "../../components/Work/WorkList.js";
import WorkDesc from "../../components/Work/WorkDesc.js";
import useControl from "../../store/useControl.js";
import { WorkDesktopContent, WorkMobileContent } from "../../components/Work/WorkContent.js";

const Work = () => {
    const [isMap, setIsMap] = useState(false);
    const [result, _] = useState([
        {
            id: 1,
            type: ["online-expo", "developing"],
            title: "Counter-Strike Online (CSO)",
            date: "2021-12-12",
            usedTechniques: [
                "產品策略",
                "使用者研究",
                "UX 設計",
                "UI 設計",
                "後端開發",
                "前端開發"
            ],
            content: [
                {
                    id: 1,
                    image: "http://fakeimg.pl/518x271/",
                    text: "Nice Pass Express 是一個面向創作者的內容平台，為創作者提供了創作，發表，分享，展示和賺取收入的一站式解決方案。它提供了創作者們一個對話和互動的空間，能夠更好地發揮他們的創造力，並與全球的讀者和觀眾建立起互動關係。"
                },
                {
                    id: 2,
                    image: "http://fakeimg.pl/518x271/",
                    text: "Nice Pass Express 是一個面向創作者的內容平台，為創作者提供了創作，發表，分享，展示和賺取收入的一站式解決方案。它提供了創作者們一個對話和互動的空間，能夠更好地發揮他們的創造力，並與全球的讀者和觀眾建立起互動關係。"
                }
            ],
            techniques: [
                {
                    id: 1,
                    title: "Discovery",
                    details: [
                        "Workshop",
                        "User Research",
                        "Project Planning",
                        "Consulting",
                        "Strategy"
                    ]
                },
                {
                    id: 2,
                    title: "Strategy",
                    details: [
                        "Information Architecture",
                        "Stakeholder Alignment",
                        "Prototyping",
                        "Persona Development",
                        "Design"
                    ]
                },
                {
                    id: 3,
                    title: "Art Direction",
                    details: [
                        "Visual Moodboards",
                        "UI Design",
                        "UX Design",
                        "Development"
                    ]
                },
                {
                    id: 4,
                    title: "Development",
                    details: [
                        "Front-end Development",
                        "Back-end Development",
                        "Quality Assurance"
                    ]
                },
                {
                    id: 5,
                    title: "Quality Assurance",
                    details: [
                        "Usability Testing",
                        "Performance Testing",
                        "Functionality Testing"
                    ]
                }
            ],
            thumbnail: "http://fakeimg.pl/300x200/",
            thumbnailAlt: "test",
        },
        {
            id: 2,
            title: "沙西米",
            type: ["developing"],
            date: "2021-12-12",
            usedTechniques: [
                "產品策略",
                "使用者研究",
                "UX 設計",
                "UI 設計",
                "後端開發",
                "前端開發"
            ],
            content: [
                {
                    id: 1,
                    image: "http://fakeimg.pl/300x200/",
                    text: "Nice Pass Express 是一個面向創作者的內容平台，為創作者提供了創作，發表，分享，展示和賺取收入的一站式解決方案。它提供了創作者們一個對話和互動的空間，能夠更好地發揮他們的創造力，並與全球的讀者和觀眾建立起互動關係。"
                },
                {
                    id: 2,
                    image: "http://fakeimg.pl/300x200/",
                    text: "Nice Pass Express 是一個面向創作者的內容平台，為創作者提供了創作，發表，分享，展示和賺取收入的一站式解決方案。它提供了創作者們一個對話和互動的空間，能夠更好地發揮他們的創造力，並與全球的讀者和觀眾建立起互動關係。"
                }
            ],
            techniques: [
                {
                    id: 1,
                    title: "Discovery",
                    details: [
                        "Workshop",
                        "User Research",
                        "Project Planning",
                        "Consulting",
                        "Strategy"
                    ]
                },
                {
                    id: 2,
                    title: "Strategy",
                    details: [
                        "Information Architecture",
                        "Stakeholder Alignment",
                        "Prototyping",
                        "Persona Development",
                        "Design"
                    ]
                },
                {
                    id: 3,
                    title: "Art Direction",
                    details: [
                        "Visual Moodboards",
                        "UI Design",
                        "UX Design",
                        "Development"
                    ]
                },
                {
                    id: 4,
                    title: "Development",
                    details: [
                        "Front-end Development",
                        "Back-end Development",
                        "Quality Assurance"
                    ]
                },
                {
                    id: 5,
                    title: "Quality Assurance",
                    details: [
                        "Usability Testing",
                        "Performance Testing",
                        "Functionality Testing"
                    ]
                }
            ],
            thumbnail: "http://fakeimg.pl/300x200/",
            thumbnailAlt: "test",
        },
        {
            id: 3,
            title: "fourDesire",
            type: ["design-support"],
            date: "2021-12-12",
            usedTechniques: [
                "產品策略",
                "使用者研究",
                "UX 設計",
                "UI 設計",
                "後端開發",
                "前端開發"
            ],
            content: [
                {
                    id: 1,
                    image: "http://fakeimg.pl/300x200/",
                    text: "Nice Pass Express 是一個面向創作者的內容平台，為創作者提供了創作，發表，分享，展示和賺取收入的一站式解決方案。它提供了創作者們一個對話和互動的空間，能夠更好地發揮他們的創造力，並與全球的讀者和觀眾建立起互動關係。"
                },
                {
                    id: 2,
                    image: "http://fakeimg.pl/300x200/",
                    text: "Nice Pass Express 是一個面向創作者的內容平台，為創作者提供了創作，發表，分享，展示和賺取收入的一站式解決方案。它提供了創作者們一個對話和互動的空間，能夠更好地發揮他們的創造力，並與全球的讀者和觀眾建立起互動關係。"
                }
            ],
            techniques: [
                {
                    id: 1,
                    title: "Discovery",
                    details: [
                        "Workshop",
                        "User Research",
                        "Project Planning",
                        "Consulting",
                        "Strategy"
                    ]
                },
                {
                    id: 2,
                    title: "Strategy",
                    details: [
                        "Information Architecture",
                        "Stakeholder Alignment",
                        "Prototyping",
                        "Persona Development",
                        "Design"
                    ]
                },
                {
                    id: 3,
                    title: "Art Direction",
                    details: [
                        "Visual Moodboards",
                        "UI Design",
                        "UX Design",
                        "Development"
                    ]
                },
                {
                    id: 4,
                    title: "Development",
                    details: [
                        "Front-end Development",
                        "Back-end Development",
                        "Quality Assurance"
                    ]
                },
                {
                    id: 5,
                    title: "Quality Assurance",
                    details: [
                        "Usability Testing",
                        "Performance Testing",
                        "Functionality Testing"
                    ]
                }
            ],
            thumbnail: "http://fakeimg.pl/300x200/",
            thumbnailAlt: "test",
        },
    ])
    const [filteredResult, setResult] = useState(result)
    const [selectedFilter, selectFilter] = useState("all")
    const [selectedWork, selectWork] = useState(null)
    const [nextWork, setNextWork] = useState(null)
    const [othersWork, setOthersWork] = useState(null)
    const [showWorkContent, setShowWorkContent] = useState(false)
    const goScene = useControl((state) => state.goScene);
    const contentRef = useRef()

    useEffect(() => {
        if (selectedFilter === null || selectedFilter === "all") {
            setResult(result)
            return
        }

        const filteredResult = result.filter((obj) => {
            return obj.type.find(element => element === selectedFilter)
        })

        setResult(filteredResult)
    }, [selectedFilter])

    const toggle = (workId) => {

        if (contentRef.current) {
            contentRef.current.scrollTo(0, 0)
        }

        if (workId) {
            selectWork(filteredResult.find(element => element.id === workId))
            setNextWork(filteredResult[(filteredResult.findIndex(element => element.id === workId) + 1) % filteredResult.length])
            setOthersWork(filteredResult.filter(element => element.id !== workId))
            setShowWorkContent(true)
        }
        switch (workId) {
            case 1:
                goScene(3)
                break;
            case 2:
                goScene(4)
                break;
            case 3:
                goScene(5)
                break;
            default:
                setShowWorkContent(false)
                goScene(1)
                break;
        }
        // router.push({
        //     pathname: "/work",
        //     query: {
        //         workId
        //     }
        // }, undefined, { shallow: true })
    }

    return <>
        <style
            dangerouslySetInnerHTML={{ __html: "body { overflow: hidden }" }}
        />
        <Flex
            pos="relative"
            justify="center"
            align="center"
            w="100%"
            minH="100vh"
            bgColor="#000"
        >
            {/* three.js */}
            <Box
                w="100%"
                h="100%"
                pos="absolute"
                left="0"
                top="0"
                transform="translate3d(0, 0, 0)"
                transition="2.5s ease 1.5s"
                bgColor="#000"
                opacity={1}
            >
                <Map isMap={isMap} />
            </Box>
            <Hide below='md'>
                <Box
                    opacity={1}
                    h="100vh"
                    bg="blue.900"
                    pos="absolute"
                    left="0"
                    // transform={`translateX(${isMenu ? "0%" : "-100%"})`}
                    transition="0.3s ease"
                >
                    <Flex h="100%" color="white">
                        <Box minW="171px" w="10vw" borderRight="1px" borderColor="blue.600">
                        </Box>

                        {/* 專案縮圖 */}
                        <WorkList
                            works={filteredResult}
                            show={showWorkContent}
                            onClick={toggle}
                            flexDir="column"
                        />

                        <Box
                            minW={showWorkContent ? "560px" : "271px"}
                            w="15vw"
                            h="100%"
                            pos="relative"
                            transition="0.3s ease"
                        >
                            <Flex
                                display="block"
                                flexDir="column"
                                h="100%"
                                opacity={showWorkContent ? "0" : "1"}
                            >

                                <Box borderBottom="1px" borderColor="blue.600">
                                    <Text pl="19.5px" pt="25px" pb="19px" fontSize="20px" fontWeight="bold">Portfolio</Text>
                                </Box>

                                <WorkFilter
                                    filter={selectedFilter}
                                    selectFilter={selectFilter}
                                    options={
                                        [
                                            {
                                                id: 1,
                                                title: "全部",
                                                type: "all"
                                            },
                                            {
                                                id: 2,
                                                title: "線上策展",
                                                type: "online-expo"
                                            },
                                            {
                                                id: 3,
                                                title: "產品開發",
                                                type: "developing"
                                            },
                                            {
                                                id: 4,
                                                title: "設計協助",
                                                type: "design-support"
                                            },
                                        ]
                                    } />

                                <WorkResult result={filteredResult} onClick={toggle} />
                            </Flex>

                            <WorkDesktopContent
                                ref={contentRef}
                                work={selectedWork}
                                show={showWorkContent}
                                nextWork={nextWork}
                                othersWork={othersWork}
                            />
                        </Box>
                    </Flex>
                </Box>
            </Hide>

            {/* 手機版專案縮圖 */}
            <Hide above="md">
                <Flex
                    w="100%"
                    h="20%"
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
                    >
                        <Box
                            flex="1"
                            w="100%"
                            h="100%"
                        />
                        <Box
                            w="100%"
                        >
                            {/* 專案縮圖 */}
                            <WorkList
                                works={filteredResult}
                                show={true}
                                flexDir="row"
                                isMobile={true}
                                onClick={toggle}
                            />
                        </Box>
                    </Flex>
                </Flex>
            </Hide>

            <Hide above="md">
                <WorkMobileContent
                    ref={contentRef}
                    work={selectedWork}
                    selectWork={selectWork}
                    show={showWorkContent}
                    nextWork={nextWork}
                    othersWork={othersWork}
                    onClick={toggle}
                />
            </Hide>
        </Flex >
    </>
}

export default Work;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}