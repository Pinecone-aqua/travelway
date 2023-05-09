import "@/styles/globals.css";
import type { AppProps } from "next/app";
import UserProvider from "../../context/user.context";
import "react-quill/dist/quill.snow.css";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
 
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </UserProvider>
  );
}
