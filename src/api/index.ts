import axios, { AxiosRequestHeaders, InternalAxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// 파라미터 직렬화
api.defaults.paramsSerializer = {
  serialize: (paramObj: { [key: string]: any }) => {
    const params = new URLSearchParams();

    Object.entries(paramObj).forEach(([key, value]) => {
      if (value) {
        if (typeof value === "string" || typeof value === "number") {
          params.append(key, value.toString());
        }
        if (Array.isArray(value) && value.length !== 0) {
          params.append(key, value.join(","));
        }
      }
    });

    return params.toString();
  },
};

// 요청 인터셉터
api.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  // 토큰 추가
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return {
    ...config,
  };
});

// 응답 인터셉터
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // 에러 처리
    return Promise.reject(error);
  }
);

// 요청 데이터 직렬화
api.defaults.transformRequest = [
  (data: any, headers: AxiosRequestHeaders) => {
    if (headers["Content-Type"] === "multipart/form-data") {
      return data;
    }
    return JSON.stringify(data);
  },
];

export default api;
