//  enum
var GenderType;
(function (GenderType) {
    // 선택할 수 있는 값을 지정
    // 숫자형 열거형
    // Male,
    // Female,
    // genderNeutral,
    // 문자형 열거형
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["genderNeutral"] = "genderNeutral";
})(GenderType || (GenderType = {}));
var student1 = {
    studentID: 122231,
    studentName: 'Janet Kim',
    age: 29,
    gender: GenderType.Female,
    subject: 'Nodejs',
    courseCompleted: false
};
// Student 인터페이스를 반환값의 타입으로 가지는 함수
function getStudentDetailes(studentID) {
    return {
        studentID: 12345,
        studentName: 'Jenny Kim',
        // age: 21,
        gender: GenderType.Male,
        subject: 'Javascript',
        courseCompleted: true
    };
}
function saveStudentDetails(student) { }
saveStudentDetails(student1);
