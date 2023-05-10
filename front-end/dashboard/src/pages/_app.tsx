import Layout from "@/components/Layout";
import AdminProvider from "@/context/AdminProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AdminProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AdminProvider>
  );
}
