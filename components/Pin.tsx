import { useContext } from 'react';
import { SoundContext } from '../providers/SoundProvider';

interface Props {
	title: string;
	sound: string;
	reversed: boolean;
}

export default function Pin({ title, sound, reversed }: Props) {
	const { playSound, currentSound } = useContext(SoundContext);

	return (
		<div
			style={{ top: 'xd' }}
			className={`pin-container ${
				currentSound == title ? 'playing' : ''
			} ${reversed ? 'reversed' : ''}`}
			onClick={() => playSound(title, sound)}
		>
			<h3>{title}</h3>
			<svg viewBox='0 0 35.593 32.083' className='pin'>
				<path d='M35.593,16.041h0a12.018,12.018,0,0,1-7.757,11.237L17.234,31.3A12.018,12.018,0,0,1,1.284,22.844L.327,18.825a12.013,12.013,0,0,1,0-5.567l.956-4.019A12.018,12.018,0,0,1,17.234.785L27.836,4.8a12.018,12.018,0,0,1,7.757,11.237' />
			</svg>
		</div>
	);
}
