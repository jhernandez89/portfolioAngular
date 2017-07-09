import { Observable } from 'rxjs/Rx';

export interface Typewriter {
    message: string;
    delay: number;
}

export function typewriter(message: string, typewriter: Typewriter) {
    typewriter.message = '';
    return Observable.from(message)
    .concatMap(char => Observable.of(char).delay(typewriter.delay))
    .flatMap(char => typewriter.message += char);
}

