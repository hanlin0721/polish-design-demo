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
                                placeholder="你希望合作的內容 *"
                            >
                                {/* <option value="">你希望合作的內容 *</option> */}
                                <option value="development">我需要產品開發的相關服務</option>
                                <option value="planning">我需要虛擬策展的相關服務</option>
                                <option value="design">我需要設計協助</option>
                                <option value="expand">我目前已經有產品，需要擴大、改善等解決方案</option>
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
                                <option value="">你是怎麼知道我們的 *</option>
                                <option value="introduced">我是透過介紹知道的</option>
                                <option value="google">我是透過主動搜尋知道的</option>
                                <option value="socialMedia">我是夠過社群平台知道的（Facebook, Instagram..）</option>
                                <option value="designerPlatform">我是夠過設計平台知道的（Behance..）</option>
                                <option value="ad">我是透過廣告知道的</option>
                                <option value="others">其他</option>
                            </Select>
                            {errors.howYouKnowUsType && touched.howYouKnowUsType && (
                                <div className="input-feedback">{errors.howYouKnowUsType}</div>
                            )}
                        </Box>

                        <Box mb="5%" w={{ base: "100%", sm: "60%" }}>
                            <CustomInputField
                                id="name"
                                placeholder="你的名字 *"
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
                                placeholder="和我們聊聊你的點子 *"
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
                                placeholder="有相關的檔案嗎? 如果有的話, 可以附上連結"
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
                            <Text fontSize="14px">我同意偶爾接收 Polish Design 的通知 Email，其中包含有關軟體專案、技術和建議。</Text>
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
                            <Text color="black" textAlign="center">發送</Text>
                        </Button>

                        <Text mt="12%" fontSize="14px" color="#A9ACB0">
                            我們將使用您的詳細聯繫方式就現在或將來的潛在合作機會直接與您聯繫。 有關個人數據保護的所有詳細信息，請參
                        </Text>
                        <Link href="/privacy-policy" color="#A9ACB0">
                            <Flex onClick={() => (appStore.isMenu = false)}>
                                <Text fontSize="14px" fontWeight="normal" textDecoration="underline">
                                    {t("nav.term-and-condition")}
                                </Text>
                                <span>。</span>
                            </Flex>
                        </Link>
                    </form>
                );
            }}
        </Formik>
    )
}

export default CustomForm