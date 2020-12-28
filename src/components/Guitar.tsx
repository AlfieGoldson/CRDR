import GuitarHead from './GuitarHead';
import Pin from './Pin';

interface Props {
	pins: Pin[];
}

export default function Guitar({ pins }: Props) {
	return (
		<div className='guitar'>
			<GuitarHead />
			<div className='pins'>
				{pins.map((pin, i) =>
					pin.type === 'blank' ? (
						<div key={i}></div>
					) : (
						<Pin
							key={i}
							title={pin.title}
							sound={pin.sound}
							reversed={pin.reversed}
						/>
					)
				)}
			</div>
		</div>
	);
}
