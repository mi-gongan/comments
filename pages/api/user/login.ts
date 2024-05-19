import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { callbackUrl } from "@utils/kakao";

export interface LoginResponseType {
  access_token: string;
  token_type: string;
  refresh_token: string;
  id_token: string;
  expires_in: number;
  scope: string;
  refresh_token_expires_in: number;
}

const loginHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { authCode } = req.body;

  try {
    const data = (
      await axios.post(
        "https://kauth.kakao.com/oauth/token",
        {
          grant_type: "authorization_code",
          client_id: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID,
          redirect_uri: process.env.NEXT_PUBLIC_BASEURL + callbackUrl,
          code: authCode,
          client_secret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET,
        },
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
    ).data;
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "server error" });
  }
};

export default loginHandler;
