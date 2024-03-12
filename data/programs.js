function Programs(name, athleteType, sessionsPerWeek, style, equipment, description, image) {
  this.name = name,
  this.athleteType = athleteType,
  this.sessionsPerWeek = sessionsPerWeek,
  this.style = style,
  this.equipment = equipment,
  this.description = description,
  this.image = image
}

const hww60 = new Programs(
  "HWW 60",
  "General",
  5,
  "Strength and Conditioning",
  "Minimal",
  "HWW 60 is a comprehensive fitness program suitable for individuals at all levels of expertise. With a focus on strength and conditioning, this program is meticulously crafted to enhance your overall physical well-being. Designed for five training sessions per week, it strikes a perfect balance between intensity and recovery, promoting a sustainable and effective training routine.",
  "./../public/image/backgroundimgBW.png"
);

const hwwSweat = new Programs(
  "HWW SWEAT",
  "Endurance",
  4,
  "Cardio and Endurance",
  "Basic Equipment",
  "Embark on a journey of improved cardiovascular fitness with HWW SWEAT. This endurance-focused program is tailored for those seeking to elevate their stamina and resilience. Offering a blend of cardio and endurance training, it incorporates diverse exercises to keep your workouts engaging and effective. With a recommended four training sessions per week, HWW SWEAT is your pathway to achieving endurance excellence.",
  "./../public/image/cardio.png"
);

const hwwLift = new Programs(
  "HWW LIFT",
  "Strength",
  6,
  "Powerlifting",
  "Barbell and Plates",
  "Unleash your strength potential with HWW LIFT, a program designed for powerlifting enthusiasts. With an emphasis on foundational strength movements, this program is crafted to elevate your powerlifting capabilities. From squats to deadlifts, each session is a step towards unlocking your true strength. Recommended for six training sessions per week, HWW LIFT is your key to building a solid and powerful physique.",
  "./../public/image/gamesathletecolor.png"
);

const hwwElite = new Programs(
  "HWW ELITE",
  "Advanced",
  7,
  "Olympic Weightlifting",
  "Full Gym Setup",
  "For elite athletes seeking the pinnacle of performance, HWW ELITE stands as the epitome of advanced training. This program integrates Olympic weightlifting techniques to push your limits and redefine what your body can achieve. With a full gym setup, each session is meticulously crafted to challenge and refine your skills. Aimed at those dedicated to their craft, HWW ELITE recommends seven training sessions per week to unlock your full athletic potential.",
  "./../public/image/gymnastic.png"
);

  export const hww_Sweat = hwwSweat;
  export const hww_Lift = hwwLift;
  export const hww_Elite = hwwElite;
  export const hww_60 = hww60;
  export const allPrograms = [hww60, hwwSweat, hwwLift, hwwElite] 