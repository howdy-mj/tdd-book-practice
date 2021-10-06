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
}

const fiveDollar = new Dollar(5);

export const isEqual = new Dollar(10).equals(fiveDollar.times(2));
