import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            defer
            src="https://developers.kakao.com/sdk/js/kakao.min.js"
          ></script>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=0 "
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W83RM4V"
            height="0"
            width="0"
            // @ts-ignore
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>
      </Html>
    );
  }
}

export default MyDocument;
