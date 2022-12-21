import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Contact = () => {

    return (
        <Text>
            Contact - 與我們合作
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