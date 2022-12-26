//Literal Types

const userName1 = "Bob"; //immutable
let userName2 : string | Number = "Tom";

userName2 = 3;

type Job = "Police" | "Develpoer" | "Teacher";

interface nUser {
    name: string;
    job: Job;
}

const nUser: nUser = {
    name: "Eunseo",
    job: "Develpoer"
}

interface HighSchoolStident {
    name: number | string;
    grade: 1 | 2 | 3;
}