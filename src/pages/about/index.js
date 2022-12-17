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

    return (
        <Box
            bg="#DBE3E9"
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
                        mb="1%"
                    >
                        We polish<br />all day!
                    </Text>
                    <Text
                        fontWeight="bold"
                        w={{ base: "80%", sm: "100%" }}
                    >
                        Polish Design. 是一家提供數位解決方案的軟體設計公司<br />致力於為企業開發創意、行得通的數位產品，以實現任何商業挑戰及有趣的點子。
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
                bg="#EAF1F7"
                borderRadius={{ base: "0px", sm: "100px" }}
                pt="8%"
                pb="12%"
                mx={{ base: "0%", sm: "0.5%" }}
            >
                <Flex
                    pl="25%"
                    pr="10%"
                >
                    <Box pos="relative">
                        <Text
                            fontSize={{ base: "10vw", sm: "4.4vw" }}
                            mb="1%"
                        >
                            What we<br />provide
                        </Text>

                        <Text
                            pos="absolute"
                            right={{ base: "-55%", sm: "-22%" }}
                            bottom={{ base: "10%", sm: "14%" }}
                        >
                            我們的服務
                        </Text>
                    </Box>
                </Flex>

                <Flex
                    pl={{ base: "15%", sm: "25%" }}
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
                borderRadius={{ base: "0px", sm: "100px" }}
                mx={{ base: "0%", sm: "0.5%" }}
                overflow="hidden"
            >
                <Flex
                    pl={{ base: "5%", sm: "6%" }}
                    pr={{ base: "5%", sm: "16%" }}
                    pt={{ base: "12%", sm: "0%" }}
                    flexDirection={{ base: "column", sm: "row" }}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Flex
                        order={{ base: "1", sm: "0" }}
                        color="white"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Image pointerEvents="none"
                            src={KevinWithPolishModel.src}
                            order={{ base: "1", sm: "0" }}
                            w={{ base: "80%", sm: "100%" }}
                        />
                        <Box
                            display={{ base: "block", sm: "none" }}
                        >
                            <Text>Founder</Text>
                            <Text>Kevin Hsu</Text>
                            <Text>許 家豪</Text>
                        </Box>
                    </Flex>
                    <Box
                        color="white"
                    >
                        <Text
                            mb="5%"
                            fontWeight="bold"
                            fontSize={{ base: "6vw", sm: "1vw" }}
                        >
                            “ 我們的使命是創造、擴展線上化的各種可能，幫助人們取得持續地成功 ”
                        </Text>
                        <Box
                            display={{ base: "none", sm: "block" }}
                        >
                            <Text>Founder</Text>
                            <Text>Kevin Hsu</Text>
                            <Text>許 家豪</Text>
                        </Box>
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