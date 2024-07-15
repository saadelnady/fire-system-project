import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const serverUrl = "https://api.fireeaglema.com";

const handleRequest = async (method, URL, data = null, customHeaders = {}) => {
  try {
    const headers = {
      token: localStorage.getItem("TOKEN"),
      ...customHeaders,
    };

    const response = await axios({
      method,
      url: `${serverUrl}${URL}`,
      headers,
      data,
    });

    return response.data;
  } catch (error) {
    if (error?.response) {
      if (error?.response?.data?.invalid) {
        localStorage.removeItem("TOKEN");
        window.location.href = "/login";

        toast.error("Invalid Token: Please log in again");
        throw new Error("Invalid Token: " + error?.response?.data?.message);
      }

      toast.error(error?.response?.data?.message || "Server Error");
      throw new Error(error?.response?.data?.message || "Server Error");
    } else if (error?.request) {
      toast.error("Network Error: Please check your connection");
      throw new Error("Network Error: Please check your connection");
    } else {
      toast.error("An error occurred: " + error?.request);
      throw new Error(error?.request);
    }
  }
};

export const getData = async (URL, customHeaders = {}) => {
  return handleRequest("get", URL, null, customHeaders);
};

export const postData = async (URL, data, customHeaders = {}) => {
  return handleRequest("post", URL, data, customHeaders);
};

export const putData = async (URL, data, customHeaders = {}) => {
  return handleRequest("put", URL, data, customHeaders);
};

export const deleteData = async (URL, customHeaders = {}) => {
  return handleRequest("delete", URL, null, customHeaders);
};
export const patchData = async (URL, customHeaders = {}) => {
  return handleRequest("patch", URL, null, customHeaders);
};
