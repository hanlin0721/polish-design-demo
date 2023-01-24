import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import { Box, Flex, Text, Hide } from "@chakra-ui/react";
import Map from "../../components/Maps/Map.js";
import WorkFilter from "../../components/Work/WorkFilter.js";
import WorkResult from "../../components/Work/WorkResult.js";
import WorkList from "../../components/Work/WorkList.js";
import WorkDesc from "../../components/Work/WorkDesc.js";
import useControl from "../../store/useControl.js";

const Work = () => {
    const [isMap, setIsMap] = useState(false);
    const [result, _] = useState([
        {
            id: 1,
            title: "Counter-Strike Online (CSO)",
            thumbnail: "http://fakeimg.pl/300x200/",
            thumbnailAlt: "test",
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
            ]
        },
        {
            id: 2,
            title: "沙西米",
            thumbnail: "http://fakeimg.pl/300x200/",
            thumbnailAlt: "test",
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
            ]
        },
        {
            id: 3,
            title: "fourDesire",
            thumbnail: "http://fakeimg.pl/300x200/",
            thumbnailAlt: "test",
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
            ]
        }
    ])
    // const [techniques, setTechniques] = useState([
    //     {
    //         id: 1,
    //         title: "Discovery",
    //         details: [
    //             "Workshop",
    //             "User Research",
    //             "Project Planning",
    //             "Consulting",
    //             "Strategy"
    //         ]
    //     },
    //     {
    //         id: 2,
    //         title: "Strategy",
    //         details: [
    //             "Information Architecture",
    //             "Stakeholder Alignment",
    //             "Prototyping",
    //             "Persona Development",
    //             "Design"
    //         ]
    //     },
    //     {
    //         id: 3,
    //         title: "Art Direction",
    //         details: [
    //             "Visual Moodboards",
    //             "UI Design",
    //             "UX Design",
    //             "Development"
    //         ]
    //     },
    //     {
    //         id: 4,
    //         title: "Development",
    //         details: [
    //             "Front-end Development",
    //             "Back-end Development",
    //             "Quality Assurance"
    //         ]
    //     },
    //     {
    //         id: 5,
    //         title: "Quality Assurance",
    //         details: [
    //             "Usability Testing",
    //             "Performance Testing",
    //             "Functionality Testing"
    //         ]
    //     }
    // ])

    const [seletedWork, setSeletedWork] = useState(result[0])
    const [showWorkDetail, setShowWorkDetail] = useState(false)
    const goScene = useControl((state) => state.goScene);

    const toggle = (workId) => {
        console.log('workId', workId)
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
                goScene(1)
                break;
        }
        // router.push({
        //     pathname: "/work",
        //     query: {
        //         workId
        //     }
        // }, undefined, { shallow: true })
        setShowWorkDetail(!showWorkDetail)
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

                        <WorkList
                            works={result}
                            showWorkDetail={showWorkDetail}
                            onClick={toggle}
                            flexDir="column"
                        />

                        <Box
                            minW={showWorkDetail ? "560px" : "271px"}
                            w="15vw"
                            h="100%"
                            pos="relative"
                            transition="0.3s ease"
                        >
                            {/* 專案列表 */}
                            <Flex
                                display="block"
                                flexDir="column"
                                h="100%"
                                opacity={showWorkDetail ? "0" : "1"}
                            >

                                <Box borderBottom="1px" borderColor="blue.600">
                                    <Text pl="19.5px" pt="25px" pb="19px" fontSize="20px" fontWeight="bold">Portfolio</Text>
                                </Box>

                                <WorkFilter showWorkDetail={showWorkDetail} />

                                <WorkResult result={result} onClick={toggle} />
                            </Flex>

                            <WorkDesc work={seletedWork} show={showWorkDetail} />
                        </Box>
                    </Flex>
                </Box>
            </Hide>

            <Hide above="md">
                <Flex
                    w="100%"
                    h="20%"
                    bg="transparent"
                    pos="absolute"
                    top="0"
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
                            <WorkList
                                works={result}
                                showWorkDetail={true}
                                flexDir="row"
                                onClick={toggle}
                            />
                        </Box>
                    </Flex>
                </Flex>
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