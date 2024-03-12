function Exercise (name, muscle, duration, type){
    this.name= name,
    this.muscle= muscle,
    this.duration= duration,
    this.type= type
}

const pullExercises = [
    new Exercise("Pull-Up", "Back", "3 sets x 10-12 reps", "Bodyweight"),
    new Exercise("Lat Pulldown", "Back", "3 sets x 10-12 reps", "Machine"),
    new Exercise("Bent Over Barbell Row", "Back", "3 sets x 10-12 reps", "Free Weight"),
    new Exercise("Seated Cable Row", "Back", "3 sets x 10-12 reps", "Machine"),
    new Exercise("Face Pull", "Upper Back", "3 sets x 10-12 reps", "Cable"),
    new Exercise("Single-Arm Dumbbell Row", "Back", "3 sets x 10-12 reps", "Free Weight"),
    new Exercise("Inverted Row", "Back", "3 sets x 10-12 reps", "Bodyweight"),
    new Exercise("Chin-Up", "Back", "3 sets x 10-12 reps", "Bodyweight"),
    new Exercise("Cable Face Pull", "Upper Back","3 sets x 10-12 reps", "Cable"),
    new Exercise("T-Bar Row", "Back", "3 sets x 10-12 reps", "Machine")
];
const pushExercises = [
    new Exercise("Push-Up", "Chest", "3 sets x 10-12 reps", "Bodyweight"),
    new Exercise("Bench Press", "Chest","3 sets x 10-12 reps", "Free Weight"),
    new Exercise("Overhead Press", "Shoulders", "3 sets x 10-12 reps", "Free Weight"),
    new Exercise("Dumbbell Flyes", "Chest", "3 sets x 10-12 reps", "Free Weight"),
    new Exercise("Triceps Dip", "Triceps","3 sets x 10-12 reps", "Bodyweight"),
    new Exercise("Machine Chest Press", "Chest", 12, "Machine"),
    new Exercise("Arnold Press", "Shoulders", "3 sets x 10-12 reps", "Free Weight"),
    new Exercise("Triceps Pushdown", "Triceps", "3 sets x 10-12 reps", "Cable"),
    new Exercise("Incline Bench Press", "Upper Chest", "3 sets x 10-12 reps", "Free Weight"),
    new Exercise("Shoulder Lateral Raise", "Shoulders","3 sets x 10-12 reps", "Free Weight")
];
const squatExercises = [
    new Exercise("Barbell Back Squat", "Quadriceps", "3 sets x 10-12 reps", "Free Weight"),
    new Exercise("Front Squat", "Quadriceps", "3 sets x 10-12 reps", "Free Weight"),
    new Exercise("Goblet Squat", "Quadriceps", "3 sets x 10-12 reps", "Free Weight"),
    new Exercise("Overhead Squat", "Quadriceps", "3 sets x 10-12 reps", "Free Weight"),
    new Exercise("Hack Squat", "Quadriceps", "3 sets x 10-12 reps", "Machine"),
    new Exercise("Bulgarian Split Squat", "Quadriceps", "3 sets x 10-12 reps", "Free Weight"),
    new Exercise("Sumo Squat", "Inner Thighs", "3 sets x 10-12 reps", "Free Weight"),
    new Exercise("Box Jump", "Quadriceps", "3 sets x 10-12 reps", "Bodyweight"),
    new Exercise("Zercher Squat", "Quadriceps", "3 sets x 10-12 reps", "Free Weight"),
    new Exercise("Pistol Squat", "Quadriceps", "3 sets x 10-12 reps", "Bodyweight")
];

const hingeExercises = [
    new Exercise("Deadlift", "Hamstrings","3 sets x 10-12 reps", "Free Weight"),
    new Exercise("Romanian Deadlift", "Hamstrings", "3 sets x 10-12 reps", "Free Weight"),
    new Exercise("Kettlebell Swing", "Hamstrings","3 sets x 10-12 reps", "Kettlebell"),
    new Exercise("Good Morning", "Lower Back","3 sets x 10-12 reps", "Free Weight"),
    new Exercise("Single-Leg Romanian Deadlift", "Hamstrings", "3 sets x 10-12 reps", "Free Weight"),
    new Exercise("Stiff-Leg Deadlift", "Hamstrings", "3 sets x 10-12 reps", "Free Weight"),
    new Exercise("Hyperextension (Back Extension)", "Lower Back", "3 sets x 10-12 reps", "Machine"),
    new Exercise("Sumo Deadlift", "Hamstrings", "3 sets x 10-12 reps", "Free Weight"),
    new Exercise("Glute Bridge", "Glutes", "3 sets x 10-12 reps", "Bodyweight"),
    new Exercise("Pull-Through", "Hamstrings", "3 sets x 10-12 reps", "Cable")
];

export const pull = pullExercises;
export const push = pushExercises;
export const squat = squatExercises;
export const hinge = hingeExercises;

function displayExercises(ExerciseCategory, Exercises) {
    console.log(`--- ${ExerciseCategory} Exercises ---`);
    Exercises.forEach((Exercise, index) => {
        console.log(`Exercise ${index + 1}:`);
        console.log(`Name: ${Exercise.name}`);
        console.log(`Muscle Targeted: ${Exercise.muscle}`);
        console.log(`Duration: ${Exercise.duration} minutes`);
        console.log(`Type: ${Exercise.type}`);
        console.log("------------");
    });
}


displayExercises("Pull", pullExercises);
displayExercises("Push", pushExercises);
displayExercises("Squat", squatExercises);
displayExercises("Hinge", hingeExercises);