class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  petSound() {
    return `im pet!`;
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    super(name, age);
    this.livesLeft = livesLeft;
  }
  //기능을 확장하고 싶어서 livesLeft = 9라는 기능을 추가한다면 위처럼 적용하고 나머지 동일한 부분을 사용할 거라면 super 키워드를 사용해 name, age를 적어주면됨
  meow() {
    return "meowww!!!!";
  }
}

class Dog extends Pet {
  bark() {
    return "woooofff!!!";
  }
  eat() {
    return `${this.name} scarfs his food!`;
  }
  //만약 Pet을 확장자로 설정했지만 같은 메소드가 있다면 해당 클레스 Dog 메소드를 먼저 찾아서 있다면 그것을 적용함. 없다면 Pet 메소드를 찾아서 사용함.
}

//class 중 Dog{}와 Cat{}에 생성자 constructor(){}가 설정되어 있지 않아도 extends Pet을 클래스명 뒤에 작성하면 class Pet{}에서 생성자를 찾게끔 설정할 수 있음 Pet{}의 기능을 Cat, Dog 모두로 확장시켜서 pet{}에 있는 메소드를 사용할 수 있음

const dog1 = new Dog("낭구", 8);
console.log(dog1);
console.log(dog1.petSound());
console.log(dog1.eat());
