import { apiClient } from ".";
import { setStorageData } from "module/storage";
import { authProps, signInResponse } from "./types";

const userSignUp = async ({ email, password }: authProps) => {
  return await apiClient
    .post("/auth/signup", {
      email,
      password,
    })
    .then((result) => {
      if (result.status !== 200) {
        return {
          status: result.status,
          message: "회원가입이 완료되었습니다.",
        };
      }
    })
    .catch((error) => {
      return {
        status: error.status,
        message: error.response.data.message,
      };
    });
};

const userSignIn = async ({ email, password }: authProps) => {
  return await apiClient
    .post<signInResponse>("/auth/signin", {
      email,
      password,
    })
    .then((result) => {
      if (result.status === 200)
        setStorageData("auth_token", result.data.access_token);

      return result;
    });
};

export { userSignIn, userSignUp };
