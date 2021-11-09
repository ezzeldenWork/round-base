// import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { ApolloProvider } from "@apollo/client";
import Page from "../components/layout/page";
import Router, { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { isFallback, events } = useRouter();
  if (isFallback) return null;
  const client = [];

  return (
    <>
      <Head>
        {typeof window === "undefined" && (
          <style
            id="holderStyle"
            dangerouslySetInnerHTML={{
              __html: `
         *, *::before, *::after {
           transition: none!important;
         }
         `,
            }}
          />
        )}
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="#364f6b" name="theme-color" />
        <meta content="#364f6b" name="msapplication-TileColor" />
        {/* <meta content="/static/favicons/browserconfig.xml" name="msapplication-config" /> */}
      </Head>
      {/* <DefaultSeo {...SEO} /> */}
      <Page>
        <Component {...pageProps} />
        {/* <Component {...pageProps} /> */}
      </Page>
    </>
  );
}

export default MyApp;
