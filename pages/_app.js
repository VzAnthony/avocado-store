// import App from 'next/app'
import Layout from "../components/Layout";
import style from "./style.css";
import { BasketContext } from "@components/basketContext";

// export const reportWebVitals = (metric) => {
//   console.log(metric);
// };

function MyApp({ Component, pageProps }) {
  // Providers - Context/Providers, Theme, data
  // Layout
  // Props Adicionales
  return (
    <BasketContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BasketContext>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
