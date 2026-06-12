import { useCallback } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const useApiAuth = () => {
  const token = Cookies.get("token");
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://admin.eazisols.com";

  const postData = useCallback(
    async (endPoint, data, success = () => {}, errorFun = () => {}) => {
      try {
        const response = await axios.post(`${baseUrl}${endPoint}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        success(response.data);
      } catch (error) {
        console.error("POST error:", error.response || error);
        errorFun(error);
      }
    },
    [token, baseUrl]
  );

  const getData = useCallback(
    async (endPoint, success = () => {}, errorFun = () => {}) => {
      try {
        const response = await axios.get(`${baseUrl}${endPoint}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        success(response.data);
      } catch (error) {
        console.error("GET error:", error.response || error);
        errorFun(error);
      }
    },
    [token, baseUrl]
  );

  return { postData, getData };
};

export default useApiAuth;
