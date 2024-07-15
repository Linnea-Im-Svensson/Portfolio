import Head from "next/head";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Linnéa Svensson's portfolio</title>
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-between bg-[radial-gradient(ellipse_at_left_top,_var(--tw-gradient-stops))] from-indigo-400 via-indigo-100 to-indigo-100 dark:from-indigo-900 dark:via-slate-900 dark:to-black dark:text-indigo-200">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  );
}
