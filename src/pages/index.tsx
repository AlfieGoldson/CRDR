import Head from 'next/head';
import { useContext } from 'react';
import Guitar from '../components/Guitar';
import { SoundContext } from '../providers/SoundProvider';

const pins: Pin[] = [
	{
		type: 'pin',
		title: 'E',
		sound: '/sounds/E.wav',
		offset: { x: 20, y: 20 },
	},
	{ type: 'blank' },
	{
		type: 'pin',
		title: 'G',
		sound: '/sounds/G.wav',
		offset: { x: 20, y: 20 },
		reversed: true,
	},
	{
		type: 'pin',
		title: 'A',
		sound: '/sounds/A.wav',
		offset: { x: 20, y: 20 },
	},
	{ type: 'blank' },
	{
		type: 'pin',
		title: 'B',
		sound: '/sounds/B.wav',
		offset: { x: 20, y: 20 },
		reversed: true,
	},
	{
		type: 'pin',
		title: 'D',
		sound: '/sounds/D.wav',
		offset: { x: 20, y: 20 },
	},
	{ type: 'blank' },
	{
		type: 'pin',
		title: 'e',
		sound: '/sounds/E2.wav',
		offset: { x: 20, y: 20 },
		reversed: true,
	},
];

export default function Home() {
	const { currentSound, stopSound } = useContext(SoundContext);
	return (
		<div className='container'>
			<Head>
				<title>CRDR • Guitar Tuner</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<h1>CRDR</h1>
			<div className='guitar-container'>
				<Guitar pins={pins} />
				<div
					onClick={() => stopSound()}
					className={`pause-btn ${currentSound && 'playing'}`}
				>
					<svg viewBox='0 0 80 80'>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M36 24V20C36 17.7909 34.2091 16 32 16L24 16C21.7909 16 20 17.7909 20 20V24L20 56.2807V60.2807C20 62.4898 21.7909 64.2807 24 64.2807H32C34.2091 64.2807 36 62.4898 36 60.2807L36 56.2807L36 24ZM60 24V20C60 17.7909 58.2091 16 56 16L48 16C45.7909 16 44 17.7909 44 20V24L44 56.2807V60.2807C44 62.4898 45.7909 64.2807 48 64.2807H56C58.2091 64.2807 60 62.4898 60 60.2807V56.2807L60 24Z'
						/>
						<path d='M36 24L38 24L36 24ZM36 56.2807H38H38H36ZM44 24H46H44ZM44 56.2807L42 56.2807L44 56.2807ZM34 20V24L38 24V20H34ZM24 18H32V14L24 14V18ZM22 24V20H18V24H22ZM22 56.2807L22 24H18L18 56.2807H22ZM22 60.2807V56.2807H18V60.2807H22ZM32 62.2807H24V66.2807H32V62.2807ZM34 56.2807L34 60.2807H38V56.2807H34ZM34 24L34 56.2807H38L38 24L34 24ZM58 20V24H62V20H58ZM48 18L56 18V14L48 14V18ZM46 24V20H42V24H46ZM46 56.2807L46 24H42L42 56.2807L46 56.2807ZM46 60.2807V56.2807L42 56.2807V60.2807L46 60.2807ZM56 62.2807H48V66.2807H56V62.2807ZM58 56.2807V60.2807H62V56.2807H58ZM58 24L58 56.2807H62L62 24H58ZM56 66.2807C59.3137 66.2807 62 63.5944 62 60.2807H58C58 61.3853 57.1046 62.2807 56 62.2807V66.2807ZM48 14C44.6863 14 42 16.6863 42 20H46C46 18.8954 46.8954 18 48 18V14ZM62 20C62 16.6863 59.3137 14 56 14V18C57.1046 18 58 18.8954 58 20H62ZM32 66.2807C35.3137 66.2807 38 63.5944 38 60.2807H34C34 61.3853 33.1046 62.2807 32 62.2807V66.2807ZM42 60.2807C42 63.5944 44.6863 66.2807 48 66.2807V62.2807C46.8954 62.2807 46 61.3853 46 60.2807L42 60.2807ZM24 14C20.6863 14 18 16.6863 18 20H22C22 18.8954 22.8954 18 24 18V14ZM18 60.2807C18 63.5944 20.6863 66.2807 24 66.2807V62.2807C22.8954 62.2807 22 61.3853 22 60.2807H18ZM38 20C38 16.6863 35.3137 14 32 14V18C33.1046 18 34 18.8954 34 20H38Z' />
					</svg>
				</div>
			</div>
		</div>
	);
}
