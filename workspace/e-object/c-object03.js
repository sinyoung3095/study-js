// static, 클래스로만 접근 가능
// 공통 요소로 적용되어야 할 프로퍼티
// User.count = 0;
// prototype, 해당 타입의 객체로만 접근 가능
// 반복되는 동일한 메소드를 prototype에 선언해놓고 한 번만 메모리에 올리기 위해
// User.prototype.introduce = function () {
//     console.log(this.name, this.age, this.gender);
// };
// function User(name, age, gender = "선택안함") {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     User.count++;
// }

// const hong = new User("홍길동", "20");
// const lee = new User("이순신", "44");

// console.log(hong);
// console.log(lee);
// console.log(User.count);

// hong.introduce();
// lee.introduce();

// 회사 객체에 직원의 정보가 있다.
// 직원의 수익이 회사의 수익에 더해져야한
Company.id = 0;
Company.income = 0;
Company.prototype = function info() {
    console.log(this.id, this.name, this.phone, this.income);
};
function Company(name, phone, income) {
    this.name = name;
    this.phone = phone;
    this.income = income;
    this.id = ++Company.id;
    Company.income += income;
}

const kim = new Company("김신영, 0101020394,5000");
const sin = new Company("신영, 0101026436394,3000");
const young = new Company("영, 01016246436394,7000");

// kim.info();
// sin.info();
// young.info();
console.log(Company.income, Company.id);

// 회사 객체에 직원의 정보가 있다.
// 직원의 수익이 회사의 수익에 더해져야한다.
Company.income = 0;
Company.prototype.setTotal = function () {
    Company.income += this.income;
};

function Company(name, age, income) {
    this.name = name;
    this.age = age;
    this.income = income;
}

const han = new Company("한동석", 20, 10000);
const hong = new Company("홍길동", 40, 20000);

han.setTotal();
hong.setTotal();

console.log(Company.income);
