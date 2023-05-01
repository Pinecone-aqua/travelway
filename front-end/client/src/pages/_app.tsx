import "@/styles/globals.css";
import type { AppProps } from "next/app";
import UserProvider from "../../context/user.context";
import "react-quill/dist/quill.snow.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />;
    </UserProvider>
  );
}
