import SoundProvider from '../providers/SoundProvider';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
	return (
		<SoundProvider>
			<link rel='preconnect' href='https://fonts.gstatic.com' />
			<link
				href='https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap'
				rel='stylesheet'
			/>
			<Component {...pageProps} />
		</SoundProvider>
	);
}

export default MyApp;
