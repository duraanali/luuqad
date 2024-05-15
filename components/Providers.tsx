"use client"
import React from "react"
import { store } from "@/store"
import { SessionProvider } from "next-auth/react"
import { FC, ReactNode } from "react"
import { Provider } from "react-redux"
import { hotjar } from "react-hotjar"
import { useEffect } from "react"

interface LayoutProps {
  children: ReactNode
}

// const queryClient = new QueryClient()

const Providers: FC<LayoutProps> = ({ children }) => {
 
  return (
    <Provider store={store}>
      <SessionProvider>{children}</SessionProvider>
    </Provider>
  )
}

export default Providers
