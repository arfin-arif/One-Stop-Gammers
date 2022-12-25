import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Main from "../Layouts/Main";
import "../styles/globals.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <Main>
          <Component {...pageProps} />
        </Main>
      </SessionProvider>
    </>
  );
}
