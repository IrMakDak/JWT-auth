module.exports = {
  serverRuntimeConfig: {
    secret: "Ir",
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
        ? "http://localhost:4200/api" // development api
        : "http://localhost:4200/api", // production api
  },
};
