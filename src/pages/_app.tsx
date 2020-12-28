import { useEffect } from 'react';
import SoundProvider from '../providers/SoundProvider';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		if ('serviceWorker' in navigator) {
			window.addEventListener('load', () => {
				navigator.serviceWorker.register('/sw.js');
			});
		}
	}, []);

	return (
		<SoundProvider>
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1.0'
			/>
			<Component {...pageProps} />
		</SoundProvider>
	);
}

export default MyApp;
