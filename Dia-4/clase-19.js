function getStudentAverage(students) {
	const AVERAGE_FOR_EACH_STUDENTS = students.map((student) => {
		const { name, grades } = student;
		const SUM = grades.reduce(
			(acumulador, actual) => acumulador + actual,
			0
		);
		const preview_average = (SUM / grades.length).toFixed(2);
		const average = Number(preview_average);

		return { name, average };
	});
	const GRADES = AVERAGE_FOR_EACH_STUDENTS.map((student) => student.average);
	const SUM_GRADES = GRADES.reduce(
		(acumulador, actual) => acumulador + actual
	);
	const AVERAGE_GRADES_PREVIEW = (SUM_GRADES / GRADES.length).toFixed(2);
	const classAverage = Number(AVERAGE_GRADES_PREVIEW);

	return {
		classAverage,
		students: AVERAGE_FOR_EACH_STUDENTS,
	};
}

const xd = getStudentAverage([
	{
		name: "Pedro",
		grades: [90, 87, 88, 90],
	},
	{
		name: "Jose",
		grades: [99, 71, 88, 96],
	},
	{
		name: "Maria",
		grades: [92, 81, 80, 96],
	},
]);

console.log(xd);

export {};
