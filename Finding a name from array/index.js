// const studentsDatabase = ["john", "jane", "jill", "jack", "james"];

// const findStudent = (allStudents, studentName) => {
//   for (let i = 0; i < allStudents.length; i++) {
//     if (allStudents[i] === studentName) {
//       console.log(`Found ${studentName}`);
//     }
//   }
// };

// findStudent(studentsDatabase, "jill");


const StudentsDatabase = ["john", "jane", "jill", "jack", "james"];

const getName = (allStudents, studentName) => {
if(allStudents.includes(studentName)){
    console.log(`Found ${studentName}`)
}
}
getName(StudentsDatabase, "jill")