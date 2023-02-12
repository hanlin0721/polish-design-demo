import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState, useEffect, useRef } from "react";
import { Box, Flex, Hide } from "@chakra-ui/react";
import Map from "../../components/Maps/Map.js";
import useControl from "../../store/useControl.js";
import { WorkMobileContent } from "../../components/Work/WorkContent.js";
import { useRouter } from "next/router";
import api from "../../store/api.js";
import { WorkDesktopNav, WorkMobileNav } from "../../components/Work/WorkNav.js"

const Work = () => {
    const router = useRouter()
    // const { workId } = router.query
    const [isMap, setIsMap] = useState(false);
    const [articles, setArticles] = useState(null)
    const [types, setTypes] = useState(null)

    const [filteredArticles, setFilteredArticles] = useState(null)
    const [selectedFilter, selectFilter] = useState("all")
    const [selectedWork, selectWork] = useState(null)
    const [nextWork, setNextWork] = useState(null)
    const [othersWork, setOthersWork] = useState(null)
    const [showWorkContent, setShowWorkContent] = useState(false)
    const scenes = useControl((state) => state.scenes);
    const goScene = useControl((state) => state.goScene);
    const workDesktopContentRef = useRef()
    const workMobileContentRef = useRef()

    console.log('filteredArticles', filteredArticles)

    // API
    useEffect(() => {
        if (router.isReady) {

            goScene(scenes.LOOKING_BLUE_POLISH_MAN)

            api.getArticles()
                .then(({ success, articles, types }) => {

                    if (success) {
                        setArticles(articles)
                        setFilteredArticles(articles)
                        setTypes([{
                            type: "all",
                            name: "全部"
                        }].concat(types))
                    }
                })
        }
    }, [router.isReady]);

    useEffect(() => {
        if (selectedFilter === null || selectedFilter === "all") {
            setFilteredArticles(articles)
            return
        }

        const filteredArticles = articles.filter((obj) => obj.type === selectedFilter)

        setFilteredArticles(filteredArticles)
    }, [selectedFilter])

    useEffect(() => {
        if (filteredArticles && router.query.workId) {
            toggle(router.query.workId)
        }

    }, [filteredArticles])

    const toggle = (workId) => {
        history.pushState({
        }, null, `/work?workId=${workId}`);

        // router.push(`?workId=${workId}`, undefined, { shallow: true })
        // console.log('router.asPath', window.location.href)
        if (workDesktopContentRef.current) {
            workDesktopContentRef.current.scrollTo(0, 0)
        }

        if (workMobileContentRef.current) {
            workMobileContentRef.current.scrollTo(0, 0)
        }

        if (typeof (workId) === 'string') {
            selectWork(filteredArticles?.find(element => element.article_code === workId))
            setNextWork(filteredArticles[(filteredArticles?.findIndex(element => element.article_code === workId) + 1) % filteredArticles?.length])
            setOthersWork(filteredArticles?.filter(element => element.article_code !== workId))
            setShowWorkContent(true)
            goScene(workId)
        } else {
            setShowWorkContent(false)
            goScene(scenes.LOOKING_BLUE_POLISH_MAN)
        }
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
                <WorkDesktopNav
                    ref={workDesktopContentRef}
                    show={showWorkContent}
                    works={filteredArticles}
                    selectedWork={selectedWork}
                    selectedFilter={selectedFilter}
                    selectFilter={selectFilter}
                    types={types}
                    nextWork={nextWork}
                    othersWork={othersWork}
                    onClick={toggle}
                />
            </Hide>

            {/* 手機版專案縮圖 */}
            <Hide above="md">
                <WorkMobileNav
                    works={filteredArticles}
                    selectedWorkCode={selectedWork?.article_code}
                    onClick={toggle}
                />
            </Hide>

            <Hide above='md'>
                <WorkMobileContent
                    ref={workMobileContentRef}
                    work={selectedWork}
                    selectWork={selectWork}
                    show={showWorkContent}
                    types={types}
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