"use client"
import { store } from "@/store";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";

interface LayoutProps {
  children: ReactNode;
}

const Providers: FC<LayoutProps> = ({ children }) => {
  // Ensure that any state changes or initialization happen on the client side


  return (
    <ThemeProvider attribute="class" defaultTheme="light">

      <Provider store={store}>
        <SessionProvider>
          {children}
        </SessionProvider>


      </Provider>
    </ThemeProvider>

  );
};

export default Providers;
