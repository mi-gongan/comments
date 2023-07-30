import { HexString } from "./lib/core/blockchain/v2/hooks";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_KAKAO_CLIENT_SECRET: string;
      NEXT_PUBLIC_KAKAO_CLIENT_ID: string;
      NEXTAUTH_URL: string;
      NEXT_PUBLIC_REDIRECT_URI: string;
      NEXT_PUBLIC_KAKAO_JAVASCRIPT: string;
      NEXT_PUBLIC_BASEURL: string;
    }
  }
}

export {};
