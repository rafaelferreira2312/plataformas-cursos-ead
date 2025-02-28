module.exports = {
    reactStrictMode: true,
    env: {
      BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000",
    },
  };
  