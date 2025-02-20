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
const CSP = `
  base-uri 'self';
  default-src 'self';
  script-src 'self' 'unsafe-inline'${
    process.env.NODE_ENV !== "production" ? " 'unsafe-eval'" : ""
  };
  style-src 'self' 'unsafe-inline';
  font-src 'self';
  connect-src 'self';
  frame-src 'none';
  img-src 'self' http://www.w3.org/2000/svg data:;
  object-src 'none';
  form-action 'none';
  `;
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content={CSP.replace(/\s{2,}/g, " ").trim()}
        />
        <meta httpEquiv="Cross-Origin-Resource-Policy" content="same-origin" />
        <meta
          httpEquiv="Cross-Origin-Embedder-Policy"
          content="credentialless"
        />
        <meta httpEquiv="Cross-Origin-Opener-Policy" content="same-origin" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ar_KSA" />
        <meta property="og:title" content="عرقة" />
        <meta
          property="og:description"
          content="من قلب المملكة ... نسعى معا لتحقيق غدا افضل لمجتمعنا"
        />

        <meta
          property="og:image"
          content={process.env.NEXT_PUBLIC_URL + "/og.png"}
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary" />

        <meta
          name="description"
          content="من قلب المملكة ... نسعى معا لتحقيق غدا افضل لمجتمعنا"
        />
        <meta
          name="keywords"
          content="من قلب المملكة ... نسعى معا لتحقيق غدا افضل لمجتمعنا"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />

        <meta name="application-name" content="عرقة" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#26592c" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="عرقة" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/logo180.png"
        />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#26592c" />
        <title>عرقة</title>

        <link rel="preload" as="image" href="/images/hero/1.webp" />
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
