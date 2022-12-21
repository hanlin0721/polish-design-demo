import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import TechTeam from '../../images/about/tech-team.png'
import Creator from '../../images/about/creator.png'
import Processing from '../../images/about/processing.png'
import BussinessExp from '../../images/about/bussiness-exp.png'

import OpenedEgg from '../../images/about/opened-egg.png'
import Bag from '../../images/about/bag.png'
import Drawing from '../../images/about/drawing.png'

import KevinWithPolishModel from '../../images/about/kevin-with-polish-model.png'

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
            title: "線上策展",
            steps: [
                {
                    stepTitle: "證實",
                    processes: [
                        "客戶訪談",
                        "評估",
                        "初步可行性"
                    ]
                },
                {
                    stepTitle: "原型",
                    processes: [
                        "KPI 對焦",
                        "策略定調",
                        "設計 Prototye"
                    ]
                },
                {
                    stepTitle: "開發",
                    processes: [
                        "開發 MVP 並迭代",
                        "上線計畫",
                        "UX/UI testing",
                        "Branding"
                    ]
                },
                {
                    stepTitle: "展前",
                    processes: [
                        "產品開發並測試",
                        "數據追蹤測試",
                        "展期資安維護"
                    ]
                },
                {
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
            title: "產品開發",
            steps: [
                {
                    stepTitle: "證實",
                    processes: [
                        "調查",
                        "評估",
                        "初步可行性",
                        "競品和市場分析",
                        "客戶訪談"
                    ]
                },
                {
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
            title: "設計支援",
            steps: [
                {
                    stepTitle: "訪談",
                    processes: [
                        "了解需求",
                        "評估",
                        "初步可行性"
                    ]
                },
                {
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
            pb="10%"
        >
            {/* We polish all day! */}
            <Box>
                <Box
                    pt={{ base: "28%", sm: "8%" }}
                    pl={{ base: "15%", sm: "25%" }}
                    mb={{ base: "10%", sm: "5%" }}
                >
                    <Text
                        fontSize={{ base: "12vw", sm: "4.4vw" }}
                        mb="5%"
                        fontWeight="bold"
                    >
                        We polish<br />all day!
                    </Text>
                    <Text
                        fontWeight="bold"
                        maxW="575px"
                        w={{ base: "80%", sm: "100%" }}
                    >
                        Polish Design. 是一家提供數位解決方案的軟體設計公司，致力於為企業開發創意、行得通的數位產品，以實現任何商業挑戰及有趣的點子。
                    </Text>
                </Box>

                <Flex
                    flexWrap="wrap"
                    pl={{ base: "15%", sm: "25%" }}
                    pr="10%"
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
                                <Image pointerEvents="none" src={section.image} />
                            </Flex>
                            <Text fontWeight="bold">{section.title}</Text>
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
                pt="5.5%"
                pb="7.2%"
                ml={{ base: "5.4%", sm: "12%" }}
                mb="24px"
            >
                <Flex
                    pl={{ base: "15%", sm: "15%" }}
                    pr="10%"
                >
                    <Box pos="relative">
                        <Text
                            fontSize={{ base: "10vw", sm: "4.4vw" }}
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
                    pl={{ base: "15%", sm: "15%" }}
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
                    pl={{ base: "15%", sm: "25%" }}
                    mb={{ base: "10%", sm: "5%" }}
                >
                    <Text
                        fontSize={{ base: "12vw", sm: "4.4vw" }}
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

                <Box pl={{ base: "15%", sm: "25%" }} >
                    {
                        processes.map((process, index) => {
                            return (
                                <>
                                    <Text mb="47px">{process.title}</Text>
                                    <Flex mb="5%">
                                        {
                                            process.steps.map((step, index) => {
                                                return (
                                                    <Box mr="40px">
                                                        <Box borderBottom="1px">
                                                            <Text fontWeight="bold" pb="20px">{step.stepTitle}</Text>
                                                        </Box>
                                                        {
                                                            step.processes.map((processe, index) => {
                                                                return (
                                                                    <Box borderBottom="1px" py="10px">
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

                                    <Flex
                                        bg="#EAF1F7"
                                        w="308px"
                                        borderRadius="53px"
                                        justifyContent="space-around"
                                        mb="10%"
                                    >
                                        <Flex>
                                            <Text>
                                                相關案例
                                            </Text>
                                            <Image />
                                        </Flex>
                                        <Flex>
                                            <Text>
                                                相關資源
                                            </Text>
                                            <Image />
                                        </Flex>
                                    </Flex>
                                </>
                            )
                        })
                    }
                </Box>
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