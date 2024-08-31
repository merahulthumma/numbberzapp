/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: "export",
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
    FORM_ENDPOINT: process.env.FORM_ENDPOINT,
  },
};

export default nextConfig;
