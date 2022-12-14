import { Box, Flex, Text, Select, Checkbox, Button, Link } from "@chakra-ui/react";
import CustomInputField from "./CustomInputField";
import { Formik } from 'formik';
import { useTranslation } from "next-i18next";
import * as Yup from "yup";

const CustomForm = () => {
    const { t } = useTranslation("common");
    return (
        <Formik
            initialValues={{ projectType: "", howYouKnowUsType: "", name: "", email: "", yourIdea: "", reference: "", subscribed: true }}
            onSubmit={async (values, actions) => {
                console.log(actions)
                await new Promise(resolve => setTimeout(resolve, 500));
                alert(JSON.stringify(values, null, 2));
            }}
            validationSchema={Yup.object().shape({
                name: Yup.string()
                    .required("Required"),
                email: Yup.string()
                    .email()
                    .required("Required"),
                projectType: Yup.string()
                    .oneOf(
                        ['development', 'planning', 'design', 'expand'],
                        'Invalid Project Type'
                    )
                    .required('Required'),
                howYouKnowUsType: Yup.string()
                    .oneOf(
                        ['introduced', 'google', 'socialMedia', 'designerPlatform', 'ad', 'others'],
                        'Invalid Type'
                    )
                    .required('Required'),
                yourIdea: Yup.string()
                    .required("Required"),
                reference: Yup.string(),
                subscribed: Yup.bool()
            })}
        >
            {props => {
                const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset
                } = props;
                return (
                    <form onSubmit={handleSubmit}>
                        <Box
                            w={{ base: "100%", sm: "60%" }}
                            mb="5%"
                        >
                            <Select
                                id="projectType"
                                name="projectType"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                variant="filled"
                                color="rgba(255,255,255,0.5)"
                                borderColor="#7B7F85"
                                bg="#2A313A"
                                size='xl'
                                borderRadius="16px"
                                placeholder="???????????????????????? *"
                            >
                                {/* <option value="">???????????????????????? *</option> */}
                                <option value="development">????????????????????????????????????</option>
                                <option value="planning">????????????????????????????????????</option>
                                <option value="design">?????????????????????</option>
                                <option value="expand">???????????????????????????????????????????????????????????????</option>
                            </Select>
                            {errors.projectType && touched.projectType && (
                                <div className="input-feedback">{errors.projectType}</div>
                            )}
                        </Box>

                        <Box
                            w={{ base: "100%", sm: "60%" }}
                            mb="5%"
                        >
                            <Select
                                id="howYouKnowUsType"
                                name="howYouKnowUsType"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                variant='filled'
                                size='xl'
                                bg="#2A313A"
                                color="rgba(255,255,255,0.5)"
                                borderColor="#7B7F85"
                                borderRadius="16px"
                            >
                                <option value="">??????????????????????????? *</option>
                                <option value="introduced">???????????????????????????</option>
                                <option value="google">?????????????????????????????????</option>
                                <option value="socialMedia">????????????????????????????????????Facebook, Instagram..???</option>
                                <option value="designerPlatform">????????????????????????????????????Behance..???</option>
                                <option value="ad">???????????????????????????</option>
                                <option value="others">??????</option>
                            </Select>
                            {errors.howYouKnowUsType && touched.howYouKnowUsType && (
                                <div className="input-feedback">{errors.howYouKnowUsType}</div>
                            )}
                        </Box>

                        <Box mb="5%" w={{ base: "100%", sm: "60%" }}>
                            <CustomInputField
                                id="name"
                                placeholder="???????????? *"
                                type="text"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.name && touched.name && (
                                <div className="input-feedback">{errors.name}</div>
                            )}
                        </Box>

                        <Box mb="5%" w={{ base: "100%", sm: "60%" }}>
                            <CustomInputField
                                id="email"
                                placeholder="Email *"
                                type="text"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.email && touched.email && (
                                <div className="input-feedback">{errors.email}</div>
                            )}
                        </Box>

                        <Box mb="5%">
                            <CustomInputField
                                id="yourIdea"
                                placeholder="??????????????????????????? *"
                                type="text"
                                value={values.yourIdea}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.yourIdea && touched.yourIdea && (
                                <div className="input-feedback">{errors.yourIdea}</div>
                            )}
                        </Box>

                        <Box mb="5%">
                            <CustomInputField
                                id="reference"
                                placeholder="?????????????????????? ???????????????, ??????????????????"
                                type="text"
                                value={values.reference}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.reference && touched.reference && (
                                <div className="input-feedback">{errors.reference}</div>
                            )}
                        </Box>

                        <Checkbox
                            id="subscribed"
                            onChange={handleChange}
                            defaultChecked
                            size="xl"
                            colorScheme="#2A313A"
                        >
                            <Text fontSize="14px">????????????????????? Polish Design ????????? Email??????????????????????????????????????????????????????</Text>
                        </Checkbox>

                        <Button
                            borderRadius="24px"
                            bg="white"
                            w={{ base: "100%", sm: "60%" }}
                            pt="13px"
                            pb="14px"
                            type="submit"
                            cursor="pointer"
                            disabled={isSubmitting}
                            mt="10%"
                        >
                            <Text color="black" textAlign="center">??????</Text>
                        </Button>

                        <Text mt="12%" fontSize="14px" color="#A9ACB0">
                            ??????????????????????????????????????????????????????????????????????????????????????????????????? ??????????????????????????????????????????????????????
                        </Text>
                        <Link href="/privacy-policy" color="#A9ACB0">
                            <Flex onClick={() => (appStore.isMenu = false)}>
                                <Text fontSize="14px" fontWeight="normal" textDecoration="underline">
                                    {t("nav.term-and-condition")}
                                </Text>
                                <span>???</span>
                            </Flex>
                        </Link>
                    </form>
                );
            }}
        </Formik>
    )
}

export default CustomForm