import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";
import Head from "next/head";
import TagManager from "react-gtm-module";
import Toast from "../src/components/common/Toast";

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
      <Head>
        <title>commention</title>
        <link rel="icon" href="/assets/logo.png" />
        <meta property="og:title" content="commention" />
        <meta property="og:description" content="서로 코멘션을 남겨봐요" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_BASEURL} />
        <meta
          property="og:image"
          content={process.env.NEXT_PUBLIC_BASEURL + "/assets/logo.png"}
        />
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
