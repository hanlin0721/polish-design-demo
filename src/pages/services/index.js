import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import TechTeam from '../../images/services/tech-team.png'
import Creator from '../../images/services/creator.png'
import Processing from '../../images/services/processing.png'
import BussinessExp from '../../images/services/bussiness-exp.png'

import OpenedEgg from '../../images/services/opened-egg.png'
import Bag from '../../images/services/bag.png'
import Drawing from '../../images/services/drawing.png'

import KevinWithPolishModel from '../../images/services/kevin-with-polish-model.png'
import ArrowDownwardIcon from "../../images/home/icons/Icon_arrow_downward_black.svg";

import ZoraSmile from "../../images/services/banner.png";

import Subscription from "../../components/Nav/Subscription.js"
import SocialLinks from "../../components/Nav/SocialLinks.js"

const About = () => {

    const sections = [
        {
            title: "技術團隊",
            desc: "我們擁有完善的軟體技術團隊，擁有豐富技術背景以面對各項商業難題，並且能與顧客一同討論產出解方，是能夠合作、協作的工程團隊。",
            image: TechTeam.src
        },
        {
            title: "創作者網絡",
            desc: "我們擁有完善的軟體技術團隊，擁有豐富技術背景以面對各項商業難題，並且能與顧客一同討論產出解方，是能夠合作、協作的工程團隊。",
            image: Creator.src
        },
        {
            title: "受驗證的程序",
            desc: "Polish Design 能夠幫助您制定業務戰略、達到短期目標以及確保您解決市場上的重大決策所需，我們往往能清楚了解我們在商業模式以及合作中所扮演的角色，並盡情發揮。",
            image: Processing.src
        },
        {
            title: "多個商業模式經驗",
            desc: "Polish 管理團隊由企業家組成，並參與磨人設計的日常運營。包含訂閱制電商 Wassup 貓砂、線下社群經營 Legere 商務俱樂部 ... 等商業模式",
            image: BussinessExp.src
        }
    ]

    const servies = [
        {
            title: "線上策展",
            desc: "我們製作能達成成果及視覺體驗的線上策展，過往協助國立臺灣大學、親子天下完成各項年度大會。",
            image: OpenedEgg.src
        },
        {
            title: "產品開發",
            desc: "我們聘請了優秀的技術團隊，他們能夠針對核心業務構建產品 MVP 和擴展產品。",
            image: Bag.src
        },
        {
            title: "設計支援",
            desc: "我們聘請獲獎無數的設計師進行設計，依據您的不同預算區間，為您找到合適的解決方案。",
            image: Drawing.src
        }
    ]

    const processes = [
        {
            id: 1,
            title: "線上策展",
            steps: [
                {
                    id: 0,
                    stepTitle: "實證",
                    processes: [
                        "客戶訪談",
                        "評估",
                        "初步可行性"
                    ]
                },
                {
                    id: 1,
                    stepTitle: "原型",
                    processes: [
                        "KPI 對焦",
                        "策略定調",
                        "設計 Prototye"
                    ]
                },
                {
                    id: 2,
                    stepTitle: "開發",
                    processes: [
                        "開發 MVP 並迭代",
                        "上線計畫",
                        "UX/UI testing",
                        "Branding"
                    ]
                },
                {
                    id: 3,
                    stepTitle: "展前",
                    processes: [
                        "產品開發並測試",
                        "數據追蹤測試",
                        "展期資安維護"
                    ]
                },
                {
                    id: 4,
                    stepTitle: "展後",
                    processes: [
                        "數據分析",
                        "展覽 Roadmap 計畫"
                    ]
                }
            ],
            caseLink: "",
            resourceLink: ""
        },
        {
            id: 2,
            title: "產品開發",
            steps: [
                {
                    id: 5,
                    stepTitle: "實證",
                    processes: [
                        "調查",
                        "評估",
                        "初步可行性",
                        "競品和市場分析",
                        "客戶訪談"
                    ]
                },
                {
                    id: 6,
                    stepTitle: "原型",
                    processes: [
                        "探索工作坊",
                        "TA 對焦",
                        "策略定調",
                        "設計 Prototye",
                        "財務計畫"
                    ]
                },
                {
                    id: 7,
                    stepTitle: "開發",
                    processes: [
                        "開發 MVP 並迭代",
                        "銷售活動",
                        "上線計畫",
                        "商務計畫更新",
                        "UX/UI testing",
                        "Branding"
                    ]
                },
                {
                    id: 8,
                    stepTitle: "成長",
                    processes: [
                        "產品開發與管理",
                        "階段策略、目標設定",
                        "商務拓展",
                        "成長營銷",
                        "產品 Roadmap 計畫",
                        "團隊和領導力建設"
                    ]
                },
                {
                    id: 9,
                    stepTitle: "規模化",
                    processes: [
                        "銷售和營銷規模化",
                        "走向高端市場",
                        "開發新品\n(相同市場與技術)",
                        "大規模招聘",
                        "公司文化建設",
                        "產品開發與管理"
                    ]
                },
            ],
            caseLink: "",
            resourceLink: ""
        },
        {
            id: 3,
            title: "設計支援",
            steps: [
                {
                    id: 10,
                    stepTitle: "訪談",
                    processes: [
                        "了解需求",
                        "評估",
                        "初步可行性"
                    ]
                },
                {
                    id: 11,
                    stepTitle: "設計",
                    processes: [
                        "進行設計",
                        "調整設計",
                        "定案"
                    ]
                }
            ],
            caseLink: "",
            resourceLink: ""
        },
    ]

    return (
        <Box
            bg="#EDF6FF"
        >
            {/* We polish all day! */}
            <Box>
                <Box
                    pt={{ base: "28%", sm: "8%" }}
                    pl={{ base: "5%", sm: "20%" }}
                    mb={{ base: "10%", sm: "5%" }}
                >
                    <Text
                        fontSize={{ base: "48px", sm: "4.6vw" }}
                        mb="5%"
                        fontWeight="bold"
                        lineHeight="1.3"
                    >
                        We polish<br />all day!
                    </Text>
                    <Text
                        fontWeight="bold"
                        maxW={{ base: "100%", sm: "575px" }}
                        w={{ base: "87%", sm: "100%" }}
                        fontSize={{ base: "14px", sm: "16px" }}
                    >
                        Polish Design. 是一家提供數位解決方案的軟體設計公司，致力於為企業開發創意、行得通的數位產品，以實現任何商業挑戰及有趣的點子。
                    </Text>
                </Box>

                <Flex
                    flexWrap="wrap"
                    pl={{ base: "5%", sm: "20%" }}
                    pr="5%"
                    justifyContent="space-between"
                >
                    {sections.map((section, index) => (
                        <Box
                            w={{ base: "100%", sm: "45%" }}
                            mb={{ base: "25%", sm: "0%" }}
                            key={`section${index}`}
                        >
                            <Flex
                                h={{ base: "65%", sm: "75%" }}
                                alignItems="center"
                            >
                                <Image pointerEvents="none" src={section.image} pos="relative" right={{ base: (index % 2 == 0) ? "-15%" : "15%", sm: "0" }} />
                            </Flex>
                            <Text fontWeight="bold" fontSize={{ base: "18px" }} mb={{ base: "8px", sm: "0px" }}>{section.title}</Text>
                            <Text>{section.desc}</Text>
                        </Box>
                    ))}
                </Flex>
            </Box>

            {/* What we provide */}
            <Box
                bg="#FFFFFF"
                borderRadius={{ base: "0px", sm: "100px" }}
                borderTopLeftRadius={{ base: "50px" }}
                borderBottomLeftRadius={{ base: "50px" }}
                pt="5%"
                pb="8%"
                ml={{ base: "5.4%", sm: "12%" }}
                mb="24px"
            >
                <Flex
                    pl={{ base: "15%", sm: "10%" }}
                    pr="10%"
                >
                    <Box pos="relative">
                        <Text
                            fontSize={{ base: "10vw", sm: "4.6vw" }}
                            mb="1%"
                            fontWeight="bold"
                        >
                            What we<br />provide
                        </Text>

                        <Text
                            pos="absolute"
                            right={{ base: "-55%", sm: "-22%" }}
                            bottom={{ base: "10%", sm: "14%" }}
                            fontWeight="bold"
                        >
                            我們的服務
                        </Text>
                    </Box>
                </Flex>

                <Flex
                    mt="40px"
                    pl={{ base: "10%", sm: "10%" }}
                    pr="10%"
                    flexWrap="wrap"
                    justifyContent="space-between"
                >
                    {
                        servies.map((service, index) => {
                            return (
                                <Box
                                    w={{ base: "100%", sm: "27%" }}
                                    mb={{ base: "40%", sm: "0%" }}
                                    key={`service${index}`}
                                >
                                    <Flex
                                        h="90%"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <Image pointerEvents="none" src={service.image} />
                                    </Flex>
                                    <Text fontWeight="bold">{service.title}</Text>
                                    <Text>{service.desc}</Text>
                                </Box>
                            )
                        })
                    }
                </Flex>
            </Box>

            {/* Kevin */}
            <Box
                bg="#212932"
                borderRadius={{ base: "50px", sm: "100px" }}
                mx={{ base: "1%", sm: "0.5%" }}
                overflow="hidden"
            >
                <Flex
                    pl={{ base: "5%", sm: "6%" }}
                    pr={{ base: "5%", sm: "14%", md: "8%" }}
                    pt={{ base: "12%", sm: "5%" }}
                    flexDirection={{ base: "column", sm: "row" }}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Flex
                        order={{ base: "1", sm: "0" }}
                        color="white"
                        justifyContent="center"
                        alignItems="center"
                        pos="relative"
                    >
                        <Image pointerEvents="none"
                            src={KevinWithPolishModel.src}
                            order={{ base: "1", sm: "0" }}
                            w={{ base: "100%", sm: "90%" }}
                            transform={{ base: "scale(1.2)" }}
                        />
                        <Box
                            pos="absolute"
                            top="-12%"
                            right="0"
                            display={{ base: "flex", sm: "none" }}
                            alignItems="flex-end"
                            flexDir="column"
                        >
                            <Text mb="19px">Founder</Text>
                            <Text>Kevin Hsu</Text>
                            <Text>許 家豪</Text>
                        </Box>
                    </Flex>


                    <Box
                        ml={{ base: "0%", sm: "14%" }}
                        color="white"
                    >
                        <Text
                            mb={{ base: "120px", sm: "5%" }}
                            fontWeight="bold"
                            fontSize={{ base: "6vw", sm: "1.8vw" }}
                            w={{ base: "80vw", sm: "100%" }}
                            maxW="580px"
                        >
                            “ 我們的使命是創造、擴展線上化的各種可能，幫助人們取得持續地成功 ”
                        </Text>
                        <Box
                            display={{ base: "none", sm: "block" }}
                        >
                            <Text mb="19px">Founder</Text>
                            <Text>Kevin Hsu</Text>
                            <Text>許 家豪</Text>
                        </Box>
                    </Box>

                </Flex>
            </Box>

            {/* The Process */}
            <Box>
                <Box
                    pt={{ base: "14%", sm: "8%" }}
                    pl={{ base: "5%", sm: "20%" }}
                    mb={{ base: "15%", sm: "5%" }}
                >
                    <Text
                        fontSize={{ base: "12vw", sm: "4.6vw" }}
                        fontWeight="bold"
                        mb="1%"
                    >
                        The process
                    </Text>
                    <Text
                        fontWeight="bold"
                        w={{ base: "80%", sm: "100%" }}
                    >
                        無論是哪個領域或行業，我們都可以創造、擴展它。
                    </Text>
                </Box>

                <Box pl={{ base: "5%", sm: "20%" }} pr={{ base: "5%", sm: "10%" }}>
                    {
                        processes.map((process, processIndex) => {
                            return (
                                <Box key={process.id}>
                                    <Text mb={{ base: "25px", sm: "45px" }} fontSize="24px">{process.title}</Text>
                                    <Flex
                                        mb="5%"

                                        flexDir={{ base: "column", sm: "row" }}
                                    >
                                        {
                                            process.steps.map((step) => {
                                                return (
                                                    <Box
                                                        w={processIndex == 2 ? { base: "100%", sm: "15%" } : "100%"}
                                                        mr="4%"
                                                        mb={{ base: "20px", sm: "0px" }}
                                                        key={step.id}
                                                    >
                                                        <Box
                                                            borderBottom="1px"
                                                            borderColor="rgba(33,41,50,0.2)"
                                                            onClick={() => console.log(step.id)}
                                                        >
                                                            <Text fontSize="16px" fontWeight="bold" pb="20px">{step.stepTitle}</Text>
                                                        </Box>
                                                        {
                                                            step.processes.map((processe, index) => {
                                                                return (
                                                                    <Box
                                                                        // display={{ base: "none", sm: "block" }}
                                                                        // transition="all .4s ease"
                                                                        // maxH="0"
                                                                        // overflow="hidden"
                                                                        // opacity="0"
                                                                        fontSize="16px"
                                                                        borderBottom="1px"
                                                                        borderColor="rgba(33,41,50,0.2)"
                                                                        py="10px"
                                                                        key={index}
                                                                    >
                                                                        <Text>
                                                                            {processe}
                                                                        </Text>
                                                                    </Box>
                                                                )
                                                            })
                                                        }
                                                    </Box>
                                                )
                                            })
                                        }
                                    </Flex>
                                </Box>
                            )
                        })
                    }
                </Box>

                <Box mt={{ base: "5%", sm: "10%" }} mb={{ base: "25%", sm: "0%" }} pl={{ base: "5%", sm: "20%" }}>
                    <Flex
                        bg="white"
                        w="308px"
                        borderRadius="53px"
                        justifyContent="space-around"
                        pt="18px"
                        pb="17px"
                        mb="10%"
                    >
                        <Flex cursor="pointer">
                            <Text fontWeight="bold" mr="8px">
                                相關案例
                            </Text>
                            <Image w="12px" src={ArrowDownwardIcon.src} transform="rotate(-90deg)" />
                        </Flex>
                        <Flex cursor="pointer">
                            <Text fontWeight="bold" mr="8px">
                                相關資源
                            </Text>
                            <Image w="12px" src={ArrowDownwardIcon.src} transform="rotate(-90deg)" />
                        </Flex>
                    </Flex>
                </Box>

            </Box>

            {/* Zora Banner */}
            <Image display={{ base: "none", sm: "block" }} src={ZoraSmile.src} transform="scale(1)" w="100%" bg="#212932" />

            <Box
                bg="#212932"
                w="100%"
                color="white"
            >
                <Flex
                    pl={{ base: "5%", sm: "20%" }}
                    pt={{ base: "15%", sm: "5%" }}
                    flexDir="column"
                >
                    <Box pos="relative" mb={{ base: "64px", sm: "50px" }}>
                        <Text
                            fontSize={{ base: "10vw", sm: "4.6vw" }}
                            mb="1%"
                            color="white"
                            fontWeight="bold"
                        >
                            Let's polish<br />today!
                        </Text>
                    </Box>

                    <Box >
                        <Flex
                            pt={{ base: "0%", sm: "2.8%" }}
                            pr={{ base: "5%", sm: "0%" }}
                            borderY={{ base: "0px", sm: "1px solid rgba(255,255,255,0.15)" }}
                            flexDir={{ base: "column", sm: "row" }}
                        >
                            <Box w="100%" pt={{ base: "20px", sm: "0px" }}>
                                <Text pt="28px">首頁</Text>
                                <Text pt="28px">關於我們</Text>
                                <Text pt="28px">專案</Text>
                                <Text pt="28px">資源</Text>
                            </Box>

                            <Box
                                w="100%"
                                pb={{ base: "40px", sm: "0px" }}
                            >
                                <Text pt="28px">與我們合作</Text>
                                <Text pt="28px">The 2nd Ann. 禮品頁</Text>
                            </Box>

                            <Box
                                w="100%"
                                pb={{ base: "20px", sm: "0px" }}
                                borderY={{ base: "1px solid rgba(255,255,255,0.15)", sm: "0px" }}
                            >
                                <Text pt="28px" fontSize="18px" fontWeight="bold">一起創造!</Text>
                                <Text color="#A9ACB0" fontSize="14px" mt="12px">hello@polish-design.com.tw</Text>
                            </Box>

                            <Box
                                w="100%"
                                pt={{ base: "0px", sm: "28px" }}
                                order={{ base: "-1", sm: "1" }}
                                borderBottom={{ base: "1px", sm: "0px" }}
                                borderColor="rgba(255,255,255,0.15)"
                            >
                                <Subscription />
                                <SocialLinks />
                            </Box>
                        </Flex>

                        <Flex justifyContent="space-between" pt={{ base: "40px", sm: "30px" }} pb="40px" flexDir={{ base: "column", sm: "row" }}>
                            <Text>相關條款 & Cookies 授權</Text>
                            <Text pr="10%" pt={{ base: "18px", sm: "0px" }} color="rgba(255,255,255,0.5)">©Polish Design</Text>
                        </Flex>
                    </Box>
                </Flex>

            </Box>

        </Box>
    )
}

export default About;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}