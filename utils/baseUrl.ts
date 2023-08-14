const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://luuqad.com"
    : "http://localhost:3000"

export default baseUrl
