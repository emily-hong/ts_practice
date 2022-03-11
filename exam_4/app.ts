let student1: Student = {
  studentID: 122231,
  studentName: 'Janet Kim',
  age: 29,
  gender: 'female',
  subject: 'Nodejs',
  courseCompleted: false,
}

interface Student {
  readonly studentID: number,
  studentName: string,
  age?: number,
  gender: 'male' | 'female' | 'genderNeutrl',
  subject: string,
  courseCompleted: boolean,
  addComment?: (comment:string) => string,
}

// Student 인터페이스를 반환값의 타입으로 가지는 함수
function getStudentDetailes(studentID: number): Student {
  return {
    studentID: 12345,
    studentName: 'Jenny Kim',
    // age: 21,
    gender: 'male',  // enum안의 값으로 설정
    subject: 'Javascript',
    courseCompleted: true,
  };
}

function saveStudentDetails (student: Student): void {}
saveStudentDetails(student1)