import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'

import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'
import { configTheme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={configTheme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	)
}

export default MyApp
