import Layout from "@/components/Layout";
import Loader from "@/components/subComponent/Loader";
import AdminProvider from "@/context/AdminProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Loader>
      <AdminProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AdminProvider>
    </Loader>
  );
}
