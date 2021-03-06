//  enum
enum GenderType {
  // 선택할 수 있는 값을 지정
  
  // 숫자형 열거형
  // Male,
  // Female,
  // genderNeutral,

  // 문자형 열거형
  Male = 'male',
  Female = 'female',
  genderNeutral = 'genderNeutral',
}

let student1 = {
  studentID: 122231,
  studentName: 'Janet Kim',
  age: 29,
  gender: GenderType.Female, // enum안의 값으로 설정
  subject: 'Nodejs',
  courseCompleted: false,
}

interface Student {
  readonly studentID: number,
  studentName: string,
  age?: number,
  gender: GenderType,
  subject: string,
  courseCompleted: boolean,
  addComment?: (comment:string) => string,
}

// Student 인터페이스를 반환값의 타입으로 가지는 함수
function getStudentDetailes(studentID: number) 
:Student {
  return {
    studentID: 12345,
    studentName: 'Jenny Kim',
    // age: 21,
    gender: GenderType.Male,  // enum안의 값으로 설정
    subject: 'Javascript',
    courseCompleted: true,
  };
}

function saveStudentDetails (student: Student): void {}
saveStudentDetails(student1)