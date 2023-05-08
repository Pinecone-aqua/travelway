import "@/styles/globals.css";
import type { AppProps } from "next/app";
import UserProvider from "../../context/user.context";
import "react-quill/dist/quill.snow.css";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function App({ Component, pageProps }: AppProps) {
  const [currentUser, setCurrentUser] = useState({
    userId: "",
    token: "",
  });

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setCurrentUser((prev) => ({...prev, token}));
    }
  }, []);


  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </UserProvider>
  );
}
