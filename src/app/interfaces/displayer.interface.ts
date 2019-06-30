export interface Displayer {
    _id: string;
    lat: number;
    lng: number;
    direction: number;
    path: Array<number[]>;
}