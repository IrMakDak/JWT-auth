module.exports = {
  serverRuntimeConfig: {
    secret: "Ir",
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  nextConfig: {
    reactStrictMode: true,
    experimental: {
      newNextLinkBehavior: false,
    },
  },
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api" // development api
        : "http://localhost:3000/api", // production api
  },
};
