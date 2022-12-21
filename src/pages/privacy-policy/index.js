import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Contact = () => {

    return (
        <Text>
            相關條款 & Cookies 授權
        </Text>
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