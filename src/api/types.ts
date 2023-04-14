interface authProps {
  email: string;
  password: string;
}

interface signInResponse {
  access_token: string;
}

export type { authProps, signInResponse };
