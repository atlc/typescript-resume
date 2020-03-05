var myName = 'Andrew Cartwright';
var currentCareer = 'Remote Devops Engineer';
var desiredCareer = 'Software Engineer, Educator';
var bio = 'Born on the bayou, in the backseat of a Greyhound bus, Andrew has always been interested in figuring out how things work and tinkering around with them. In early adulthood, discovering programming seemed to be a natural fit for breaking/fixing things, and he was instantly hooked.';
var interests = ['Programming', 'Linux', 'Microcontrollers', 'Combining the above for Halloween costumes'];
var positions = [
    { employer: 'Hubbard Systems', position: 'Devops Engineer', description: 'Automation, CI/CD, Packaging & Distribution' },
    { employer: 'Jefferson State Community College', position: 'Computer Lab Technician', description: 'Kept all labs in operating order. Created automated monitoring to notify of issues immediately. Tutored students in programming classes.' },
    { employer: 'Caldwell Mill Animal Clinic', position: 'Kennel Technician', description: 'Took care of everyone\'s critters' },
    { employer: 'Greystone Golf & Country Club', position: 'Bartender, Server', description: 'Slinging drinks and all that jazz.' },
];
var skills = [
    { skillName: 'Electric bass', isCool: true },
    { skillName: 'Electric guitar', isCool: true },
    { skillName: 'Chrome Extension development', isCool: true },
    { skillName: 'Tibetan Yak Racing & Yak Polo Historian', isCool: true },
    { skillName: 'Cheese enthusiast', isCool: false }
];
function displayPositions(place, title, desc) {
    console.log("* " + title + " @ " + place + "\n    // " + desc);
}
function displaySkills(skill, skillIsCool) {
    skillIsCool ? console.log("* BAM: " + skill) : console.log("* " + skill);
}
console.warn("Name:\t\t\t" + myName.toUpperCase());
console.warn("Current occupation:\t" + currentCareer);
console.warn("Desired occupation:\t" + desiredCareer);
console.info(bio);
console.info("\nInterests:");
interests.forEach(function (interest) { return console.log("* " + interest); });
console.info("\nExperience:");
positions.forEach(function (job) { return displayPositions(job.employer, job.position, job.description); });
console.info("\nSkills:");
skills.forEach(function (skill) { return displaySkills(skill.skillName, skill.isCool); });
