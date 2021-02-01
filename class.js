class Student{
    constructor(sName, sId){
        this.Name = sName;
        this.Id = sId;
        this.School = 'Pabna Zilla School';
    }
}

const student1 =new Student('Rahim', 12);
const student2 =new Student('Karim', 13);
const student3 =new Student('ALim', 14);

console.log(student1, student2, student3);

//class won way practice
class TeamMember{
    constructor(name, code, cmnt){
        this.Name = name;
        this.Code = code;
        this.Comment = cmnt;
        this.TeamName = "Bangladesh";
    }
}
 const p1 = new teamMember('Tamim', 29, 'leader')
const p2 = new teamMember('Shakib', 75, 'TK/Famous');
const p3 = new teamMember('Musi', 15, 'HardWoking/cool');
console.log(p1, p2, p3);