// Вариант 1. Разработать класс, описывающий вкладчика банка.
// Требования к реализации:
// Все поля класса должны иметь спецификатор доступа private.
// Доступ к полям на чтение осуществлять через get-функции.
// Доступ к полям на запись осуществлять через set-функции с проверкой корректности входных данных.
// В классе должны быть три разнотипных поля.

class Contributor {
  private _surname: string;
  private _sumDeposit: number;
  private _isResident: boolean;
  public citizenship: string;

  constructor(
    personSurname: string,
    personMoney: number,
    country: string,
    residentStatus: boolean = true
  ) {
    this._surname = personSurname;
    this._sumDeposit = personMoney;
    this.citizenship = country;
    this._isResident = residentStatus;
  }

  get surname() {
    return this._surname;
  }
  set surname(value: string) {
    if (value.length < 2) {
      console.log('Too short');
    } else {
      this._surname = value;
    }
  }

  get sumDeposit() {
    return this._sumDeposit;
  }
  set sumDeposit(value: number) {
    if (value < 0) {
      console.log('The sum must be > 0');
    } else {
      this._sumDeposit = value;
    }
  }

  get resident() {
    return this._isResident;
  }
  set resident(value: boolean) {
    if (this.citizenship === 'BY' && value === false) {
      console.log('Change citizenship first');
    } else {
      this._isResident = value;
    }
  }
}

const contributor = new Contributor('Kolosov', 1000, 'BY');

contributor.surname = 'Ivanov';

contributor.sumDeposit = 500.4;

//contributor.citizenship = 'PLN';

contributor.resident = false;

console.log(contributor.surname);
console.log(contributor.sumDeposit);
console.log(contributor.resident);
console.log(contributor.citizenship);
console.log(contributor);
