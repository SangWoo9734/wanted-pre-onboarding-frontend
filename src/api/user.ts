import { apiClient } from ".";
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

const userSignIn = ({ email, password }: authProps) => {
  return apiClient.post<signInResponse>("/auth/signin", {
    email,
    password,
  });
};

export { userSignIn, userSignUp };
