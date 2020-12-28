import { createContext, PropsWithChildren, useState } from 'react';

type SoundType = string | null;

type SoundContextType = {
	currentSound: SoundType;
	setCurrentSound: (value: SoundType) => void;
	playSound: (title: string, url: string) => void;
	stopSound: () => void;
};

export const SoundContext = createContext<SoundContextType>({
	currentSound: null,
	setCurrentSound: () => {},
	playSound: () => {},
	stopSound: () => {},
});

let audio: HTMLAudioElement;

export default function SoundProvider({ children }: PropsWithChildren<{}>) {
	const [currentSound, setCurrentSound] = useState<SoundType>(null);

	function playSound(title, url) {
		if (audio) audio.pause();
		setCurrentSound(title);
		audio = new Audio(url);
		audio.loop = true;
		audio.play();
	}

	function stopSound() {
		if (audio) audio.pause();
		setCurrentSound(null);
	}

	return (
		<SoundContext.Provider
			value={{ currentSound, setCurrentSound, playSound, stopSound }}
		>
			{children}
		</SoundContext.Provider>
	);
}
