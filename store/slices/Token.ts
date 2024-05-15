import { getSession } from "next-auth/react"

// eslint-disable-next-line no-unused-vars
export const addTokenToRequest = async (headers: any, { getState }: any) => {
  const session: any = await getSession()
  if (session?.user?.accessToken) {
    headers.set("Authorization", `Bearer ${session.user.accessToken}`),
      headers.set("Content-Type", "application/json")
  }
  return headers
}
