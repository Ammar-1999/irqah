const isDev = process.env.NODE_ENV !== "production";
const CSP = `
  base-uri 'self';
  default-src 'self';
  script-src 'self' 'unsafe-inline'${
    isDev ? " 'unsafe-eval'" : ""
  };  
  style-src 'self' 'unsafe-inline';
  font-src 'self';
  connect-src 'self';
  frame-src 'self';
  img-src 'self' http://www.w3.org/2000/svg data:;
  object-src 'none';
  form-action 'none';
  frame-ancestors 'none';
`;

const headers = isDev
  ? []
  : [
    {
      source: "/((?!robots|sitemap|og|manifest|favicon).*)",
      headers: [
        {
          key: "Content-Security-Policy",
          value: CSP.replace(/\s{2,}/g, " ").trim(),
        },
        {
          key: "X-Frame-Options",
          value: `DENY`,
        },
        {
          key: "Cross-Origin-Resource-Policy",
          value: `same-origin`,
        },
        {
          key: "Cross-Origin-Embedder-Policy",
          value: "credentialless",
        },
        {
          key: "Cross-Origin-Opener-Policy",
          value: "same-origin",
        },
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin",
        },
        {
          key: "Strict-Transport-Security",
          value: `max-age=63072000; includeSubDomains; preload`,
        },
      ],
    },
    {
      source: "/(pwa|js|images)/(.*?)",
      headers: [
        {
          key: "Cross-Origin-Resource-Policy",
          value: `same-site`,
        },
        {
          key: "Cross-Origin-Embedder-Policy",
          value: `credentialless`,
        },
        {
          key: "Cache-Control",
          value: "private, max-age=21536000, immutable",
        },
      ],
    },
    {
      source: "/(manifest.json|og.png|favicon.ico)",
      headers: [
        {
          key: "Cache-Control",
          value: "private, max-age=21536000, immutable",
        },
      ],
    },
    {
      source: "/_next/static/(.*?)",
      headers: [
        {
          key: "Cache-Control",
          value: "private, max-age=21536000, immutable",
        },
      ],
    }
  ];
const nextConfig = {
  reactStrictMode: false,
  async headers() {
    return headers;
  },
};

export default nextConfig;
