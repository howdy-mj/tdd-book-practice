class Money {
  constructor(protected amount: number) {}
}

class Dollar extends Money {
  constructor(props) {
    super(props);
  }

  times(num: number): number {
    return this.amount * num;
  }

  equals(targetAmount: number): boolean {
    return this.amount === targetAmount;
  }

  isClassEquals(target: any): boolean {
    return this.amount === target.amount;
  }
}

class Franc extends Money {
  constructor(props) {
    super(props);
  }

  times(num: number): number {
    return this.amount * num;
  }

  equals(targetAmount: number): boolean {
    return this.amount === targetAmount;
  }
}

const fiveDollar = new Dollar(5);
const fiveFranc = new Franc(5);

export const isEqual = new Dollar(10).equals(fiveFranc.times(2));

export const isTwoEqual = new Dollar(5).isClassEquals(new Franc(5));
