import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
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
          <Toaster />
          <Component {...pageProps} />
        </Main>
      </SessionProvider>
    </>
  );
}
