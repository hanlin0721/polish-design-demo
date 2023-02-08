import axios from "axios";
axios.defaults.baseURL = "https://api.polish-design.com.tw/api";

const Api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

// Common
const getArticles = async () => {
  try {
    const { data } = await Api.get("/article/list");
    return data
  } catch (error) {
    console.log(error);
  }
};

const getArticle = async ({ article_code }) => {
  try {
    const { data } = await Api.get(`/article/${article_code}`);
    return data
  } catch (error) {
    console.log(error);
  }
};

const postSubscribe = async (data) => {
  try {
    const res = await Api.post(`/subscribe`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const postContactUs = async (data) => {
  try {
    const res = await Api.post(`/contact/us`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const api = {
  getArticles,
  getArticle,
  postSubscribe,
  postContactUs
};

export default api;
