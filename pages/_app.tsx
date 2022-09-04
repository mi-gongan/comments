import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppBar from "../src/components/layouts/AppBar";
import { SessionProvider } from "next-auth/react";
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <AppBar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
