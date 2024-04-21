import { ReactElement, ReactNode } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import HEAD from "next/head";
import NextNProgress from "nextjs-progressbar";
import type { NextPage } from "next";
import { Toaster } from "@/components/ui/toaster";


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <HEAD>
        <title>Spicy Academy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </HEAD>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Toaster />
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}
