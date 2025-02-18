import "@/styles/globals.css";
import "@/styles/style.css";
import type { AppProps } from "next/app";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import Head from "next/head";
const font = IBM_Plex_Sans_Arabic({
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-ibm-plex",
  subsets: ["latin", "arabic"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/images/hero/1.webp" />
        <link rel="preload" as="image" href="/images/hero/2.webp" />
        <link rel="preload" as="image" href="/images/hero/3.webp" />
      </Head>
      <style jsx global>{`
        html {
          font-family: ${font.style.fontFamily};
        }
      `}</style>
      <div className={`${font.variable} font-ibm-plex`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
