import "@/styles/globals.css";
import type { AppProps } from "next/app";
import UserProvider from "../../context/user.context";
import "react-quill/dist/quill.snow.css";
import Layout from "@/components/Layout";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
 
  return (
    <UserProvider>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </ChakraProvider>
    </UserProvider>
  );
}
