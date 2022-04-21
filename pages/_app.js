import Layout from '../components/Layout';
import theme from '../styles/theme';
import { Chakra } from '../Chakra';

function MyApp({ Component, pageProps }) {
	return (
		<Chakra cookies={pageProps.cookies} resetCSS theme={theme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Chakra>
	);
}

export default MyApp;

export { getServerSideProps } from '../Chakra';
