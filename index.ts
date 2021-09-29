class Dollar {
  constructor(private amount: number) {}

  times(): number {
    return this.amount * 2;
  }

  equals(target: Dollar): boolean {
    return this.amount === target.amount;
  }
}

const fiveDollar = new Dollar(5);
export const returnTen = fiveDollar.times();

export const isEqual = new Dollar(5).equals(new Dollar(6));
