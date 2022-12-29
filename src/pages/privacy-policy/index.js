import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Footer from "../../components/Footer";

const Contact = () => {

    return (
        <Box
            bg="#EDF6FF"
            h="100%"

        >
            <Box pb={{ base: "10%", sm: "10%" }}>
                <Box
                    pt={{ base: "28%", sm: "8%" }}
                    px={{ base: "5%", sm: "20%" }}

                >
                    <Text
                        fontSize={{ base: "30px", sm: "2.4vw" }}
                        mb="5%"
                        fontWeight="bold"
                        lineHeight="1.3"
                    >
                        相關條款 & Cookies 授權
                    </Text>

                    <Box mb="3%" maxW="676px">
                        <Text
                            fontSize={{ base: "24px", sm: "1.8vw" }}
                            mb="4%"
                            fontWeight="bold"
                            lineHeight="1.3"
                        >
                            使用者條款與隱私權聲明
                        </Text>

                        <Text
                            fontSize={{ base: "16px", sm: "16px" }}
                        >
                            Polish Design（以下分別或合稱「本網站」）為磨人創意網路有限公司（以下稱「本公司」）所經營，您在使用本網站相關服務前，請詳閱本使用者條款與隱私權聲明(下稱本條款)，當您已開始使用本網站各項服務時，視為您已確實閱讀、瞭解並同意遵守本條款，本條款與隱私權其後有任何修正或變更時，亦同；若您未滿二十歲或無完全行為能力，您的家長、法定代理人或監護人應同時確實閱讀、瞭解並同意遵守本條款之所有內容，您才能使用或繼續使用本網站相關服務。
                            <br />
                            <br />
                            本條款適用範圍本條款適用於本公司所經營之本網站，未涵蓋本公司合作夥伴所屬網站或您經由本公司所連結拜訪之第三方網站，請您至其他網站時自行瞭解並審慎決定是否要提供您的個人資料。本網站對任何外部網站的行為，均不負任何擔保或連帶責任。
                        </Text>
                    </Box>

                    <Box maxW="676px">
                        <Text
                            fontSize={{ base: "24px", sm: "1.8vw" }}
                            mb="4%"
                            fontWeight="bold"
                            lineHeight="1.3"
                        >
                            Cookies 授權
                        </Text>

                        <Text
                            fontSize={{ base: "16px", sm: "16px" }}
                        >
                            本網站使用 Cookies 或類似網站管理技術執行各項網站服務，透過 Cookies 蒐集並儲存您的喜好設定、瀏覽紀錄、裝置名稱等，以優化您在本網站使用體驗並提供您以興趣為導向的廣告。
                            <br />
                            <br />
                            本公司可能基於不同目的而使用 Cookies，包含：<br />
                            A. 辨認使用者;<br />
                            B. 增進本公司網站的運作與功能;<br />
                            C. 依據您的需求與偏好改善我們的網站與產品; 以及<br />
                            D. 分析本公司網站如何被使用，以獲得匿名的整合統計數據；以及為您量身訂製我們向您顯示的廣告。
                            <br />
                            <br />
                            大部分網際網路瀏覽器自動設定為接受 cookies。依照所使用的瀏覽器，您可設定瀏覽器在接受 cookies 之前提醒您，或您可直接設定拒絕使用 cookies。請參閱您瀏覽器上”協助” 之功能鍵，以了解如何進行設定。
                            <br />
                            <br />
                            拒絕 cookies 功能可能會影響您在本網站上的使用者體驗。
                            <br />
                            <br />
                            如果您使用不同裝置瀏覽本網站，您需要在每一個裝置上依據您的偏好作瀏覽器設定。
                            <br />
                            <br />
                            您可從 https://www.allaboutcookies.org/manage-cookies/
                            ，這個網站得知如何管理 cookie 相關的資訊。本公司與該網站沒有任何關係，所以不能對該類第三方網站提供的資訊負責。
                            <br />
                            <br />
                            除此之外，您可透過下列第三方網站選擇拒絕某些 Cookies
                            <br />
                            <br />
                            https://www.aboutads.info/choices/#completed
                            <br />
                            <br />
                            https://www.youronlinechoices.com/
                            <br />
                            <br />
                            本公司與該網站沒有任何關係，所以不能對該類第三方網站提供的資訊負責。
                        </Text>
                    </Box>
                </Box>
            </Box>

            <Footer />
        </Box>
    )
}

export default Contact;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}