import { MyArray } from "./exercise";

export interface IData {
	[key: number]: any;
}

export interface IMyArray {
	length: number;
	data: IData;
	map(func: any): MyArray;
	filter(func: any): MyArray;
	push(item: any): void;
	pop(): any;
	join(character: string): string;
	shift(): any;
	unshift(item: any): number | undefined;
}
