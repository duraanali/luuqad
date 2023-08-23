import config from "@/./app/config/config.json"

const baseUrl =
  process.env.NODE_ENV === "production"
    ? //@ts-ignore
      config.baseUrl
    : "http://localhost:3000"

export default baseUrl
