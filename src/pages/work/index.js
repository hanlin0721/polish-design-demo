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
import { useRouter } from "next/router";
import api from "../../store/api.js";

const Work = () => {
    const router = useRouter()
    const [isMap, setIsMap] = useState(false);
    const [articles, setArticles] = useState(null)
    const [types, setTypes] = useState(null)

    const [filteredArticles, setFilteredArticles] = useState(articles)
    const [selectedFilter, selectFilter] = useState("all")
    const [selectedWork, selectWork] = useState(null)
    const [nextWork, setNextWork] = useState(null)
    const [othersWork, setOthersWork] = useState(null)
    const [showWorkContent, setShowWorkContent] = useState(false)
    const scenes = useControl((state) => state.scenes);
    const goScene = useControl((state) => state.goScene);
    const contentRef = useRef()

    // useEffect(() => {
    //     if (selectedFilter === null || selectedFilter === "all") {
    //         setFilteredArticles(articles)
    //         return
    //     }

    //     const filteredArticles = articles.filter((obj) => {
    //         return obj.type.find(element => element === selectedFilter)
    //     })

    //     setFilteredArticles(filteredArticles)
    // }, [selectedFilter])

    const toggle = (workId) => {
        console.log(workId)
        // router.push()
        // history.pushState({
        // }, null, `/work/${workId}`);

        // console.log('router.asPath', window.location.href)
        if (contentRef.current) {
            contentRef.current.scrollTo(0, 0)
        }

        if (typeof (workId) === 'string') {
            selectWork(filteredArticles.find(element => element.article_code === workId))
            setNextWork(filteredArticles[(filteredArticles.findIndex(element => element.article_code === workId) + 1) % filteredArticles.length])
            setOthersWork(filteredArticles.filter(element => element.article_code !== workId))
            setShowWorkContent(true)
            goScene(workId)
        } else {
            setShowWorkContent(false)
            goScene(scenes.LOOKING_BLUE_POLISH_MAN)
        }
        // router.push({
        //     pathname: "/work",
        //     query: {
        //         workId
        //     }
        // }, undefined, { shallow: true })
    }

    // API
    useEffect(() => {
        if (router.isReady) {
            goScene(scenes.LOOKING_BLUE_POLISH_MAN)
            api.getArticles().then(({ success, articles, types }) => {
                if (success) {
                    setArticles(articles)
                    setTypes(types)

                    if (selectedFilter === null || selectedFilter === "all") {
                        setFilteredArticles(articles)
                        return
                    }

                    const filteredArticles = articles.filter((obj) => {
                        return obj.type.find(element => element === selectedFilter)
                    })

                    setFilteredArticles(filteredArticles)
                }
            });
        }
    }, [router.isReady]);

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
                    transition="0.3s ease"
                >
                    <Flex h="100%" color="white">
                        <Box minW="171px" w="10vw" borderRight="1px" borderColor="blue.600">
                        </Box>

                        {/* 專案縮圖 */}
                        <WorkList
                            works={filteredArticles}
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
                                    options={types} />

                                <WorkResult articles={filteredArticles} onClick={toggle} />
                            </Flex>

                            <WorkDesktopContent
                                ref={contentRef}
                                work={selectedWork}
                                types={types}
                                show={showWorkContent}
                                nextWork={nextWork}
                                othersWork={othersWork}
                                onClick={toggle}
                            />
                        </Box>
                    </Flex>
                </Box>
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