/* eslint-disable @typescript-eslint/naming-convention */
export {};

declare global {
	interface Array<T> {
		myFilter(callback: any): Array<T>;
	}
}
