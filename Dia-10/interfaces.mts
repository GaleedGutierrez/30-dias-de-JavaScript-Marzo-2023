export interface InterfaceTask {
	id: number;
	name: string;
	priority: number;
	tags: string[];
	completed?: boolean;
}

export interface InterfaceTaskUpdate {
	id?: number;
	name?: string;
	priority?: number;
	tags?: string[];
	completed?: boolean;
}
