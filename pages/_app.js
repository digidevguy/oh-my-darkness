import { SessionProvider } from "next-auth/react";
import { Chakra } from "../Chakra";

import Layout from "../components/Layout";
import theme from "../styles/theme";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Chakra cookies={pageProps.cookies} resetCSS theme={theme}>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </Chakra>
  );
}

export default MyApp;
