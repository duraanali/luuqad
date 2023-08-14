import { getSession } from "next-auth/react"

// eslint-disable-next-line no-unused-vars
export const addTokenToRequest = async (headers: any, { getState }: any) => {
  const session: any = await getSession()
  if (session?.user?.accessToken) {
    headers.set("Authorization", `Bearer ${session.user.accessToken}`),
    headers.set("Content-Type", "application/json"),
    headers.set("Accept", "application/json"),
    headers.set("Access-Control-Allow-Origin", "*"),
    headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"),
    headers.set("Access-Control-Allow-Headers", "Content-Type")
    
  }
  return headers
}
