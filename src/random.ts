type RNG = () => number;
type Chooser<T> = ( array: Array<T>, n: number, rng?: RNG ) => Array<T>;


export function dateRng( date: Date, period = 86400 ) {
	const epochSeconds = date.getTime() / 1000
	const coefficient  = Math.floor( epochSeconds / period )
	let seed           = Math.sin( coefficient * coefficient );

	return () => {
		const x = Math.sin( seed++ ) * 10000;
		return x - Math.floor( x );
	};
}

export function choose<T>( array: Array<T>, n: number = array.length, rng: () => number = Math.random ): Array<T> {
	const seen = new Set()
	const res  = []

	while ( n > 0 ) {

		const randomIndex = Math.floor( rng() * array.length );

		if ( seen.has( randomIndex ) ) {
			continue;
		}

		const chosen = array[ randomIndex ]
		if ( chosen ) {
			seen.add( randomIndex );
			res.push( chosen )
			n--;
		}


	}
	return res;
}

export function dateChoose<T>( array: Array<T>, n: number = array.length ): Array<T> {
	const today = new Date()
	return choose( array, n, )
}

