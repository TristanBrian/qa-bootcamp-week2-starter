// Objects with required and optional properties

let traineeProfile: {
    name: string;
    course: string;
    completedLessons: number;
    email?: string;
} = {
    name: "Tristan",
    course: "Quality Assurance",
    completedLessons: 7
};

console.log("Trainee:", traineeProfile.name);
console.log("Course:", traineeProfile.course);
console.log("Completed lessons:", traineeProfile.completedLessons);
console.log("Email:", traineeProfile.email ?? "Not provided");
