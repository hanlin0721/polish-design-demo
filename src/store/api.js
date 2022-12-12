import axios from "axios";
axios.defaults.baseURL = "https://api.openhouse.ntu.edu.tw/api";

const Api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

// Common
const getAnncs = async () => {
  try {
    const res = await Api.get("/home/announcement");
    return res;
  } catch (error) {
    console.log(error);
  }
};
const getLives = async () => {
  try {
    const res = await Api.get("/live/list");
    return res;
  } catch (error) {
    console.log(error);
  }
};
const getLiveDetail = async (live_code, token = null) => {
  try {
    const res = await Api.get(`/live/${live_code}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
const getNewsList = async () => {
  try {
    const res = await Api.get("/news/list");
    return res;
  } catch (error) {
    console.log(error);
  }
};
const getNewsDetail = async (news_code) => {
  try {
    const res = await Api.get(`/news/${news_code}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const getSchools = async (token = null) => {
  try {
    if (token) {
      const res = await Api.get("/school/list", {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      });
      return res;
    } else {
      const res = await Api.get("/school/list");
      return res;
    }
  } catch (error) {
    console.log(error);
  }
};
const getSchoolDetail = async (school_code, token = null) => {
  try {
    if (token) {
      const res = await Api.get(`/school/${school_code}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      });
      return res;
    } else {
      const res = await Api.get(`/school/${school_code}`);
      return res;
    }
  } catch (error) {
    console.log(error);
  }
};
const postContactInfo = async (data) => {
  try {
    const res = await Api.post(`/contact`, data);
      return res;
  } catch (error) {
    console.log(error);
  }
};

const api = {
  getAnncs,
  getLives,
  getLiveDetail,
  getNewsList,
  getNewsDetail,
  getSchools,
  getSchoolDetail,
  postContactInfo
};

export default api;
