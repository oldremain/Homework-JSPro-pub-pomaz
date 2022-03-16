// Вариант 1. Разработать класс, описывающий вкладчика банка.
// Требования к реализации:
// Все поля класса должны иметь спецификатор доступа private.
// Доступ к полям на чтение осуществлять через get-функции.
// Доступ к полям на запись осуществлять через set-функции с проверкой корректности входных данных.
// В классе должны быть три разнотипных поля.

class Person {
  private _adress: string;
  private _name: string;
  private _sumDeposit: number;
  private _isResident: boolean;

  constructor(
    personName: string,
    personAdress: string = 'Undefined adress',
    personMoney: number,
    residentStatus: boolean
  ) {
    this._name = personName;
    this._adress = personAdress;
    this._sumDeposit = personMoney;
    this._isResident = residentStatus;
  }

  get name() {
    return this._name;
  }
  set name(value: string) {
    const itsOk = confirm('Are you sure?');
    if (itsOk) {
      this._name = value;
    }
  }

  get adress() {
    return this._adress;
  }
  set adress(value: string) {
    if (value.length === 0) {
      alert('You typed incorrect adress');
    } else {
      this._adress = value;
    }
  }

  get sumDeposit() {
    return this._sumDeposit;
  }
  set sumDeposit(value: number) {
    if (value > 10000) {
      this._sumDeposit = confirm('Check the sum. Confirm input')
        ? value
        : this._sumDeposit;
    } else if (value > 0) {
      this._sumDeposit = value;
    }
  }

  get resident() {
    return this._isResident;
  }
  set resident(value: boolean) {
    if (this._isResident && value === false) {
      this._isResident = confirm('Are you sure ?') ? value : !value;
    } else {
      this._isResident = value;
    }
  }
}

const contributor = new Person('Alex', 'Prospekt Popedy', 1000, true);

contributor.adress = 'LA 4566-09';
//bankworker.sumDeposit = 50000;
//contributor.resident = false;

console.log(contributor.adress);
console.log(contributor.sumDeposit);
console.log(contributor.resident);
console.log(contributor);
