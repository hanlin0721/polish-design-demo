import { Box, Text } from "@chakra-ui/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Footer from "../../components/Footer";
import CustomForm from "../../components/Form/CustomForm.js"

const Contact = () => {
    return (
        <Box
            bg="blue.900"
            h="100%"
        >
            <Box pb={{ base: "10%", sm: "10%" }} color="white">
                <Box
                    pt={{ base: "28%", sm: "8%" }}
                    px={{ base: "5%", sm: "20%" }}
                >
                    <Text
                        fontSize={{ base: "48px", sm: "4.6vw" }}
                        mb="5%"
                        fontWeight="bold"
                        lineHeight="1.3"
                    >
                        Tell us about<br />
                        your idea
                    </Text>

                    <Box w={{ base: "90%", sm: "75%" }}>
                        <CustomForm />
                    </Box>
                </Box>
            </Box>

            <Footer />
        </Box >
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