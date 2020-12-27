type Pin =
	| {
			type: 'pin';
			title: string;
			offset: { x: number; y: number };
			sound: string;
			reversed?: boolean;
	  }
	| { type: 'blank' };
