import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

declare global {
  interface Window {
    Kakao: any;
  }
}

function MyApp({ Component, pageProps: { pageProps } }: AppProps) {
  useEffect(() => {
    try {
      if (!window.Kakao.isInitialized() && window.Kakao) {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT);
      }
    } catch (e) {
      console.log(e);
    }
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
