import "@styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";
import TagManager from "react-gtm-module";

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
    const tagManagerArgs = {
      gtmId: "GTM-W83RM4V",
    };

    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
