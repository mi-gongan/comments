import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";

declare global {
  interface Window {
    Kakao: any;
  }
}

function MyApp({ Component, pageProps: { pageProps } }: AppProps) {
  useEffect(() => {
    try {
      if (!window.Kakao.isInitialized() && window.Kakao) {
        console.log(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT);
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT);
      }
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
