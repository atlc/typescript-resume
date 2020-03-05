const myName:string = 'Andrew Cartwright';
const currentCareer:string = 'Remote Devops Engineer';
const desiredCareer:string = 'Software Engineer, Educator';
const bio:string = 'Born on the bayou, in the backseat of a Greyhound bus, Andrew has always been interested in figuring out how things work and tinkering around with them. In early adulthood, discovering programming seemed to be a natural fit for breaking/fixing things, and he was instantly hooked.';
const interests:Array<string> = ['Programming', 'Linux', 'Microcontrollers', 'Combining the above for Halloween costumes'];
let logAttrs:string = 'color: #41FF00; background: black; font-size: 1.3rem; font-family: "Courier New", Courier, monospace';

const positions: TPositions[] = [
    { employer: 'Hubbard Systems', position: 'Devops Engineer', description: 'Automation, CI/CD, Packaging & Distribution' },
    { employer: 'Jefferson State Community College', position: 'Computer Lab Technician', description: 'Kept all labs in operating order. Created automated monitoring to notify of issues immediately. Tutored students in programming classes.'},
    { employer: 'Caldwell Mill Animal Clinic', position: 'Kennel Technician', description: 'Took care of everyone\'s critters'},
    { employer: 'Greystone Golf & Country Club', position: 'Bartender, Server', description: 'Slinging drinks and all that jazz.'},
];

const skills: Array<ISkill> = [
// const skills: ISkill[] = [
    { skillName: 'Electric bass', isCool: true },
    { skillName: 'Electric guitar', isCool: true },
    { skillName: 'Chrome Extension development', isCool: true },
    { skillName: 'Tibetan Yak Racing & Yak Polo Historian', isCool: true },
    { skillName: 'Cheese enthusiast', isCool: false }
];

function displayPositions(place:string, title:string, desc:string) {
    console.log(`%c* ${title} @ ${place}\n    // ${desc}`, logAttrs)
}

function displaySkills(skill:string, skillIsCool:boolean) {
    skillIsCool ? console.log(`%c* BAM: ${skill}`, logAttrs) : console.log(`%c* ${skill}`, logAttrs);
}

console.warn(`%cName:\t\t\t${myName.toUpperCase()}`, logAttrs);
console.warn(`%cCurrent occupation:\t${currentCareer}`, logAttrs);
console.warn(`%cDesired occupation:\t${desiredCareer}`, logAttrs);
console.info(`%c${bio}`, logAttrs);
console.info(`%cInterests:`, logAttrs);   
interests.forEach(interest => console.log(`%c* ${interest}`, logAttrs));
console.info(`%cExperience:`, logAttrs);
positions.forEach(job => displayPositions(job.employer, job.position, job.description));
console.info(`%cSkills:`, logAttrs);
skills.forEach(skill => displaySkills(skill.skillName, skill.isCool));

interface ISkill { skillName:string, isCool:boolean };
type TPositions = { employer:string, position:string, description:string }