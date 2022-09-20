import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  pageProps.title = "This is me doing NextJS";
  return (
    <>
      <Component {...pageProps} />
      <h1>Hello</h1>
    </>
  );
};

export default App;
